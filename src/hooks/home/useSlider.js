import { useCallback, useEffect, useRef, useState } from "react";

export default function useSlider(slideCount) {
  const intervalRef = useRef(null);
  const [currentSlideIndex, setCurrentSlideIndex] = useState(0);

  const navigateBack = useCallback(() => {
    setCurrentSlideIndex((prev) => {
      const newIndex = prev - 1;
      return newIndex < 0 ? slideCount - 1 : newIndex;
    });
  }, [slideCount]);

  const navigateNext = useCallback(() => {
    setCurrentSlideIndex((prev) => {
      const newIndex = prev + 1;
      return newIndex >= slideCount ? 0 : newIndex;
    });
  }, [slideCount]);

  const removeInterval = useCallback(() => clearInterval(intervalRef.current), []);

  const createInterval = useCallback(() => {
    removeInterval();
    intervalRef.current = setInterval(navigateNext, 5000);
  }, [navigateNext, removeInterval]);

  useEffect(() => {
    createInterval();
    return removeInterval;
  }, [createInterval, removeInterval]);

  return { currentSlideIndex, navigateNext, navigateBack, createInterval, removeInterval };
}
