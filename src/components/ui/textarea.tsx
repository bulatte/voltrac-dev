import * as React from "react";

import { cn } from "@/lib/utils";

function Textarea({ className, ...props }: React.ComponentProps<"textarea">) {
  return (
    <textarea
      data-slot="textarea"
      className={cn(
        "border-white-25 placeholder:text-white-3 focus-visible:border-white aria-invalid:border-b-destructive/40 aria-invalid:border-destructive flex field-sizing-content min-h-16 w-full border-b bg-transparent py-2 text-paragraph-m transition-[color,box-shadow,border-color] outline-none disabled:cursor-not-allowed disabled:opacity-50 md:text-sm",
        className,
      )}
      {...props}
    />
  );
}

export { Textarea };
