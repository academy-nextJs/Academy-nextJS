"use client";

import { useState, useEffect } from "react";
import { Input, Listbox, ListboxItem, Card } from "@heroui/react";
import { motion, AnimatePresence } from "framer-motion";

const suggestions: string[] = [
  "Apple",
  "Banana",
  "Cherry",
  "Grapes",
  "Mango",
  "Orange",
  "Peach",
  "Strawberry",
];

export default function Autocomplete() {
  const [query, setQuery] = useState<string>("");
  const [selected, setSelected] = useState<string | null>(null);
  const [filtered, setFiltered] = useState<string[]>(suggestions);
  const [activeIndex, setActiveIndex] = useState<number>(-1);
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const [isFocused, setIsFocused] = useState<boolean>(false);

  useEffect(() => {
    if (query.length > 0) {
      setFiltered(
        suggestions.filter((item) =>
          item.toLowerCase().includes(query.toLowerCase())
        )
      );
      setIsOpen(true);
    } else {
      setIsOpen(false);
    }
  }, [query]);

  const handleInputChange = (value: string) => {
    setQuery(value);
    setActiveIndex(-1);
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (filtered.length === 0) return;

    if (e.key === "ArrowDown") {
      setActiveIndex((prev) => (prev < filtered.length - 1 ? prev + 1 : prev));
    } else if (e.key === "ArrowUp") {
      setActiveIndex((prev) => (prev > 0 ? prev - 1 : 0));
    } else if (e.key === "Enter" && activeIndex >= 0) {
      setQuery(filtered[activeIndex]);
      setSelected(filtered[activeIndex]);
      setIsOpen(false);
    } else if (e.key === "Escape") {
      setIsOpen(false);
    }
  };

  return (
    <div className="relative w-full max-w-md">
      <div className="relative">
        <motion.label
          className={`absolute left-3 text-gray-500 transition-all z-50 ${
            isFocused || query
              ? "-top-3 bg-base text-sm px-1"
              : "top-2 text-base"
          }`}
          onClick={() => setIsFocused(true)}
        >
          Search for a fruit :
        </motion.label>
        <Input
          type="text"
          placeholder=""
          value={query}
          onChange={(e) => handleInputChange(e.target.value)}
          onKeyDown={handleKeyDown}
          onFocus={() => setIsFocused(true)}
          onBlur={() => setIsFocused(false)}
          className="w-full"
          variant="bordered"
        />
      </div>

      <AnimatePresence>
        {isOpen && filtered.length > 0 && (
          <motion.div
            initial={{ opacity: 0, y: 5 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -5 }}
            transition={{ duration: 0.2 }}
          >
            <Card className="absolute mt-1 w-full z-10 shadow-lg">
              <Listbox
                aria-label="Autocomplete suggestions"
                onAction={(key) => {
                  const selectedItem = key.toString();
                  setSelected(selectedItem);
                  setQuery(selectedItem);
                  setIsOpen(false);
                }}
              >
                {filtered.map((item, index) => (
                  <ListboxItem
                    key={item}
                    textValue={item}
                    className={`${
                      activeIndex === index ? "bg-gray-200" : ""
                    } cursor-pointer px-3 py-2`}
                  >
                    {item}
                  </ListboxItem>
                ))}
              </Listbox>
            </Card>
          </motion.div>
        )}
      </AnimatePresence>

      {selected && <p className="mt-2 text-gray-500">Selected: {selected}</p>}
    </div>
  );
}
