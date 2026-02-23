import * as React from "react"
import { cn } from "@/lib/utils"
import { Check } from "lucide-react"

interface StepperProps {
  steps: string[]
  currentStep: number
  className?: string
}

export function Stepper({ steps, currentStep, className }: StepperProps) {
  return (
    <div className={cn("flex items-center w-full justify-between", className)}>
      {steps.map((step, index) => (
        <React.Fragment key={step}>
          <div className="flex flex-col items-center gap-2 relative z-10">
            <div
              className={cn(
                "w-10 h-10 rounded-full flex items-center justify-center border-2 transition-all duration-300",
                index < currentStep
                  ? "bg-ci-success border-ci-success text-white"
                  : index === currentStep
                  ? "border-ci-strong bg-ci-strong text-white shadow-lg shadow-ci-strong/20"
                  : "border-ci-concrete bg-white text-ci-muted"
              )}
            >
              {index < currentStep ? (
                <Check className="w-5 h-5" />
              ) : (
                <span className="text-sm font-bold">{index + 1}</span>
              )}
            </div>
            <span
              className={cn(
                "text-[10px] uppercase tracking-wider font-bold absolute -bottom-6 whitespace-nowrap",
                index <= currentStep ? "text-ci-ink" : "text-ci-muted"
              )}
            >
              {step}
            </span>
          </div>
          {index < steps.length - 1 && (
            <div className="flex-1 h-[2px] mx-4 bg-ci-concrete relative">
              <div
                className="absolute inset-0 bg-ci-success transition-all duration-500"
                style={{
                  width: index < currentStep ? "100%" : "0%",
                }}
              />
            </div>
          )}
        </React.Fragment>
      ))}
    </div>
  )
}
