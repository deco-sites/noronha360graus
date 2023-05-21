import type { Image } from "deco-sites/std/components/types.ts";

export interface Props {
  /** @title Shortcuts */
  items: Item[];

  /** @title Largura dos Itens */
  width: number;

  /** @title Altura dos Itens */
  height: number;
}

export interface Item {
  /** @title Imagem */
  img: Image;

  /** @title Link de Redirecionamento */
  link: string;

  /** @title Texto Alternativo */
  alt: string;

  /** @title Título da Imagem */
  title: string;
}

const itemsProps: Item[] = [
  {
    img:
      "https://ozksgdmyrqcxcwhnbepg.supabase.co/storage/v1/object/public/assets/239/84787ff2-6ea9-4ddf-bd44-621644d529ab",
    link: "/",
    alt: "WhatsApp",
    title: "WhatsApp",
  },
  {
    img:
      "https://ozksgdmyrqcxcwhnbepg.supabase.co/storage/v1/object/public/assets/239/94f0a01a-f260-47b2-9dd1-6d5aad22980c",
    link: "/",
    alt: "Messages",
    title: "Messages",
  },
  {
    img:
      "https://ozksgdmyrqcxcwhnbepg.supabase.co/storage/v1/object/public/assets/239/f4ccc342-ec79-4132-a9b0-129d191d19ec",
    link: "/",
    alt: "Ruler",
    title: "Ruler",
  },
  {
    img:
      "https://ozksgdmyrqcxcwhnbepg.supabase.co/storage/v1/object/public/assets/239/2eaca7a2-6671-48c8-8c2a-b444c841e9cf",
    link: "/",
    alt: "Truck Delivery",
    title: "Truck Delivery",
  },
  {
    img:
      "https://ozksgdmyrqcxcwhnbepg.supabase.co/storage/v1/object/public/assets/239/568e397f-90a0-4889-8742-ab091f1e9f81",
    link: "/",
    alt: "Arrows Right Left",
    title: "Arrows Right Left",
  },
];

const Shortcuts = ({ items = itemsProps, width = 24, height = 24 }: Props) => {
  return (
    <ul class="fixed z-20 top-1/2 -translate-y-1/2 right-0 bg-white divide-y divide-gray-400 drop-shadow-md border border-gray-400 border-r-0 rounded-lg rounded-r-none">
      {items.map((item) => (
        <li class="flex justify-center items-center">
          <a
            href={item.link}
            target="_blank"
            data-tip={item.title}
            class="flex justify-center items-center p-2.5 lg:tooltip lg:tooltip-left rounded-none text-white text-center leading-4 h-11"
          >
            <img
              width={width}
              height={height}
              src={item.img}
              alt={item.alt}
            />
          </a>
        </li>
      ))}
    </ul>
  );
};

export default Shortcuts;
