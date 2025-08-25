import { cn } from "@/lib/utils";

const Container = ({
  children,
  className,
  offset = true,
}: {
  children: React.ReactNode;
  className?: string;
  offset?: boolean;
}) => (
  <div
    className={cn(
      "max-w-7xl mx-auto",
      offset ? "lg:pl-48" : "px-[var(--cxp)]",
      className,
    )}
  >
    <div className={cn(offset && "lg:border-l lg:border-l-white-25")}>
      {children}
    </div>
  </div>
);

export default Container;
