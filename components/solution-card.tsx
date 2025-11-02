import type { LucideIcon } from "lucide-react"
import { Button } from "@/components/ui/button"
import { ArrowRight } from "lucide-react"

interface SolutionCardProps {
  icon: LucideIcon
  title: string
  description: string
  locale?: string
}

export function SolutionCard({ icon: Icon, title, description, locale = "en" }: SolutionCardProps) {
  return (
    <div className="bg-card border border-border rounded-xl p-8 hover:border-primary/50 transition-all group">
      <div className="w-14 h-14 bg-primary/10 rounded-xl flex items-center justify-center mb-6 group-hover:bg-primary/20 transition-colors">
        <Icon className="h-7 w-7 text-primary" />
      </div>
      <h3 className="text-2xl font-semibold mb-4">{title}</h3>
      <p className="text-muted-foreground mb-8 leading-relaxed whitespace-pre-line">{description}</p>
      <Button variant="ghost" className="group/btn p-0 h-auto font-medium">
        {locale === "zh" ? "了解更多" : "Learn more"}
        <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover/btn:translate-x-1" />
      </Button>
    </div>
  )
}
