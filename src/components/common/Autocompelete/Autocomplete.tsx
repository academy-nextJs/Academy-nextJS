import { FC } from "react";
import { Autocomplete, AutocompleteItem } from "@heroui/react";

interface AutocompleteProps {
  children?: (item: any) => JSX.Element;
  className?: string;
  defaultItems?: any[];
  label?: string;
  listboxProps?: {
    emptyContent: string;
  };
  placeholder?: string;
  options: any[];
}

const LocalAutocomplete: FC<AutocompleteProps> = ({ options }) => {
  return (
    <div className="flex w-full flex-wrap md:flex-nowrap gap-4">
      <Autocomplete
        className="max-w-xs"
        defaultItems={options}
        label="Favorite Animal"
        variant="bordered"
        listboxProps={{
          emptyContent: "Your own empty content text.",
        }}
        placeholder="Search an animal"
      >
        {(item) => (
          <AutocompleteItem key={item.key}>{item.label}</AutocompleteItem>
        )}
      </Autocomplete>
    </div>
  );
};

export default LocalAutocomplete;
