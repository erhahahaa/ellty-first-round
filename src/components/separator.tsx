interface SeparatorProps {
  orientation?: "horizontal" | "vertical";
  className?: string;
}

export const Separator = ({ orientation = "horizontal", className }: SeparatorProps) => {
  return (
    <div
      role="separator"
      aria-orientation={orientation}
      className={
        orientation === "horizontal"
          ? `w-full h-[0.7px] bg-border ${className}`
          : `h-full w-[0.7px] bg-border ${className}`
      }
    />
  )

}

