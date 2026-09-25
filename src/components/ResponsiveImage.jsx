const ResponsiveImage = ({
  name,
  fallback,
  alt,
  widths,
  sizes,
  width,
  height,
  className,
  loading = "lazy",
  fetchPriority,
}) => {
  const sources = (format) =>
    widths.map((imageWidth) => `/images/${name}/${imageWidth}.${format} ${imageWidth}w`).join(", ");

  return (
    <picture>
      <source type="image/avif" srcSet={sources("avif")} sizes={sizes} />
      <source type="image/webp" srcSet={sources("webp")} sizes={sizes} />
      <img
        src={fallback}
        alt={alt}
        width={width}
        height={height}
        sizes={sizes}
        loading={loading}
        decoding="async"
        fetchPriority={fetchPriority}
        className={className}
      />
    </picture>
  );
};

export default ResponsiveImage;
