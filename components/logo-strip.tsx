interface LogoStripProps {
  title?: string
  logos?: {
    name: string
    image: string
    url: string
  }[]
}

export function LogoStrip({ title, logos }: LogoStripProps) {
  const defaultLogos = [
    {
      name: "Henkel",
      image: "/henkel-logo.svg",
      url: "https://www.henkel.com/",
    },
    {
      name: "Moncler",
      image: "/moncler-logo.svg",
      url: "https://www.moncler.com/",
    },
    {
      name: "Nafas",
      image: "/nafas-logo.svg",
      url: "https://nafas.co.id/",
    },
    {
      name: "NOC Qatar",
      image: "/noc-logo.png",
      url: "https://www.noc.qa/",
    },
    {
      name: "Nirvana Being",
      image: "/nirvana-logo.svg",
      url: "https://nirvanabeing.com/",
    },
  ]

  const displayLogos = logos && logos.length > 0 ? logos : defaultLogos

  return (
    <div className="py-16">
      {title && (
        <h3 className="text-center text-sm text-muted-foreground mb-8 uppercase tracking-wider">
          {title}
        </h3>
      )}
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-8 items-center">
        {displayLogos.map((logo, index) => (
          <a
            key={index}
            href={logo.url}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center opacity-70 hover:opacity-100 transition-opacity duration-300"
          >
            <img
              src={logo.image}
              alt={logo.name}
              className="h-10 object-contain grayscale hover:grayscale-0 transition"
            />
          </a>
        ))}
      </div>
    </div>
  )
}
