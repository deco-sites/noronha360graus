import Image from "deco-sites/std/components/Image.tsx";
import Slider from "$store/components/ui/Slider.tsx";
import type { Image as LiveImage } from "deco-sites/std/components/types.ts";

export interface Highlight {
  src: LiveImage;
  alt: string;
  href: string;
  label: string;
  /**
   * @title Visiblidade do texto
   * @default visible
   */
  textVisibility: "visible" | "hidden";
}

export interface Props {
  title: string;
  highlights?: Highlight[];
}

function Highlights({ highlights = [], title }: Props) {
  return (
    <div class="container grid grid-cols-1 grid-rows-[48px_1fr] py-10">
      <h2 class="text-center">
        <span class="font-medium text-2xl">{title}</span>
      </h2>

      <Slider class="carousel carousel-center sm:justify-center gap-6">
        {highlights.map(({ href, src, alt, label, textVisibility }, index) => (
          <Slider.Item
            index={index}
            class="carousel-item first:ml-6 sm:first:ml-0 last:mr-6 sm:last:mr-0 min-w-[335px]"
          >
            <a href={href} class="card card-compact bg-base-100">
              <figure class="relative rounded-lg before:absolute before:w-full before:h-full before:opacity-0 before:bg-black/50 before:hover:opacity-100 before:transition-opacity before:duration-300">
                <Image
                  src={src}
                  alt={alt}
                  width={335}
                  height={335}
                  class="h-auto"
                />
              </figure>
              {textVisibility === "visible" && (
                <div class="card-body items-center">
                  <h2 class="card-title text-base font-medium">{label}</h2>
                </div>
              )}
            </a>
          </Slider.Item>
        ))}
      </Slider>
    </div>
  );
}

export default Highlights;
