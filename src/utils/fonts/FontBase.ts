import localFont from "next/font/local";

const font = localFont({
  src: [
    {
      path: "../../assets/fonts/PeydaWeb Light.ttf",
      style: "normal",
      weight: "300",
    },
    {
      path: "../../assets/fonts/PeydaWeb SemBd.ttf",
      style: "normal",
      weight: "400",
    },
    {
      path: "../../assets/fonts/PeydaWeb ExtBd.ttf",
      style: "normal",
      weight: "500",
    },
  ],
});

export const FontBase = () => {
  return font;
};
