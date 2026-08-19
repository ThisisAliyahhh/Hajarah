import { motion } from "framer-motion"
import StarField from "../layout/StarField"

function Intro({ onEnter }) {
  return (
    <main className="relative min-h-[100svh] overflow-hidden bg-[#050308] text-white">
      <StarField />

      <section className="relative z-10 flex min-h-[100svh] flex-col items-center justify-center px-6 text-center">

        {/* Small heading */}
        <motion.p
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="
            mb-5
            text-[10px]
            font-medium
            uppercase
            tracking-[0.55em]
            text-purple-300/80
            sm:text-xs
            sm:tracking-[0.65em]
            font-serif
            italic
          "
        >
          A little universe
        </motion.p>

        {/* Main title */}
        <motion.h1
          initial={{ opacity: 0, y: 15, scale: 0.96 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          transition={{
            duration: 1.2,
            delay: 0.15,
            ease: "easeOut",
          }}
          className="
            whitespace-nowrap
            font-serif
            italic
            text-[clamp(2.2rem,5vw,3.8rem)]
            font-normal
            tracking-[0.04em]
            text-white
            drop-shadow-[0_0_25px_rgba(168,85,247,0.18)]
          "
        >
          Hajarah's Mikrokosmos
        </motion.h1>

        {/* Birthday */}
        <motion.p
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{
            duration: 1,
            delay: 0.7,
          }}
          className="
            mt-5
            text-xs
            tracking-[0.35em]
            text-purple-300/90
            sm:mt-6
            sm:text-sm
            sm:tracking-[0.45em]
          "
        >
          19 · 08 
        </motion.p>

        {/* Subtitle */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{
            duration: 1.2,
            delay: 1.2,
          }}
          className="
            mt-3
            max-w-[260px]
            font-serif
            text-sm
            italic
            leading-relaxed
            text-purple-200/55
            sm:max-w-none
            sm:text-base
          "
        >
          made just for you
        </motion.p>

        {/* Enter */}
        <motion.button
          onClick={onEnter}
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{
            duration: 1,
            delay: 1.7,
          }}
          whileHover={{ scale: 1.04 }}
          whileTap={{ scale: 0.96 }}
          className="
            group
            mt-10
            flex
            min-h-12
            items-center
            gap-3
            rounded-full
            border
            border-purple-400/30
            bg-purple-500/[0.07]
            px-7
            py-3
            text-xs
            font-medium
            tracking-[0.3em]
            text-purple-200
            shadow-[0_0_25px_rgba(168,85,247,0.08)]
            backdrop-blur-sm
            transition-all
            duration-500
            hover:border-purple-300/60
            hover:bg-purple-500/[0.12]
            hover:shadow-[0_0_35px_rgba(168,85,247,0.22)]
            sm:px-8
            sm:text-sm
          "
        >
          <span>ENTER</span>

          <span
            className="
              text-purple-300
              transition-transform
              duration-500
              group-hover:rotate-90
              group-hover:scale-125
            "
          >
            ✦
          </span>
        </motion.button>

        {/* Quiet signature */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{
            duration: 0.8,
            delay: 2,
          }}
          className="
            absolute
            bottom-7
            font-serif
            text-xs
            italic
            tracking-wide
            text-purple-200/55
          "
        >
          this one is yours
        </motion.p>

      </section>
    </main>
  )
}

export default Intro