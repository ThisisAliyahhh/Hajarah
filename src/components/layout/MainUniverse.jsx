import { motion } from "framer-motion"
import { useEffect, useState } from "react"
import Navbar from "./Navbar"
import LettersSection from "../letters/LettersSection"
import MemoriesSection from "../memories/MemoriesSection"
import ThingsILove from "../birthday/ThingsILove"
import SoundtrackSection from "../soundtrack/SoundtrackSection"
import BirthdayCake from "../birthday/BirthdayCake"
import SectionDivider from "./SectionDivider"
import FinalMessage from "./FinalMessage"

function MainUniverse() {
  const [storyStep, setStoryStep] = useState(0)

  useEffect(() => {
    const timings = [
      1500, // Somehow, you got comfortable.
      2000, // At first, it was little things.
      2000, // Water
      2600, // Pens
      3200, // Things that apparently weren't just mine
      3500, // The room
    ]

    let currentStep = 0
    let timer

    const revealNext = () => {
      if (currentStep >= timings.length - 1) return

      timer = setTimeout(() => {
        currentStep += 1
        setStoryStep(currentStep)
        revealNext()
      }, timings[currentStep])
    }

    timer = setTimeout(() => {
      revealNext()
    }, timings[0])

    return () => {
      clearTimeout(timer)
    }
  }, [])

  return (
    <main className="min-h-screen bg-[#050308] text-white">
      <Navbar />

      <section
        id="hero"
        className="relative flex min-h-[100svh] items-center justify-center overflow-hidden px-6 pt-20"
      >
        {/* Subtle purple atmosphere */}
        <div
          className="
            pointer-events-none
            absolute
            left-1/2
            top-1/2
            h-[280px]
            w-[280px]
            -translate-x-1/2
            -translate-y-1/2
            rounded-full
            bg-purple-700/10
            blur-[100px]
            sm:h-[400px]
            sm:w-[400px]
          "
        />

        <div className="relative z-10 w-full max-w-3xl text-center">

          {/* First line */}
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            animate={
              storyStep >= 0
                ? { opacity: 1, y: 0 }
                : { opacity: 0, y: 10 }
            }
            transition={{ duration: 0.8 }}
            className="
              font-serif
              text-[clamp(1.4rem,3vw,2rem)]
              italic
              tracking-[0.02em]
              text-purple-300/70
              sm:text-xs
            "
          >
            Somehow, you got comfortable.
          </motion.p>

          {/* Second line */}
          <motion.h1
            initial={{ opacity: 0, y: 15 }}
            animate={
              storyStep >= 1
                ? { opacity: 1, y: 0 }
                : { opacity: 0, y: 15 }
            }
            transition={{ duration: 0.8 }}
            className="
              mt-6
              text-[clamp(1.5rem,3vw,2.2rem)]
              font-normal
              leading-tight
              tracking-[0.01em]
              text-white/85
              font-serif
              italic
            "
          >
            At first, it was little things.
          </motion.h1>

          {/* Divider */}
          <motion.div
            initial={{ opacity: 0, scaleX: 0 }}
            animate={
              storyStep >= 1
                ? { opacity: 1, scaleX: 1 }
                : { opacity: 0, scaleX: 0 }
            }
            transition={{ duration: 0.8 }}
            className="mx-auto mt-7 h-px w-20 bg-purple-400/40"
          />

          {/* Story */}
          <div
            className="
              mx-auto
              mt-7
              max-w-lg
              text-sm
              leading-8
              text-purple-200/55
              sm:text-base
              sm:leading-9
              font-serif
              italic
            "
          >
            <motion.p
              initial={{ opacity: 0, y: 10 }}
              animate={
                storyStep >= 2
                  ? { opacity: 1, y: 0 }
                  : { opacity: 0, y: 10 }
              }
              transition={{ duration: 0.7 }}
            >
              Water
            </motion.p>

            <motion.p
              initial={{ opacity: 0, y: 10 }}
              animate={
                storyStep >= 3
                  ? { opacity: 1, y: 0 }
                  : { opacity: 0, y: 10 }
              }
              transition={{ duration: 0.7 }}
              className="mt-1"
            >
              Pens that were never returned
            </motion.p>

            <motion.p
              initial={{ opacity: 0, y: 10 }}
              animate={
                storyStep >= 4
                  ? { opacity: 1, y: 0 }
                  : { opacity: 0, y: 10 }
              }
              transition={{ duration: 0.7 }}
              className="mt-1"
            >
              Helping yourself to things that apparently
              weren't just mine
            </motion.p>

            <motion.p
              initial={{ opacity: 0, y: 10 }}
              animate={
                storyStep >= 5
                  ? { opacity: 1, y: 0 }
                  : { opacity: 0, y: 10 }
              }
              transition={{ duration: 0.8 }}
              className="mt-6"
            >
              And then you took over the entire room.
            </motion.p>
          </div>

          {/* Quietly sincere */}
          <motion.p
            initial={{ opacity: 0, y: 12 }}
            animate={
              storyStep >= 5
                ? { opacity: 1, y: 0 }
                : { opacity: 0, y: 12 }
            }
            transition={{
              duration: 1,
              delay: storyStep >= 5 ? 2.5 : 0,
            }}
            className="
              mx-auto
              mt-10
              max-w-md
              font-serif
              text-sm
              italic
              leading-7
              text-purple-200/55
              sm:text-base
            "
          >
            Somewhere along the way, you stopped being
            someone who was always in my room and became
            someone whose presence feels like home, someone
            who found a place in my heart without me even noticing.
          </motion.p>
        </div>
      </section>

      <LettersSection />

      <SectionDivider label="✦" />

      <MemoriesSection />

      <SectionDivider label="♡" />

      <ThingsILove />

      <SectionDivider label="✦" />

      <SoundtrackSection />

      <SectionDivider label="♡" />

      <BirthdayCake />

      <SectionDivider label="✦" />

      <FinalMessage />
    </main>
  )
}

export default MainUniverse