"use client"

interface LogoStripProps {
  title?: string
  logos?: {
    name: string
    image: string
    url: string // Keep for future needs
  }[]
}

export function LogoStrip({ title, logos }: LogoStripProps) {
  const defaultLogos = [
    { name: "Henkel", image: "/henkel-logo.webp", url: "" },
    { name: "Moncler", image: "/moncler-logo.webp", url: "" },
    { name: "Hines", image: "/hines-logo.webp", url: "" },
    { name: "Saint Laurent Paris", image: "/saint-laurent.webp", url: "" },
    { name: "Stone Island", image: "/stone-island.webp", url: "" },
    { name: "Kerry Properties Limited", image: "/kerry.webp", url: "" },
  ]

  const displayLogos = logos && logos.length > 0 ? logos : defaultLogos

  // Duplicate the Logo array and concatenate it to form [A, B, C, D, E, A, B, C, D, E]
  const loopedLogos = [...displayLogos, ...displayLogos]

  return (
    <div className="py-16 w-full overflow-hidden">
      {/* Inject the animation styles */}
      <style jsx>{`
        @keyframes scroll {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
        .animate-infinite-scroll {
          animation: scroll 20s linear infinite;
        }
        /* Pause the animation when the mouse hovers over the parent container */
        .group:hover .animate-infinite-scroll {
          animation-play-state: paused;
        }
      `}</style>

      {title && (
        <h3 className="text-center text-sm text-muted-foreground mb-10 uppercase tracking-wider">
          {title}
        </h3>
      )}

      {/* mask-image: Add left-to-right gradient masks to create smooth fade-in and fade-out effects when the logo enters and exits 
        group: Used to control the hover-to-pause behavior
      */}
      <div 
        className="group relative flex w-full max-w-full overflow-hidden [mask-image:linear-gradient(to_right,transparent,black_10%,black_90%,transparent)]"
      >
        <div className="flex animate-infinite-scroll w-max">
          {loopedLogos.map((logo, index) => (
            <div
              key={`${logo.name}-${index}`}
              className="mx-8 flex items-center justify-center w-[150px]"
            >
              <div className="flex items-center justify-center h-24 w-full"> 
                <img
                  src={logo.image}
                  alt={logo.name}
                  // 3D effect
                  className="max-h-full max-w-full object-contain transition-all duration-300 opacity-70 hover:opacity-100 hover:scale-110 hover:drop-shadow-xl cursor-pointer"
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
