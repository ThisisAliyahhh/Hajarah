import { motion } from "framer-motion"

function SectionDivider({ label = "✦" }) {
  return (
    <div className="flex items-center justify-center px-6 py-8 sm:py-10">
      <motion.div
        initial={{ opacity: 0, scaleX: 0 }}
        whileInView={{ opacity: 1, scaleX: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="flex w-full max-w-[180px] items-center gap-4"
      >
        <div className="h-px flex-1 bg-purple-300/10" />

        <span
          className="
            shrink-0
            text-[9px]
            text-purple-300/30
          "
        >
          {label}
        </span>

        <div className="h-px flex-1 bg-purple-300/10" />
      </motion.div>
    </div>
  )
}

export default SectionDivider