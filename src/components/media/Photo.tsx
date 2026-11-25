import Image from "next/image";
import { getImageSlot, type PhotoShape, type PhotoTint } from "@/content/images";
import { SHOW_IMAGE_CAPTIONS } from "@/content/site";

interface PhotoProps {
  slot: string;
  priority?: boolean;
  sizes?: string;
  shapeOverride?: PhotoShape;
  aspectOverride?: string;
  className?: string;
}

const TINT_CLASSES: Record<PhotoTint, string> = {
  wave: "bg-wave-300/25 border-wave-300/60",
  sand: "bg-sand border-chikoo/20",
  sun: "bg-sun-400/20 border-sun-400/40",
};

const SHAPE_CLASSES: Record<PhotoShape, string> = {
  arch: "rounded-t-[9999px] rounded-b-[20px]",
  rect: "rounded-2xl",
  circle: "rounded-full",
};

export function Photo({
  slot,
  priority = false,
  sizes = "(max-width: 768px) 100vw, 50vw",
  shapeOverride,
  aspectOverride,
  className = "",
}: PhotoProps) {
  const info = getImageSlot(slot);
  const shape = shapeOverride ?? info.shape;
  const aspect = aspectOverride ?? info.aspect;
  const showCaption = SHOW_IMAGE_CAPTIONS;

  return (
    <div
      style={{ aspectRatio: aspect }}
      className={`group/photo relative w-full overflow-hidden ${SHAPE_CLASSES[shape]} ${className}`}
    >
      {info.src ? (
        <Image
          src={info.src}
          alt={info.alt}
          fill
          priority={priority}
          sizes={sizes}
          className="object-cover transition-transform duration-700 ease-out group-hover/photo:scale-[1.04]"
        />
      ) : (
        <div
          role="img"
          aria-label={info.alt}
          className={`relative flex h-full w-full flex-col justify-end border ${TINT_CLASSES[info.tint]} p-4 sm:p-5`}
        >
          {showCaption ? (
            <span className="relative z-10 inline-block max-w-full self-start rounded-full bg-foam/90 px-3 py-1 text-xs font-semibold text-navy-700">
              {info.caption}
            </span>
          ) : null}
        </div>
      )}
    </div>
  );
}
