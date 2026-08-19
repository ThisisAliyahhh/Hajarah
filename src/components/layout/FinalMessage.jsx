import { motion } from "framer-motion"

function FinalMessage() {
  return (
    <section
      id="final-message"
      className="
        relative
        flex
        min-h-[70vh]
        items-center
        justify-center
        overflow-hidden
        bg-[#050308]
        px-6
        py-28
        text-center
      "
    >
      <div
        className="
          pointer-events-none
          absolute
          left-1/2
          top-1/2
          h-[300px]
          w-[300px]
          -translate-x-1/2
          -translate-y-1/2
          rounded-full
          bg-purple-700/[0.05]
          blur-[110px]
        "
      />

      <div className="relative z-10 max-w-xl">
        <motion.div
          initial={{ opacity: 0, scale: 0.5 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="
            text-2xl
            text-purple-300/70
            drop-shadow-[0_0_15px_rgba(168,85,247,0.3)]
          "
        >
          ✦
        </motion.div>

        <motion.p
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="
            mt-8
            text-[10px]
            uppercase
            tracking-[0.5em]
            text-purple-300/40
            font-serif
            italic
          "
        >
          That's all...
        </motion.p>

        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1, delay: 0.35 }}
          className="
            mt-4
            font-light
            tracking-[0.14em]
            text-white
            text-[clamp(1.5rem,3vw,2.2rem)]
            font-normal
            leading-tight
            tracking-[0.01em]
            text-white/85
            font-serif
            italic
          "
        >
          Or is it?
        </motion.h2>

        <motion.div
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1, delay: 0.6 }}
            className="mx-auto mt-8 max-w-sm"
            >
            <p className="text-sm leading-7 font-serif italic text-purple-200/55">
                You might have noticed that not everything
                in this universe was meant to be found
                at first glance.
            </p>

            <p className="mt-5 text-sm leading-7 font-serif italic text-purple-200/55">
                Look a little closer.
            </p>

            <p className="mt-5 text-[10px] font-serif italic uppercase tracking-[0.35em] text-purple-300/35">
                Seven little pieces are hidden somewhere here.
            </p>

            <p className="mt-5 text-xs font-serif italic text-purple-300/45">
                Find them all ✦
            </p>
            </motion.div>
      </div>
    </section>
  )
}

export default FinalMessage