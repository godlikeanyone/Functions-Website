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
          <div
            key={index}
            className="flex items-center justify-center"
          >
            <div className="h-30 w-30 flex items-center justify-center">
              <img
                src={logo.image}
                alt={logo.name}
                className="max-h-full max-w-full object-contain transition-all duration-300 opacity-70 hover:opacity-100 hover:scale-110 hover:drop-shadow-xl cursor-pointer"
              />
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
