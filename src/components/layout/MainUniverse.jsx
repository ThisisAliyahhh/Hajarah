import { motion } from "framer-motion"
import { useEffect, useState } from "react"
import Navbar from "./Navbar"
import StarField from "./StarField"
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
      1500,
      2000,
      2000,
      2600,
      3200,
      3500,
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
    <main className="relative min-h-screen bg-[#050308] text-white">

      {/* One continuous star field */}
      <StarField />

      {/* Everything sits above the stars */}
      <div className="relative z-10">
        <Navbar />

        {/* Hero */}
        <section
          id="hero"
          className="
            relative
            flex
            min-h-[100svh]
            items-center
            justify-center
            overflow-hidden
            bg-transparent
            px-6
            pt-20
          "
        >
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
                text-[0.85rem]
                font-normal
                italic
                leading-tight
                tracking-[0.03em]
                text-purple-300/60
                sm:text-base
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
                mt-4
                font-serif
                text-[1rem]
                font-normal
                italic
                leading-tight
                tracking-[0.01em]
                text-white/75
                sm:text-lg
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
              className="
                mx-auto
                mt-6
                h-px
                w-16
                bg-purple-400/30
              "
            />

            {/* Story */}
            <div
              className="
                mx-auto
                mt-7
                max-w-lg
                font-serif
                text-sm
                italic
                leading-8
                text-purple-200/55
                sm:text-base
                sm:leading-9
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

        {/* Letters */}
        <section className="relative bg-transparent">
          <LettersSection />
        </section>

        <SectionDivider label="✦" />

        {/* Memories */}
        <section className="relative bg-transparent">
          <MemoriesSection />
        </section>

        <SectionDivider label="♡" />

        {/* Things I Love */}
        <section className="relative bg-transparent">
          <ThingsILove />
        </section>

        <SectionDivider label="✦" />

        {/* Soundtrack */}
        <section className="relative bg-transparent">
          <SoundtrackSection />
        </section>

        <SectionDivider label="♡" />

        {/* Birthday Cake */}
        <section className="relative bg-transparent">
          <BirthdayCake />
        </section>

        <SectionDivider label="✦" />

        {/* Final Message */}
        <section className="relative bg-transparent">
          <FinalMessage />
        </section>
      </div>
    </main>
  )
}

export default MainUniverse