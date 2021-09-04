import { useEffect, useState } from "react";

export default function useInnerWidth() {
  const [widthOfSlide, setWidthOfSlide] = useState(0);

  useEffect(() => {
    const onResize = () => setWidthOfSlide(window.innerWidth);
    onResize();

    document.addEventListener("resize", onResize);
    return () => document.removeEventListener("resize", onResize);
  }, []);

  return widthOfSlide;
}
