import { Check, X } from "lucide-react"

interface ComparisonRow {
  feature: string
  traditional: boolean
  functions: boolean
}

interface ComparisonTableProps {
  title: string
  rows: ComparisonRow[]
  locale?: string
}

export function ComparisonTable({ title, rows, locale = "en" }: ComparisonTableProps) {
  return (
    <div className="bg-card border border-border rounded-xl overflow-hidden">
      <div className="p-6 border-b border-border">
        <h3 className="text-2xl font-semibold">{title}</h3>
      </div>
      <div className="overflow-x-auto">
        <table className="w-full">
          <thead>
            <tr className="border-b border-border bg-muted/30">
              <th className="text-left p-4 font-semibold">{locale === "zh" ? "功能" : "Feature"}</th>
              <th className="text-center p-4 font-semibold">{locale === "zh" ? "传统方法" : "Traditional"}</th>
              <th className="text-center p-4 font-semibold bg-primary/5">
                <span className="text-primary">Functions Ltd</span>
              </th>
            </tr>
          </thead>
          <tbody>
            {rows.map((row, index) => (
              <tr key={index} className="border-b border-border last:border-0">
                <td className="p-4 text-muted-foreground">{row.feature}</td>
                <td className="p-4 text-center">
                  {row.traditional ? (
                    <Check className="h-5 w-5 text-muted-foreground mx-auto" />
                  ) : (
                    <X className="h-5 w-5 text-muted-foreground/30 mx-auto" />
                  )}
                </td>
                <td className="p-4 text-center bg-primary/5">
                  {row.functions ? (
                    <Check className="h-5 w-5 text-primary mx-auto" />
                  ) : (
                    <X className="h-5 w-5 text-muted-foreground/30 mx-auto" />
                  )}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  )
}
