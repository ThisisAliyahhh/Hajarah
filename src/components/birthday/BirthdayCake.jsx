import { motion, AnimatePresence } from "framer-motion"
import { useState } from "react"

function BirthdayCake() {
  const [blown, setBlown] = useState(false)
  const [isBlowing, setIsBlowing] = useState(false)

  const blowCandles = () => {
    if (blown || isBlowing) return

    setIsBlowing(true)

    // Give the flame time to react to the blow
    setTimeout(() => {
      setBlown(true)
      setIsBlowing(false)
    }, 650)
  }

  return (
    <section
      id="birthday"
      className="
        relative
        overflow-hidden
        bg-[#050308]
        px-6
        py-28
        sm:py-36
      "
    >
      {/* Purple atmosphere */}
      <div
        className="
          pointer-events-none
          absolute
          left-1/2
          top-1/2
          h-[400px]
          w-[400px]
          -translate-x-1/2
          -translate-y-1/2
          rounded-full
          bg-purple-700/[0.07]
          blur-[120px]
        "
      />

      <div className="relative z-10 mx-auto max-w-3xl text-center">

        {/* Heading */}
        <motion.p
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="
            text-[10px]
            uppercase
            tracking-[0.5em]
            text-purple-300/70
            font-serif
            italic
            sm:text-xs
          "
        >
          One more thing
        </motion.p>

        <motion.h2
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.9, delay: 0.1 }}
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
          HAPPY 19TH
        </motion.h2>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="
            mt-5
            font-serif
            italic
            text-sm
            leading-7
            text-purple-200/55
            sm:text-base
          "
        >
          Make a wish.
        </motion.p>

        {/* Cake */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1, delay: 0.4 }}
          className="
            relative
            mx-auto
            mt-20
            flex
            w-full
            max-w-md
            flex-col
            items-center
          "
        >
          {/* Candles */}
          <div className="relative z-30 mb-[-4px] flex items-end gap-6 sm:gap-8">

            {[1, 9, 1].map((candle, index) => (
              <div
                key={index}
                className="
                  relative
                  h-20
                  w-3
                  rounded-t-md
                  bg-gradient-to-b
                  from-purple-200
                  via-purple-400
                  to-purple-700
                  shadow-[0_0_12px_rgba(168,85,247,0.2)]
                  sm:h-24
                  sm:w-4
                "
              >
                {/* Candle stripes */}
                <div className="absolute inset-x-0 top-5 h-1 bg-white/30" />
                <div className="absolute inset-x-0 top-11 h-1 bg-white/20" />

                {/* Flame */}
                <AnimatePresence>
                  {!blown && (
                    <motion.div
                      initial={{
                        opacity: 0,
                        scale: 0.7,
                        x: 0,
                        y: 0,
                        rotate: -45,
                      }}
                      animate={
                        isBlowing
                          ? {
                              opacity: [1, 0.9, 0.45, 0],
                              scale: [1, 1.05, 0.7, 0.05],
                              x: [-1, 5, 13, 20],
                              y: [0, -1, -3, -6],
                              rotate: [-45, -30, -10, 10],
                            }
                          : {
                              opacity: [0.75, 1, 0.8, 1, 0.75],
                              scale: [0.9, 1.08, 0.94, 1.05, 0.9],
                              x: [-1, 1, -2, 2, 0],
                              y: [0, -1, 1, -2, 0],
                              rotate: [-48, -40, -47, -41, -45],
                            }
                      }
                      transition={
                        isBlowing
                          ? {
                              duration: 0.65,
                              ease: [0.22, 1, 0.36, 1],
                            }
                          : {
                              duration: 1.1,
                              repeat: Infinity,
                              ease: "easeInOut",
                            }
                      }
                      className="
                        absolute
                        -left-1
                        -top-7
                        h-5
                        w-5
                        rounded-[50%_50%_50%_0]
                        bg-purple-200
                        shadow-[0_0_18px_rgba(216,180,254,0.8)]
                      "
                    />
                  )}
                </AnimatePresence>
              </div>
            ))}
          </div>

          {/* Top tier */}
          <div
            className="
              relative
              z-20
              h-20
              w-48
              rounded-t-[1.4rem]
              rounded-b-[1rem]
              border
              border-purple-300/20
              bg-gradient-to-b
              from-purple-300
              via-purple-500
              to-purple-700
              shadow-[0_10px_35px_rgba(109,40,217,0.25)]
              sm:h-24
              sm:w-56
            "
          >
            {/* Frosting */}
            <div
              className="
                absolute
                -top-3
                left-1/2
                h-7
                w-[108%]
                -translate-x-1/2
                rounded-[50%]
                border
                border-purple-200/30
                bg-purple-200/80
                shadow-[0_3px_10px_rgba(216,180,254,0.15)]
              "
            />

            {/* Frosting drips */}
            <div className="absolute -top-1 left-[15%] h-7 w-5 rounded-b-full bg-purple-200/80" />
            <div className="absolute -top-1 left-[38%] h-5 w-5 rounded-b-full bg-purple-200/80" />
            <div className="absolute -top-1 right-[25%] h-8 w-5 rounded-b-full bg-purple-200/80" />
            <div className="absolute -top-1 right-[10%] h-5 w-4 rounded-b-full bg-purple-200/80" />

            {/* 19 */}
            <div className="absolute inset-0 flex items-center justify-center">
              <span
                className="
                  font-serif
                  text-4xl
                  italic
                  tracking-wider
                  text-white/80
                  drop-shadow-[0_0_12px_rgba(255,255,255,0.15)]
                  sm:text-5xl
                "
              >
                19
              </span>
            </div>
          </div>

          {/* Bottom tier */}
          <div
            className="
              relative
              z-10
              -mt-1
              h-28
              w-64
              rounded-b-[1.5rem]
              rounded-t-[1rem]
              border
              border-purple-400/20
              bg-gradient-to-b
              from-purple-700
              via-purple-800
              to-purple-950
              shadow-[0_20px_55px_rgba(109,40,217,0.25)]
              sm:h-32
              sm:w-72
            "
          >
            {/* Frosting */}
            <div
              className="
                absolute
                -top-3
                left-1/2
                h-8
                w-[105%]
                -translate-x-1/2
                rounded-[50%]
                bg-purple-300/80
              "
            />

            {/* Drips */}
            <div className="absolute -top-1 left-[12%] h-8 w-6 rounded-b-full bg-purple-300/80" />
            <div className="absolute -top-1 left-[30%] h-5 w-5 rounded-b-full bg-purple-300/80" />
            <div className="absolute -top-1 right-[30%] h-7 w-6 rounded-b-full bg-purple-300/80" />
            <div className="absolute -top-1 right-[12%] h-5 w-5 rounded-b-full bg-purple-300/80" />

            {/* Decorative dots */}
            <div className="absolute left-8 top-12 h-2 w-2 rounded-full bg-purple-200/60" />
            <div className="absolute left-14 top-20 h-1.5 w-1.5 rounded-full bg-purple-300/40" />
            <div className="absolute right-10 top-14 h-2 w-2 rounded-full bg-purple-200/60" />
            <div className="absolute right-16 top-22 h-1.5 w-1.5 rounded-full bg-purple-300/40" />

            {/* Cake text */}
            <div className="absolute inset-0 flex items-center justify-center pt-5 font-serif italic">
              <div className="text-center">
                <p className="text-[8px] uppercase tracking-[0.5em] text-purple-200/40">
                  Chapter
                </p>

                <p className="mt-1 text-sm tracking-[0.3em] text-white/50 font-serif italic">
                  NINETEEN
                </p>
              </div>
            </div>
          </div>

          {/* Plate */}
          <div
            className="
              relative
              z-0
              -mt-1
              h-5
              w-72
              rounded-[50%]
              border
              border-purple-300/20
              bg-purple-300/[0.04]
              shadow-[0_12px_30px_rgba(109,40,217,0.15)]
              sm:w-80
            "
          />

          {/* Smoke */}
          <AnimatePresence>
            {blown && (
              <>
                {[0, 1, 2].map((index) => (
                  <motion.span
                    key={index}
                    initial={{
                      opacity: 0,
                      y: 0,
                      scale: 0.4,
                    }}
                    animate={{
                      opacity: [0, 0.3, 0],
                      y: -30,
                      x: index === 0 ? -4 : index === 1 ? 0 : 4,
                      scale: [0.4, 0.9, 1.3],
                    }}
                    transition={{
                      duration: 1.8,
                      delay: index * 0.1,
                      ease: "easeOut",
                    }}
                    className="
                      pointer-events-none
                      absolute
                      z-40
                      h-3
                      w-2
                      rounded-full
                      bg-white/20
                      blur-[3px]
                    "
                    style={{
                      left:
                        index === 0
                          ? "calc(50% - 52px)"
                          : index === 1
                          ? "50%"
                          : "calc(50% + 52px)",
                      top: "calc(50% - 92px)",
                    }}
                  />
                ))}
              </>
            )}
          </AnimatePresence>
        </motion.div>

        {/* Blow button */}
        <AnimatePresence>
          {!blown && (
            <motion.button
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.8 }}
              whileHover={{ scale: 1.04 }}
              whileTap={{ scale: 0.96 }}
              onClick={blowCandles}
              className="
                mt-24
                rounded-full
                border
                border-purple-400/30
                bg-purple-500/[0.06]
                px-7
                py-3
                text-[10px]
                uppercase
                tracking-[0.3em]
                text-purple-200/80
                transition-all
                duration-300
                hover:border-purple-300/60
                hover:bg-purple-500/[0.12]
                hover:shadow-[0_0_30px_rgba(168,85,247,0.18)]
                sm:mt-28
              "
            >
              Blow out the candles ✦
            </motion.button>
          )}
        </AnimatePresence>

        {/* Message after the candles go out */}
        <AnimatePresence>
          {blown && (
            <motion.p
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                duration: 1,
                delay: 0.8,
              }}
              className="
                mt-12
                text-sm
                italic
                leading-7
                text-purple-200/55
                sm:text-base
              "
            >
              May Allah bless every year that comes after this one, and keep you close to what is good for you. Ameen. 🤍
            </motion.p>
          )}
        </AnimatePresence>
      </div>
    </section>
  )
}

export default BirthdayCake