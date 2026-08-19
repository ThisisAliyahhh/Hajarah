import { motion } from "framer-motion"

function NotHajarah({ onBack }) {
  return (
    <main className="relative min-h-[100svh] overflow-hidden bg-[#050308] px-6 text-white">
      <div className="flex min-h-[100svh] items-center justify-center">
        <motion.div
          initial={{ opacity: 0, scale: 0.96 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
          className="w-full max-w-md text-center"
        >
          <div className="text-4xl text-purple-300/70">
            ✦
          </div>

          <p className="mt-8 text-[10px] uppercase tracking-[0.5em] text-purple-300/40">
            Access denied
          </p>

          <h1 className="mt-5 text-2xl font-medium tracking-[0.08em] sm:text-3xl">
            Hmm... you're not Hajarah.
          </h1>

          <p className="mt-6 text-sm leading-7 text-white/40">
            Nice try though. 😭
            <br />
            This little corner wasn't made for you.
          </p>

          <button
            onClick={onBack}
            className="
              mt-9
              rounded-full
              border
              border-purple-400/20
              bg-purple-500/[0.05]
              px-6
              py-3
              text-[10px]
              uppercase
              tracking-[0.3em]
              text-purple-200/70
              transition-all
              duration-300
              hover:border-purple-400/40
              hover:bg-purple-500/[0.1]
              hover:text-purple-200
            "
          >
            Try again
          </button>
        </motion.div>
      </div>
    </main>
  )
}

export default NotHajarah