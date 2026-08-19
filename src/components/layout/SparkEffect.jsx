import { AnimatePresence, motion } from "framer-motion"
import { useEffect, useState } from "react"

const PARTICLE_COUNT = 14

function createParticles() {
  return Array.from({ length: PARTICLE_COUNT }, (_, index) => {
    const angle = (360 / PARTICLE_COUNT) * index + Math.random() * 15
    const distance = 55 + Math.random() * 65

    return {
      id: index,
      angle,
      distance,
      size: 3 + Math.random() * 4,
      delay: Math.random() * 0.08,
    }
  })
}

function SparkEffect() {
  const [sparks, setSparks] = useState([])

  useEffect(() => {
    const handleClick = (event) => {
      const spark = {
        id: `${Date.now()}-${Math.random()}`,
        x: event.clientX,
        y: event.clientY,
        particles: createParticles(),
      }

      setSparks((currentSparks) => [...currentSparks, spark])

      setTimeout(() => {
        setSparks((currentSparks) =>
          currentSparks.filter((item) => item.id !== spark.id)
        )
      }, 1600)
    }

    window.addEventListener("click", handleClick)

    return () => {
      window.removeEventListener("click", handleClick)
    }
  }, [])

  return (
    <div className="pointer-events-none fixed inset-0 z-[9999] overflow-hidden">
      <AnimatePresence>
        {sparks.map((spark) => (
          <motion.div
            key={spark.id}
            className="absolute"
            style={{
              left: spark.x,
              top: spark.y,
            }}
            initial={{ opacity: 1 }}
            animate={{ opacity: 0 }}
            exit={{ opacity: 0 }}
            transition={{
              duration: 1.5,
              ease: "easeOut",
            }}
          >
            {/* Central glow */}
            <motion.div
              className="absolute -translate-x-1/2 -translate-y-1/2 rounded-full bg-purple-300"
              initial={{
                width: 4,
                height: 4,
                opacity: 1,
                boxShadow: "0 0 8px 3px rgba(192,132,252,0.9)",
              }}
              animate={{
                width: 10,
                height: 10,
                opacity: 0,
                boxShadow: "0 0 35px 12px rgba(168,85,247,0)",
              }}
              transition={{
                duration: 0.7,
                ease: "easeOut",
              }}
            />

            {/* Outward particles */}
            {spark.particles.map((particle) => {
              const radians = (particle.angle * Math.PI) / 180

              const x = Math.cos(radians) * particle.distance
              const y = Math.sin(radians) * particle.distance

              return (
                <motion.span
                  key={particle.id}
                  className="absolute left-0 top-0 block rounded-full bg-purple-300"
                  style={{
                    width: particle.size,
                    height: particle.size,
                    boxShadow:
                      "0 0 8px 2px rgba(192,132,252,0.8)",
                  }}
                  initial={{
                    x: -particle.size / 2,
                    y: -particle.size / 2,
                    opacity: 1,
                    scale: 0.4,
                  }}
                  animate={{
                    x: x - particle.size / 2,
                    y: y - particle.size / 2,
                    opacity: 0,
                    scale: 1,
                  }}
                  transition={{
                    duration: 1.25,
                    delay: particle.delay,
                    ease: [0.16, 1, 0.3, 1],
                  }}
                />
              )
            })}

            {/* Tiny star in the centre */}
            <motion.div
              className="absolute left-0 top-0 -translate-x-1/2 -translate-y-1/2 text-lg text-white"
              initial={{
                opacity: 1,
                scale: 0,
                rotate: 0,
              }}
              animate={{
                opacity: 0,
                scale: 1.4,
                rotate: 90,
              }}
              transition={{
                duration: 0.8,
                ease: "easeOut",
              }}
            >
              ✦
            </motion.div>
          </motion.div>
        ))}
      </AnimatePresence>
    </div>
  )
}

export default SparkEffect