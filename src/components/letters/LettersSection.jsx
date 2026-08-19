import { motion } from "framer-motion"
import { useState } from "react"
import LetterModal from "./LetterModal"

const members = [
  {
    number: "01",
    name: "RM",
    symbol: "✦",
    clue: "for the part of you that...",
    message: {
      title: "For the part of you that notices.",
      paragraphs: [
        "You remember the random things I say. You notice the little things. You listen when I rant, and somehow remember things I did not even expect you to.",
        "You probably don't realise how much those little things say about you.",
        "You are more thoughtful than you give yourself credit for.",
      ],
    },
  },

  {
    number: "02",
    name: "JIN",
    symbol: "✧",
    clue: "for the part of you that...",
    message: {
      title: "For the part of you that knows she is pretty.",
      paragraphs: [
        "I don't think I have ever met someone who can compliment herself with quite as much confidence as you do.",
        "And honestly? Keep doing it.",
        "There is something really nice about someone who does not need permission to like herself.",
        "You should never become smaller just because other people are uncomfortable with how confidently you take up space",
      ],
    },
  },

  {
    number: "03",
    name: "SUGA",
    symbol: "◇",
    clue: "for the part of you that...",
    message: {
      title: "For the part of you that people don't always see.",
      paragraphs: [
        "There is a side of you that only really comes out when you are completely yourself.",
        "The funny one. The one who can turn the most ordinary moment into something I will always remember.",
        "It is a side of you I got to know without really trying to.",
        "I am glad I got to know that version of you.",
      ],
    },
  },

  {
    number: "04",
    name: "J-HOPE",
    symbol: "✦",
    clue: "for the part of you that...",
    message: {
      title: "For the part of you that makes everything more fun.",
      paragraphs: [
        "Most people experience something and react.", "You experience something and apparently need to make it an entire production.",
        "And somehow, you have convinced yourself this is completely reasonable.", "Please never change",
        "Life is just more entertaining with you around.",
      ],
    },
  },

  {
    number: "05",
    name: "JIMIN",
    symbol: "✧",
    clue: "for the part of you that...",
    message: {
      title: "For the part of you that makes me feel seen.",
      paragraphs: [
        "You listen. Properly.",
        "You let me rant, complain, overthink, repeat myself, and somehow still make me feel like what I am saying matters.",
        "You pay attention to things I don't always say out loud.",
        "I hope you know how rare that is.",
      ],
    },
  },

  {
    number: "06",
    name: "V",
    symbol: "✦",
    clue: "for the part of you that...",
    message: {
      title: "For the part of you that has a strangely familiar problem.",
      paragraphs: [
        "One ear.",
        "Apparently, that is all I have to say.",
        "I saw the opportunity and I was not going to waste it.",
        "I hope you can hear the song I put behind this one. 😭",
        "Anyway, congratulations on finding yet another completely unnecessary way to relate to your favourite.",
      ],
    },
  },

  {
    number: "07",
    name: "JUNGKOOK",
    symbol: "✧",
    clue: "for the part of you that...",
    message: {
      title: "For the part of you that somehow manages to be everything at once.",
      paragraphs: [
        "You are organised until you are not.",
        "You are soft until you are being extra.",
        "You are responsible until there is an opportunity to cause chaos.",
        "You are a lot of different things at once, and I think that is what makes you, Hajarah Muhammad.",
        "Sometimes I wish you could see yourself from where I am standing.",
        "You don't fit neatly into one version of yourself.",
        "So don't try to.",
      ],
    },
  },
]

function LettersSection() {
  const [selectedMember, setSelectedMember] = useState(null)

  return (
    <section
      id="letters"
      className="
        relative
        overflow-hidden
        bg-[#050308]
        px-6
        py-28
        sm:py-36
      "
    >
      {/* Background atmosphere */}
      <div
        className="
          pointer-events-none
          absolute
          left-1/2
          top-[45%]
          h-[500px]
          w-[500px]
          -translate-x-1/2
          -translate-y-1/2
          rounded-full
          bg-purple-700/[0.045]
          blur-[130px]
        "
      />

      {/* Tiny background stars */}
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <span className="absolute left-[12%] top-[20%] text-xs text-purple-300/30">
          ✦
        </span>

        <span className="absolute right-[14%] top-[25%] text-[10px] text-purple-300/20">
          ✦
        </span>

        <span className="absolute left-[8%] top-[62%] text-[9px] text-purple-300/20">
          ✦
        </span>

        <span className="absolute right-[10%] top-[72%] text-xs text-purple-300/25">
          ✦
        </span>
      </div>

      <div className="relative z-10 mx-auto w-full max-w-6xl">

        {/* Heading */}
        <div className="mx-auto max-w-2xl text-center">
          <motion.h2
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.9 }}
            className="
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
            A LITTLE OF SEVEN
          </motion.h2>

          {/* Intro */}
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.9, delay: 0.35 }}
            className="mt-6"
          >
            <p
              className="
                font-serif
                text-sm
                italic
                leading-7
                text-purple-200/55
                sm:text-base
              "
            >
              Seven people. Seven different kinds of light.
            </p>

            <p
              className="
                mt-2
                text-sm
                leading-7
                text-purple-200/55
                sm:text-base
                font-serif
                italic
              "
            >
              Somewhere in you, there's a little of each.
            </p>

            <p
              className="
                mt-1
                font-serif
                text-sm
                italic
                leading-7
                text-purple-200/55
                sm:text-base
              "
            >
              You just have to find out where.
            </p>
          </motion.div>
        </div>

        {/* Constellation */}
        <div className="relative mx-auto mt-20 max-w-4xl sm:mt-24">

          {/* Cards */}
          <div className="relative grid grid-cols-2 gap-5 sm:grid-cols-12 sm:gap-y-14">

            {/* RM */}
            <div className="sm:col-span-3 sm:col-start-1">
              <LetterCard
                member={members[0]}
                index={0}
                onOpen={() => setSelectedMember(members[0])}
              />
            </div>

            {/* Jin */}
            <div className="sm:col-span-3 sm:col-start-5">
              <LetterCard
                member={members[1]}
                index={1}
                onOpen={() => setSelectedMember(members[1])}
              />
            </div>

            {/* Suga */}
            <div className="sm:col-span-3 sm:col-start-9">
              <LetterCard
                member={members[2]}
                index={2}
                onOpen={() => setSelectedMember(members[2])}
              />
            </div>

            {/* J-Hope */}
            <div className="sm:col-span-3 sm:col-start-3">
              <LetterCard
                member={members[3]}
                index={3}
                onOpen={() => setSelectedMember(members[3])}
              />
            </div>

            {/* Jimin */}
            <div className="sm:col-span-3 sm:col-start-7">
              <LetterCard
                member={members[4]}
                index={4}
                onOpen={() => setSelectedMember(members[4])}
              />
            </div>

            {/* V */}
            <div className="sm:col-span-3 sm:col-start-4">
              <LetterCard
                member={members[5]}
                index={5}
                onOpen={() => setSelectedMember(members[5])}
              />
            </div>

            {/* Jungkook */}
            <div className="sm:col-span-3 sm:col-start-8">
              <LetterCard
                member={members[6]}
                index={6}
                onOpen={() => setSelectedMember(members[6])}
                featured
              />
            </div>
          </div>
        </div>
      </div>

      {/* Letter modal */}
      <LetterModal
        member={selectedMember}
        onClose={() => setSelectedMember(null)}
      />
    </section>
  )
}

function LetterCard({ member, index, onOpen, featured = false }) {
  const [flipped, setFlipped] = useState(false)

  const handleClick = () => {
    if (flipped) return

    setFlipped(true)

    setTimeout(() => {
      onOpen()
      setFlipped(false)
    }, 700)
  }

  return (
    <div
      className="
        relative
        mx-auto
        h-[250px]
        w-full
        max-w-[260px]
        sm:h-[270px]
      "
      style={{ perspective: "1200px" }}
    >
      <motion.button
        onClick={handleClick}
        initial={{ opacity: 0, y: 25 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{
          duration: 0.7,
          delay: index * 0.08,
        }}
        whileHover={{
          y: -7,
        }}
        whileTap={{
          scale: 0.97,
        }}
        animate={{
          rotateY: flipped ? 180 : 0,
        }}
        className="
          group
          absolute
          inset-0
          flex
          h-full
          w-full
          flex-col
          overflow-hidden
          rounded-2xl
          border
          border-purple-400/20
          bg-[#09060d]/90
          p-5
          text-center
          shadow-[0_15px_50px_rgba(0,0,0,0.35)]
          backdrop-blur-sm
          transition-colors
          duration-500
          hover:border-purple-400/45
          hover:bg-purple-950/20
          hover:shadow-[0_20px_60px_rgba(109,40,217,0.18)]
          sm:p-6
        "
        style={{
          transformStyle: "preserve-3d",
          backfaceVisibility: "hidden",
        }}
      >
        {/* Card glow */}
        <div
          className="
            pointer-events-none
            absolute
            left-1/2
            top-1/2
            h-32
            w-32
            -translate-x-1/2
            -translate-y-1/2
            rounded-full
            bg-purple-600/[0.04]
            blur-3xl
            transition-all
            duration-500
            group-hover:bg-purple-600/[0.12]
          "
        />

        {/* Background symbol */}
        <span
          className="
            pointer-events-none
            absolute
            bottom-1
            right-2
            font-serif
            text-[7rem]
            leading-none
            text-purple-400/[0.035]
          "
        >
          {member.symbol}
        </span>

        {/* Card content */}
        <div className="relative flex h-full flex-col items-center justify-center">

          <motion.span
            className="
              text-2xl
              text-purple-200
              drop-shadow-[0_0_12px_rgba(192,132,252,0.25)]
            "
            animate={{
              rotate: flipped ? 10 : 0,
              scale: flipped ? 1.1 : 1,
            }}
            transition={{ duration: 0.3 }}
          >
            {member.symbol}
          </motion.span>

          <h3
            className="
              mt-5
              text-sm
              font-medium
              tracking-[0.3em]
              text-white
            "
          >
            {member.name}
          </h3>

          <div className="mt-4 h-px w-7 bg-purple-400/30" />

          <p
            className="
              mt-4
              max-w-[170px]
              font-serif
              text-xs
              italic
              leading-5
              text-purple-200/45
            "
          >
            {member.clue}
          </p>
        </div>
      </motion.button>
    </div>
  )
}

export default LettersSection