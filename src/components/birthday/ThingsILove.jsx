import { motion } from "framer-motion"

const things = [
  "Your food",
  "The way you hear me.",
  "The way you see me.",
  "The way you make ordinary moments memorable.",
  "Your very specific opinions",
  "How comfortable I feel around you.",
  "Your heart.",
  "Putting my stuff in places I cannot find them.",
  "The alte part you refused to acknowledge.",
  "Your confidence.",
  "Your energy.",
  "Your book recommendations even tho I take forever to finish",
  "Your silly naming for things",
  "The memories we have made.",
  "When you are in mummmy mode.",
  "The sister I found in you.",
  "How you can be completely ridiculous.",
  "Everything that makes you, you.",
  "Simply, you.",
]

function ThingsILove() {
  return (
    <section
      id="nineteen"
      className="
        relative
        overflow-hidden
        bg-[#050308]
        px-6
        py-28
        sm:py-36
      "
    >
      <div className="mx-auto w-full max-w-4xl">

        {/* Heading */}
        <div className="text-center">
          <motion.p
            initial={{
              opacity: 0,
              y: 10,
            }}
            whileInView={{
              opacity: 1,
              y: 0,
            }}
            viewport={{
              once: true,
            }}
            transition={{
              duration: 0.8,
            }}
            className="
              font-serif
              text-[10px]
              italic
              uppercase
              tracking-[0.5em]
              text-purple-300/70
              sm:text-xs
            "
          >
            For your nineteenth
          </motion.p>

          <motion.h2
            initial={{
              opacity: 0,
              y: 15,
            }}
            whileInView={{
              opacity: 1,
              y: 0,
            }}
            viewport={{
              once: true,
            }}
            transition={{
              duration: 0.9,
              delay: 0.1,
            }}
            className="
              mt-4
              font-serif
              text-[clamp(1.5rem,3vw,2.2rem)]
              font-normal
              italic
              leading-tight
              tracking-[0.01em]
              text-white/85
            "
          >
            18 + 1 THINGS I LOVE ABOUT YOU
          </motion.h2>

          <motion.p
            initial={{
              opacity: 0,
            }}
            whileInView={{
              opacity: 1,
            }}
            viewport={{
              once: true,
            }}
            transition={{
              duration: 0.8,
              delay: 0.3,
            }}
            className="
              mt-5
              font-serif
              text-sm
              italic
              leading-7
              text-purple-200/55
              sm:text-base
            "
          >
            They says it all.
          </motion.p>
        </div>

        {/* Things */}
        <div
          className="
            mt-14
            divide-y
            divide-purple-400/[0.08]
            border-y
            border-purple-400/[0.08]
          "
        >
          {things.map((thing, index) => {
            const isPlusOne = index === things.length - 1

            return (
              <motion.div
                key={index}
                initial={{
                  opacity: 0,
                  x: -15,
                  filter: "blur(6px)",
                }}
                whileInView={{
                  opacity: 1,
                  x: 0,
                  filter: "blur(0px)",
                }}
                viewport={{
                  once: true,
                  margin: "-100px",
                }}
                transition={{
                  duration: 2,
                  delay: 0.08,
                  ease: [0.22, 1, 0.36, 1],
                }}
                className="
                  group
                  flex
                  items-center
                  gap-4
                  py-5
                  transition-colors
                  duration-300
                  hover:bg-purple-500/[0.025]
                  sm:gap-8
                  sm:py-6
                "
              >
                {/* Number / +1 */}
                <span
                  className={`
                    w-7
                    shrink-0
                    text-right
                    font-mono
                    tracking-widest
                    transition-colors
                    duration-300
                    sm:w-10
                    ${
                      isPlusOne
                        ? "text-sm text-purple-300/70 sm:text-base"
                        : "text-[10px] text-purple-400/40 group-hover:text-purple-300 sm:text-xs"
                    }
                  `}
                >
                  {isPlusOne
                    ? "+1"
                    : String(index + 1).padStart(2, "0")}
                </span>

                {/* Dot */}
                <span
                  className={`
                    shrink-0
                    rounded-full
                    transition-all
                    duration-300
                    ${
                      isPlusOne
                        ? "h-2 w-2 bg-purple-300 shadow-[0_0_12px_rgba(192,132,252,0.7)]"
                        : "h-1.5 w-1.5 bg-purple-400/30 group-hover:bg-purple-300 group-hover:shadow-[0_0_10px_rgba(192,132,252,0.7)]"
                    }
                  `}
                />

                {/* Text */}
                <p
                  className={`
                    text-sm
                    leading-6
                    transition-colors
                    duration-300
                    sm:text-base
                    ${
                      isPlusOne
                        ? "font-serif italic text-white/75"
                        : "text-white/45 group-hover:text-white/80"
                    }
                  `}
                >
                  {thing}
                </p>
              </motion.div>
            )
          })}
        </div>
      </div>
    </section>
  )
}

export default ThingsILove