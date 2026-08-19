import { motion } from "framer-motion"

function SecretStar({ onCollect, position = "right-8 top-24" }) {
  return (
    <motion.button
      initial={{ opacity: 0, scale: 0 }}
      whileInView={{
        opacity: [0.2, 0.8, 0.2],
        scale: [0.8, 1.1, 0.8],
      }}
      viewport={{ once: true }}
      transition={{
        duration: 3,
        repeat: Infinity,
        ease: "easeInOut",
      }}
      whileHover={{
        scale: 1.5,
        opacity: 1,
      }}
      whileTap={{
        scale: 0.7,
      }}
      onClick={onCollect}
      className={`
        absolute
        ${position}
        z-30
        flex
        h-12
        w-12
        items-center
        justify-center
        text-purple-300
        drop-shadow-[0_0_10px_rgba(192,132,252,0.8)]
      `}
      aria-label="Secret star"
    >
      ✦
    </motion.button>
  )
}

export default SecretStar