import { AnimatePresence, motion } from "framer-motion"
import { useEffect, useState } from "react"

const stars = [
  {
    id: 1,
    section: "hero",
    left: "10%",
    top: "28%",
  },
  {
    id: 2,
    section: "letters",
    left: "82%",
    top: "55%",
  },
  {
    id: 3,
    section: "memories",
    left: "18%",
    top: "42%",
  },
  {
    id: 4,
    section: "nineteen",
    left: "78%",
    top: "60%",
  },
  {
    id: 5,
    section: "soundtrack",
    left: "52%",
    top: "25%",
  },
  {
    id: 6,
    section: "birthday",
    left: "14%",
    top: "52%",
  },
  {
    id: 7,
    section: "final-message",
    left: "75%",
    top: "35%",
  },
]

function StarCollector({ onComplete }) {
  const [availableStars, setAvailableStars] = useState([])
  const [collected, setCollected] = useState([])
  const [showMessage, setShowMessage] = useState(false)

  useEffect(() => {
    let observers = []
    let retryTimer

    const setupObservers = () => {
      observers.forEach((observer) => observer.disconnect())
      observers = []

      stars.forEach((star) => {
        const section = document.getElementById(star.section)

        if (!section) return

        const observer = new IntersectionObserver(
          ([entry]) => {
            if (entry.isIntersecting) {
              setAvailableStars((current) => {
                if (current.includes(star.id)) {
                  return current
                }

                return [...current, star.id]
              })
            }
          },
          {
            threshold: 0.1,
            rootMargin: "100px 0px 100px 0px",
          }
        )

        observer.observe(section)
        observers.push(observer)
      })

      // Retry in case the sections were not ready
      // when the first check happened.
      if (observers.length < stars.length) {
        retryTimer = setTimeout(setupObservers, 500)
      }
    }

    // Wait until the page has fully rendered.
    const frame = requestAnimationFrame(setupObservers)

    return () => {
      cancelAnimationFrame(frame)
      clearTimeout(retryTimer)
      observers.forEach((observer) => observer.disconnect())
    }
  }, [])

  const collectStar = (id) => {
    if (collected.includes(id)) return

    const updated = [...collected, id]

    setCollected(updated)
    setShowMessage(true)

    setTimeout(() => {
      setShowMessage(false)
    }, 1000)

    if (updated.length === stars.length) {
      setTimeout(() => {
        onComplete()
      }, 1400)
    }
  }

  return (
    <>
      {/* Hidden stars */}
      <div className="pointer-events-none fixed inset-0 z-[200]">
        {stars.map((star) => {
          const isAvailable = availableStars.includes(star.id)
          const isCollected = collected.includes(star.id)

          if (!isAvailable || isCollected) {
            return null
          }

          return (
            <motion.button
              key={star.id}
              initial={{
                opacity: 0,
                scale: 0,
              }}
              animate={{
                opacity: [0.35, 0.9, 0.35],
                scale: [0.85, 1.1, 0.85],
              }}
              transition={{
                opacity: {
                  duration: 2.5,
                  repeat: Infinity,
                  ease: "easeInOut",
                },
                scale: {
                  duration: 2.5,
                  repeat: Infinity,
                  ease: "easeInOut",
                },
              }}
              whileHover={{
                scale: 1.5,
                opacity: 1,
              }}
              whileTap={{
                scale: 0.7,
              }}
              onClick={() => collectStar(star.id)}
              className="
                pointer-events-auto
                fixed
                flex
                h-12
                w-12
                items-center
                justify-center
                rounded-full
                text-purple-300
                drop-shadow-[0_0_12px_rgba(192,132,252,0.8)]
                outline-none
              "
              style={{
                left: star.left,
                top: star.top,
              }}
              aria-label="Hidden piece"
            >
              <span className="text-xl">
                ✦
              </span>
            </motion.button>
          )
        })}
      </div>

      {/* Found message */}
      <AnimatePresence>
        {showMessage && (
          <motion.div
            initial={{
              opacity: 0,
              y: -10,
            }}
            animate={{
              opacity: 1,
              y: 0,
            }}
            exit={{
              opacity: 0,
              y: -10,
            }}
            className="
              fixed
              left-1/2
              top-5
              z-[300]
              -translate-x-1/2
              whitespace-nowrap
              rounded-full
              border
              border-purple-400/15
              bg-[#09060d]/85
              px-5
              py-2.5
              text-[9px]
              uppercase
              tracking-[0.3em]
              text-purple-200/60
              backdrop-blur-md
            "
          >
            One piece found ✦
          </motion.div>
        )}
      </AnimatePresence>

      {/* Progress */}
      <AnimatePresence>
        {collected.length > 0 && collected.length < 7 && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="
              fixed
              bottom-5
              left-1/2
              z-[250]
              -translate-x-1/2
              rounded-full
              border
              border-purple-400/10
              bg-black/50
              px-4
              py-2
              text-[9px]
              uppercase
              tracking-[0.3em]
              text-purple-300/50
              backdrop-blur-md
            "
          >
            {collected.length} / 7
          </motion.div>
        )}
      </AnimatePresence>

      {/* All seven found */}
      <AnimatePresence>
        {collected.length === 7 && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="
              fixed
              inset-0
              z-[400]
              flex
              items-center
              justify-center
              bg-black/30
              backdrop-blur-[2px]
            "
          >
            <div className="text-center">
              <motion.div
                animate={{
                  scale: [1, 1.15, 1],
                  opacity: [0.6, 1, 0.6],
                }}
                transition={{
                  duration: 1.5,
                  repeat: Infinity,
                }}
                className="
                  text-4xl
                  text-purple-300
                  drop-shadow-[0_0_20px_rgba(192,132,252,0.8)]
                "
              >
                ✦
              </motion.div>

              <p className="mt-5 text-[10px] uppercase tracking-[0.5em] text-purple-200/60">
                Seven pieces found
              </p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}

export default StarCollector