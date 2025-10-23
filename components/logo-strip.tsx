interface LogoStripProps {
  title?: string
  logos?: string[]
}

export function LogoStrip({ title, logos = [] }: LogoStripProps) {
  const defaultLogos = ["Company A", "Company B", "Company C", "Company D", "Company E", "Company F"]

  const displayLogos = logos.length > 0 ? logos : defaultLogos

  return (
    <div className="py-16">
      {title && <h3 className="text-center text-sm text-muted-foreground mb-8 uppercase tracking-wider">{title}</h3>}
      <div className="grid grid-cols-3 md:grid-cols-6 gap-8 items-center">
        {displayLogos.map((logo, index) => (
          <div
            key={index}
            className="flex items-center justify-center h-12 text-muted-foreground/50 font-semibold text-sm"
          >
            {logo}
          </div>
        ))}
      </div>
    </div>
  )
}
