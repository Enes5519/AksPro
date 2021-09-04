import Layout from "@/components/core/Layout";
import IconChevronRight from "@/icons/chevron_right.svg";
import IconChevronLeft from "@/icons/chevron_left.svg";
import useCalculateLeft from "@/hooks/home/useCalculateLeft";
import useInnerWidth from "@/hooks/home/useInnerWidth";
import useSlider from "@/hooks/home/useSlider";
import Meta from "@/components/core/Meta";

const sliderImages = ["/slider/1.jpg", "/slider/2.jpeg", "/slider/3.png"];

export default function Home() {
  const { currentSlideIndex, navigateNext, navigateBack, removeInterval, createInterval } = useSlider(
    sliderImages.length
  );
  const widthOfSlide = useInnerWidth();
  const calculateLeft = useCalculateLeft(widthOfSlide, currentSlideIndex);

  return (
    <Layout className="grid">
      <Meta />
      <div className="relative overflow-hidden w-full h-full">
        {sliderImages.map((sliderImage, index) => (
          <section
            className="absolute w-full h-full transition-all"
            key={sliderImage}
            style={{ left: calculateLeft(index) }}
            onMouseOver={removeInterval}
            onFocus={removeInterval}
            onMouseOut={createInterval}
            onBlur={createInterval}
          >
            <img src={sliderImage} alt="Aks &amp; Pro" className="w-full h-full object-cover" />
          </section>
        ))}
        <button
          className="drop-shadow absolute top-1/2 text-xl text-white opacity-50 transition-opacity cursor-pointer select-none hover:opacity-100 -translate-y-1/2 left-5"
          onClick={navigateBack}
          type="button"
        >
          <IconChevronLeft className="w-16 h-16" />
        </button>
        <button
          className="drop-shadow absolute top-1/2 text-xl text-white opacity-50 transition-opacity cursor-pointer select-none hover:opacity-100 -translate-y-1/2 right-5"
          onClick={navigateNext}
          type="button"
        >
          <IconChevronRight className="w-16 h-16" />
        </button>
      </div>
    </Layout>
  );
}
