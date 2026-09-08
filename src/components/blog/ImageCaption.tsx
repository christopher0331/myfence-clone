interface ImageCaptionProps {
  children: React.ReactNode;
}

/** Caption below images, e.g. "Image courtesy of Barrier Boss USA" */
export default function ImageCaption({ children }: ImageCaptionProps) {
  return (
    <p className="text-center text-sm text-muted-foreground mt-2 mb-6">
      {children}
    </p>
  );
}
