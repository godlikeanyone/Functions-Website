interface Stat {
  value: string
  label: string
}

interface StatsBandProps {
  stats: Stat[]
}

export function StatsBand({ stats }: StatsBandProps) {
  return (
    <div className="grid grid-cols-2 md:grid-cols-4 gap-8 py-12">
      {stats.map((stat, index) => (
        <div key={index} className="text-center">
          <div className="text-4xl md:text-5xl font-bold text-primary mb-2">{stat.value}</div>
          <div className="text-sm text-muted-foreground">{stat.label}</div>
        </div>
      ))}
    </div>
  )
}
