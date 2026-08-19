import { motion } from "framer-motion"
import { useState } from "react"

function IdentityCheck({ onCorrect, onIncorrect }) {
  const [answer, setAnswer] = useState("")

  // Hidden answer
  // "YmFuZ3Nvbg==" = bangson
  const correctAnswer = atob("YmFuZ3Nvbg==")

  const handleSubmit = (event) => {
    event.preventDefault()

    const userAnswer = answer.trim().toLowerCase()

    if (userAnswer === correctAnswer) {
      onCorrect()
    } else {
      onIncorrect()
    }
  }

  return (
    <main
      className="
        relative
        min-h-[100svh]
        overflow-hidden
        bg-[#050308]
        px-6
        text-white
      "
    >
      {/* Purple atmosphere */}
      <div
        className="
          pointer-events-none
          absolute
          left-1/2
          top-1/2
          h-[350px]
          w-[350px]
          -translate-x-1/2
          -translate-y-1/2
          rounded-full
          bg-purple-700/[0.07]
          blur-[120px]
        "
      />

      <div className="relative flex min-h-[100svh] items-center justify-center">
        <motion.div
          initial={{
            opacity: 0,
            y: 20,
          }}
          animate={{
            opacity: 1,
            y: 0,
          }}
          transition={{
            duration: 0.8,
          }}
          className="w-full max-w-lg text-center"
        >
          {/* Star */}
          <motion.span
            animate={{
              opacity: [0.4, 1, 0.4],
              scale: [0.9, 1.1, 0.9],
            }}
            transition={{
              duration: 2.5,
              repeat: Infinity,
              ease: "easeInOut",
            }}
            className="
              inline-block
              text-3xl
              text-purple-300
              drop-shadow-[0_0_15px_rgba(192,132,252,0.6)]
            "
          >
            ✦
          </motion.span>

          {/* Small heading */}
          <p
            className="
              mt-7
              font-serif
              text-[10px]
              italic
              uppercase
              tracking-[0.5em]
              text-purple-300/50
            "
          >
            One last question
          </p>

          {/* Main heading */}
          <h1
            className="
              mt-5
              font-serif
              text-2xl
              font-medium
              italic
              tracking-[0.08em]
              text-white
              sm:text-3xl
            "
          >
            Before you continue...
          </h1>

          {/* Description */}
          <p
            className="
              mx-auto
              mt-6
              max-w-md
              text-sm
              leading-7
              text-white/40
            "
          >
            There is one more thing behind this door.
            But I need to know it is really you.
          </p>

          {/* Question */}
          <form
            onSubmit={handleSubmit}
            className="mx-auto mt-10 max-w-sm"
          >
            <p
              className="
                text-sm
                leading-7
                text-white/70
              "
            >
              Who is our favourite?
            </p>

            {/* Answer */}
            <input
              type="password"
              value={answer}
              onChange={(event) =>
                setAnswer(event.target.value)
              }
              placeholder="Your answer..."
              autoComplete="off"
              autoCorrect="off"
              autoCapitalize="none"
              spellCheck="false"
              className="
                mt-6
                w-full
                rounded-full
                border
                border-purple-400/20
                bg-purple-500/[0.04]
                px-5
                py-3
                text-center
                text-sm
                text-white
                outline-none
                placeholder:text-white/20
                transition-all
                duration-300
                focus:border-purple-400/50
                focus:bg-purple-500/[0.07]
                focus:shadow-[0_0_30px_rgba(168,85,247,0.1)]
              "
            />

            {/* Unlock */}
            <button
              type="submit"
              className="
                mt-5
                rounded-full
                border
                border-purple-400/30
                bg-purple-500/[0.08]
                px-7
                py-3
                text-[10px]
                uppercase
                tracking-[0.3em]
                text-purple-200
                outline-none
                transition-all
                duration-300
                hover:border-purple-300/60
                hover:bg-purple-500/[0.15]
                hover:shadow-[0_0_30px_rgba(168,85,247,0.2)]
                focus:outline-none
                focus:ring-0
              "
            >
              Unlock ✦
            </button>
          </form>
        </motion.div>
      </div>
    </main>
  )
}

export default IdentityCheck