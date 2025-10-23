import { ArrowRight } from "lucide-react"
import Link from "next/link"

interface CaseStudyCardProps {
  title: string
  description: string
  image: string
  category: string
  href: string
  locale?: string
}

export function CaseStudyCard({ title, description, image, category, href, locale = "en" }: CaseStudyCardProps) {
  return (
    <Link href={href} className="group block">
      <div className="bg-card border border-border rounded-lg overflow-hidden transition-all hover:border-primary/50">
        <div className="aspect-video bg-muted relative overflow-hidden">
          <img
            src={image || "/placeholder.svg"}
            alt={title}
            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
          />
        </div>
        <div className="p-6">
          <div className="text-xs text-primary font-semibold mb-2 uppercase tracking-wider">{category}</div>
          <h3 className="text-xl font-semibold mb-2 group-hover:text-primary transition-colors">{title}</h3>
          <p className="text-muted-foreground text-sm mb-4 line-clamp-2">{description}</p>
          <div className="flex items-center gap-2 text-sm text-primary font-medium">
            {locale === "zh" ? "阅读更多" : "Read more"}
            <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
          </div>
        </div>
      </div>
    </Link>
  )
}
