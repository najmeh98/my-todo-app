import { useState } from "react";

export const useHover = () => {
  const [hoverd, setHovered] = useState<boolean>(false);

  return [
    hoverd,
    {
      onmouseenter: () => {
        setHovered(true);
      },
      onmousemove: () => {
        !hoverd ? setHovered(true) : undefined;
      },
      onmouseleave: () => {
        setHovered(false);
      },
    },
  ];
};
