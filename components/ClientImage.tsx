"use client";

interface ClientImageProps {
  src: string;
  alt: string;
  className?: string;
  fallbackSrc?: string;
  style?: React.CSSProperties;
}

export default function ClientImage({
  src,
  alt,
  className,
  fallbackSrc,
  style,
}: ClientImageProps) {
  const defaultFallback =
    "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='200' height='200' viewBox='0 0 200 200'%3E%3Crect width='200' height='200' fill='%23e0f2fe' rx='24'/%3E%3Ctext x='100' y='115' text-anchor='middle' font-size='80' fill='%230284c7'%3E%F0%9F%92%8A%3C/text%3E%3C/svg%3E";

  return (
    <img
      src={src}
      alt={alt}
      className={className}
      style={style}
      onError={(e) => {
        const el = e.target as HTMLImageElement;
        el.src = fallbackSrc || defaultFallback;
        el.onerror = null; // prevent infinite loop
      }}
    />
  );
}
