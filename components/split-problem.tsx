"use client"

import { motion } from "framer-motion"
import Image from "next/image"
import { useState } from "react"

const panels = [
  {
    id: 1,
    title: "Smart Systems",
    description: "AI-driven automation improving energy efficiency.",
    image: "/hero-bg.jpg",
    position: "center top",
  },
  {
    id: 2,
    title: "Healthy Spaces",
    description: "Building environments that enhance wellbeing.",
    image: "/hero-bg.jpg",
    position: "center center",
  },
  {
    id: 3,
    title: "Sustainable Future",
    description: "Balancing innovation with environmental care.",
    image: "/hero-bg.jpg",
    position: "center bottom",
  },
]

export default function SplitHero() {
  const [hovered, setHovered] = useState<number | null>(null)

  return (
    <div className="flex flex-col md:flex-row h-[90vh] overflow-hidden rounded-3xl border border-gray-200 shadow-lg">
      {panels.map((panel) => (
        <motion.div
          key={panel.id}
          onHoverStart={() => setHovered(panel.id)}
          onHoverEnd={() => setHovered(null)}
          animate={{
            flex: hovered === panel.id ? 1.4 : hovered ? 0.8 : 1,
          }}
          transition={{ duration: 0.6, ease: "easeInOut" }}
          className="relative flex items-center justify-center text-white cursor-pointer overflow-hidden"
        >
          {/* Background */}
          <Image
            src={panel.image}
            alt={panel.title}
            fill
            priority
            style={{
              objectFit: "cover",
              objectPosition: panel.position,
              filter: hovered === panel.id ? "brightness(80%)" : "brightness(60%)",
              transition: "filter 0.5s ease",
            }}
          />

          {/* Content */}
          <motion.div
            animate={{
              opacity: hovered === panel.id ? 1 : 0.8,
              y: hovered === panel.id ? 0 : 10,
            }}
            transition={{ duration: 0.4 }}
            className="relative z-10 text-center px-6"
          >
            <h2 className="text-3xl font-bold mb-2 drop-shadow-lg">{panel.title}</h2>
            {hovered === panel.id && (
              <p className="text-lg text-gray-200 drop-shadow-md">{panel.description}</p>
            )}
          </motion.div>

          {/* Half-transparent overlay */}
          <div className="absolute inset-0 bg-black/30"></div>
        </motion.div>
      ))}
    </div>
  )
}
