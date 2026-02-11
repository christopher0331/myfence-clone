interface ImageGridProps {
  columns?: 2 | 3;
  children: React.ReactNode;
}

/** Side-by-side image layout matching legacy posts */
export default function ImageGrid({ columns = 2, children }: ImageGridProps) {
  const gridClass = columns === 3 ? "grid md:grid-cols-3 gap-6" : "grid md:grid-cols-2 gap-6";
  return <div className={`${gridClass} my-8`}>{children}</div>;
}
