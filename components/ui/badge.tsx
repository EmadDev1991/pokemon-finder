import * as React from "react"
import { cva, type VariantProps } from "class-variance-authority"

import { cn } from "@/lib/utils"


/// this badge is supposed to represent a pokemon type
/// the variants representing a the color for each pokemon type 

const badgeVariants = cva(
  "inline-flex items-center rounded-md border px-4 py-2 text-xs font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2",
  {
    variants: {
      variant: {
        default:
          "border-transparent bg-primary text-primary-foreground hover:bg-primary/80",
        grass:
          "border-transparent bg-green-300 text-secondary-foreground ",
          poison:
          "border-transparent bg-purple-300 text-secondary-foreground ",
          normal:
          "border-transparent bg-stone-500 text-secondary-foreground ",
          fighting:
          "border-transparent bg-red-400 text-secondary-foreground ",
          flying:
          "border-transparent bg-blue-500 text-secondary-foreground ",
          ground:
          "border-transparent bg-amber-900 text-secondary-foreground ",
          rock:
          "border-transparent bg-yellow-900 text-secondary-foreground ",
          bug:
          "border-transparent bg-green-800 text-secondary-foreground ",
          ghost:
          "border-transparent bg-stone-300 text-secondary-foreground ",
          steel:
          "border-transparent bg-neutral-400 text-secondary-foreground ",
          fire:
          "border-transparent bg-red-500 text-secondary-foreground ",
          water:
          "border-transparent bg-cyan-300 text-secondary-foreground ",
          electric:
          "border-transparent bg-yellow-300 text-secondary-foreground ",
          psychic:
          "border-transparent bg-purple-300 text-secondary-foreground ",
          ice:
          "border-transparent bg-blue-400 text-secondary-foreground ",
          dragon:
          "border-transparent bg-red-700 text-secondary-foreground ",
          dark:
          "border-transparent bg-violet-300 text-secondary-foreground ",
          fairy:
          "border-transparent bg-pink-300 text-secondary-foreground ",
        outline: "text-foreground",
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
