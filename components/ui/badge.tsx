import * as React from "react"
import { cva, type VariantProps } from "class-variance-authority"
import { cn } from "@/lib/utils"

const badgeVariants = cva(
  "inline-flex items-center rounded-full border px-2.5 py-0.5 text-xs font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ci-strong/20",
  {
    variants: {
      variant: {
        default:
          "border-transparent bg-ci-strong text-white hover:bg-ci-strong-700",
        secondary:
          "border-transparent bg-ci-safety text-ci-ink hover:bg-ci-safety-700",
        outline: "text-ci-ink border-ci-concrete",
        success: "border-transparent bg-ci-success text-white",
        danger: "border-transparent bg-ci-danger text-white",
        muted: "border-transparent bg-ci-concrete text-ci-slate",
      },
    },
    defaultVariants: {
      variant: "default",
    },
  }
)

export interface BadgeProps
  extends React.HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof badgeVariants> {}

function Badge({ className, variant, ...props }: BadgeProps) {
  return (
    <div className={cn(badgeVariants({ variant }), className)} {...props} />
  )
}

export { Badge, badgeVariants }
