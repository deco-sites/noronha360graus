import Image from "deco-sites/std/components/Image.tsx";
import type { Image as LiveImage } from "deco-sites/std/components/types.ts";

export interface Props {
  title: string;
  titleIcon?: Image & {
    width: number;
    height: number;
  };
  images: Array<Image>;
}

export interface Image {
  src: LiveImage;
  alt: string;
}

function Mosaic({ title, titleIcon, images }: Props) {
  return (
    <div class="container px-4 mb-6">
      <h2 class="flex justify-center items-center gap-2 text-2xl text-center mb-4">
        {titleIcon && (
          <Image
            src={titleIcon.src}
            width={titleIcon.width}
            height={titleIcon.height}
            alt={titleIcon.alt}
          />
        )}
        <span>{title}</span>
      </h2>
      <div class="grid grid-cols-6 grid-rows-3 gap-2 mx-auto">
        {images.map(({ src, alt }) => (
          <div
            class={`
            [&:nth-child(1)]:col-span-4 [&:nth-child(1)]:row-span-2
            [&:nth-child(2)]:col-span-2
            [&:nth-child(3)]:col-span-2 
            [&:nth-child(4)]:col-span-3 lg:[&:nth-child(4)]:col-span-3
            [&:nth-child(5)]:col-span-3
          `}
          >
            <Image
              src={src}
              alt={alt}
              width={400}
              height={400}
              class="w-full h-full object-cover"
            />
          </div>
        ))}
      </div>
    </div>
  );
}

export default Mosaic;
