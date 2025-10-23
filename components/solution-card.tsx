import type { LucideIcon } from "lucide-react"
import { Button } from "@/components/ui/button"
import { ArrowRight } from "lucide-react"

interface SolutionCardProps {
  icon: LucideIcon
  title: string
  description: string
  features: string[]
  locale?: string
}

export function SolutionCard({ icon: Icon, title, description, features, locale = "en" }: SolutionCardProps) {
  return (
    <div className="bg-card border border-border rounded-xl p-8 hover:border-primary/50 transition-all group">
      <div className="w-14 h-14 bg-primary/10 rounded-xl flex items-center justify-center mb-6 group-hover:bg-primary/20 transition-colors">
        <Icon className="h-7 w-7 text-primary" />
      </div>
      <h3 className="text-2xl font-semibold mb-4">{title}</h3>
      <p className="text-muted-foreground mb-6 leading-relaxed">{description}</p>
      <ul className="space-y-3 mb-6">
        {features.map((feature, index) => (
          <li key={index} className="flex items-start gap-3">
            <div className="mt-1 text-primary">
              <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
              </svg>
            </div>
            <span className="text-sm text-muted-foreground">{feature}</span>
          </li>
        ))}
      </ul>
      <Button variant="ghost" className="group/btn p-0 h-auto font-medium">
        {locale === "zh" ? "了解更多" : "Learn more"}
        <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover/btn:translate-x-1" />
      </Button>
    </div>
  )
}
