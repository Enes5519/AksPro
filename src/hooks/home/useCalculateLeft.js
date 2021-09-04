import { useCallback } from "react";

export default function useCalculateLeft(widthOfSlide, currentSlideIndex) {
  const calculateLeft = useCallback(
    (index) => Math.abs(widthOfSlide * (currentSlideIndex - index)),
    [widthOfSlide, currentSlideIndex]
  );

  return useCallback(
    (index) => {
      if (index < currentSlideIndex) {
        return `-${calculateLeft(index)}px`;
      }
      if (index > currentSlideIndex) {
        return `${calculateLeft(index)}px`;
      }

      return 0;
    },
    [calculateLeft, currentSlideIndex]
  );
}
