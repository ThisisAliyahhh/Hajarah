import { motion } from "framer-motion"

const stars = Array.from({ length: 160 }, (_, index) => ({
  id: index,
  left: Math.random() * 100,
  top: Math.random() * 100,
  size: Math.random() * 2.5 + 0.5,
  duration: Math.random() * 3 + 2,
  delay: Math.random() * 3,
}))

function StarField() {
  return (
    <div
      className="
        pointer-events-none
        fixed
        inset-0
        z-0
        overflow-hidden
      "
      aria-hidden="true"
    >
      {stars.map((star) => (
        <motion.span
          key={star.id}
          className="absolute rounded-full bg-purple-300"
          style={{
            left: `${star.left}%`,
            top: `${star.top}%`,
            width: `${star.size}px`,
            height: `${star.size}px`,
          }}
          animate={{
            opacity: [0.08, 0.7, 0.08],
            scale: [0.8, 1.4, 0.8],
          }}
          transition={{
            duration: star.duration,
            delay: star.delay,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
      ))}
    </div>
  )
}

export default StarField