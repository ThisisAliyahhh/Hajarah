import { useState } from "react"
import { motion } from "framer-motion"
import MemoryModal from "./MemoryModal"

const memories = [
  {
    id: 1,
    type: "image",
    src: "/memories/photo-01.jpg",
    caption: "This seemed like a good idea at the time.",
    rotation: "-2deg",
  },
  {
    id: 2,
    type: "image",
    src: "/memories/photo-02.jpg",
    caption: "Busy being cute as always.",
    rotation: "2deg",
  },
  {
    id: 3,
    type: "image",
    src: "/memories/photo-03.jpeg",
    caption: "No explanation necessary.",
    rotation: "-1deg",
  },
  {
    id: 4,
    type: "image",
    src: "/memories/photo-04.jpg",
    caption: "Three graduates on their way to very important mission.",
    rotation: "3deg",
  },
  {
    id: 5,
    type: "video",
    src: "/memories/video-01.mp4",
    caption: "Mineee",
    rotation: "-3deg",
  },
  {
    id: 6,
    type: "image",
    src: "/memories/photo-05.jpg",
    caption: "And we are almost doneeeee.",
    rotation: "2deg",
  },
  {
    id: 7,
    type: "image",
    src: "/memories/photo-06.jpg",
    caption: "WTF dayysssss",
    rotation: "-3deg",
  },
  {
    id: 8,
    type: "image",
    src: "/memories/photo-07.jpg",
    caption: "And somehow, we became sisters.",
    rotation: "1deg",
  },
  {
    id: 9,
    type: "image",
    src: "/memories/photo-08.jpg",
    caption: "Our fav pose.",
    rotation: "-2deg",
  },
  {
    id: 10,
    type: "image",
    src: "/memories/photo-09.jpg",
    caption: "We had a plan. Sort of....",
    rotation: "-2deg",
  },
  {
    id: 11,
    type: "image",
    src: "/memories/photo-10.jpg",
    caption: "No comment.",
    rotation: "2deg",
  },
  {
    id: 12,
    type: "image",
    src: "/memories/photo-11.jpg",
    caption: "Aghhh Sunkissed.",
    rotation: "-1deg",
  },
  {
    id: 13,
    type: "image",
    src: "/memories/photo-12.jpg",
    caption: "Safe space",
    rotation: "3deg",
  },
  {
    id: 14,
    type: "video",
    src: "/memories/video-02.mp4",
    caption: "Hating on school together",
    rotation: "-3deg",
  },
  {
    id: 15,
    type: "image",
    src: "/memories/photo-13.jpg",
    caption: "Gang shit",
    rotation: "2deg",
  },
  {
    id: 16,
    type: "image",
    src: "/memories/photo-14.jpg",
    caption: "Pretty four eyes",
    rotation: "-3deg",
  },
  {
    id: 17,
    type: "image",
    src: "/memories/photo-15.jpg",
    caption: "Three musketters",
    rotation: "2deg",
  },
  {
    id: 18,
    type: "image",
    src: "/memories/photo-16.jpg",
    caption: "Mummyyyyyyyyy.",
    rotation: "-2deg",
  },
  {
    id: 19,
    type: "image",
    src: "/memories/photo-17.jpg",
    caption: "Ma mannnnnnnnnnnnnn",
    rotation: "-2deg",
  },
  {
    id: 20,
    type: "image",
    src: "/memories/photo-18.jpg",
    caption: "Four-eyes gangs",
    rotation: "2deg",
  },
  {
    id: 21,
    type: "image",
    src: "/memories/photo-19.jpg",
    caption: "Yanshless babe",
    rotation: "-1deg",
  },
  {
    id: 22,
    type: "image",
    src: "/memories/photo-20.jpg",
    caption: "Finalist",
    rotation: "3deg",
  },
  {
    id: 23,
    type: "video",
    src: "/memories/video-03.mp4",
    caption: "We should really consider applying for close up advert",
    rotation: "-3deg",
  },
  {
    id: 24,
    type: "image",
    src: "/memories/photo-21.jpg",
    caption: "Baami and his daughters 😹",
    rotation: "2deg",
  },
  {
    id: 25,
    type: "image",
    src: "/memories/photo-22.jpg",
    caption: "See yansh",
    rotation: "-3deg",
  },
  {
    id: 26,
    type: "image",
    src: "/memories/photo-23.jpg",
    caption: "Twinnnnnnnnn (I am not trying to take over baami I was the first 😏)",
    rotation: "2deg",
  },
  {
    id: 27,
    type: "image",
    src: "/memories/photo-24.jpg",
    caption: "First time being serious",
    rotation: "-2deg",
  },
  {
    id: 28,
    type: "image",
    src: "/memories/photo-25.jpg",
    caption: "You just love bending me ",
    rotation: "-2deg",
  },
  {
    id: 29,
    type: "image",
    src: "/memories/photo-26.jpg",
    caption: "😜",
    rotation: "2deg",
  },
  {
    id: 30,
    type: "image",
    src: "/memories/photo-27.jpg",
    caption: "Looking at me with so much loveeeee 😍",
    rotation: "-1deg",
  },
  {
    id: 31,
    type: "image",
    src: "/memories/photo-28.jpg",
    caption: "Threes...",
    rotation: "3deg",
  },
  {
    id: 32,
    type: "video",
    src: "/memories/video-04.mp4",
    caption: "Every video always end with us laughing",
    rotation: "-3deg",
  },
  {
    id: 33,
    type: "image",
    src: "/memories/photo-29.jpg",
    caption: "With the little blessing added to our life this year",
    rotation: "-2deg",
  },
  {
    id: 34,
    type: "image",
    src: "/memories/photo-30.jpg",
    caption: "Hmmm 😹😹😹",
    rotation: "-2deg",
  },
  {
    id: 35,
    type: "image",
    src: "/memories/photo-31.jpg",
    caption: "I love youuuuu ❤️",
    rotation: "-2deg",
  },
  {
    id: 36,
    type: "image",
    src: "/memories/photo-32.jpg",
    caption: "I promise I am not obsessed 🥺",
    rotation: "-2deg",
  },
]

function MemoriesSection() {
  const [selectedMemory, setSelectedMemory] = useState(null)
  return (
    <section
      id="memories"
      className="relative overflow-hidden bg-[#050308] px-6 py-28 sm:py-36"
    >
      <div className="mx-auto w-full max-w-6xl">
        {/* Heading */}
        <div className="mx-auto max-w-xl text-center">
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
            Our archive
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
            THE GOOD, THE BAD & US
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
            Evidence that we actually survived.
          </motion.p>
        </div>

        {/* Memory wall */}
        <div
          className="
            mt-16
            grid
            grid-cols-2
            gap-5
            sm:grid-cols-3
            sm:gap-7
          "
        >
          {memories.map((memory, index) => (
            <MemoryCard
              key={memory.id}
              memory={memory}
              index={index}
              onOpen={() => setSelectedMemory(memory)}
              
            />
          ))}
        </div>
      </div>
      <MemoryModal
        memory={selectedMemory}
        onClose={() => setSelectedMemory(null)}
      />
    </section>
  )
}

function MemoryCard({ memory, index, onOpen }) {
  return (
    <motion.button
      initial={{
        opacity: 0,
        y: 30,
        rotate: 0,
      }}
      whileInView={{
        opacity: 1,
        y: 0,
        rotate: memory.rotation,
      }}
      viewport={{ once: true }}
      transition={{
        duration: 0.8,
        delay: index * 0.08,
      }}
      whileHover={{
        y: -10,
        rotate: 0,
        scale: 1.02,
      }}
      whileTap={{
        scale: 0.97,
      }}
      onClick={onOpen}
      className="
        group
        relative
        overflow-hidden
        rounded-xl
        border
        border-white/[0.08]
        bg-[#0b0710]
        p-2
        text-left
        shadow-[0_15px_50px_rgba(0,0,0,0.3)]
        transition-all
        duration-500
        hover:shadow-[0_20px_70px_rgba(109,40,217,0.18)]
        sm:p-3
      "
    >
      {/* Image */}
      <div
        className="
          relative
          aspect-[4/5]
          overflow-hidden
          rounded-lg
          bg-purple-950/20
        "
      >
        {memory.type === "video" ? (
          <video
            src={memory.src}
            autoPlay
            loop
            muted
            playsInline
            className="
              h-full
              w-full
              object-cover
              opacity-70
              transition-all
              duration-700
              group-hover:scale-105
              group-hover:opacity-90
            "
          />
        ) : (
          <img
            src={memory.src}
            alt=""
            className="
              h-full
              w-full
              object-cover
              opacity-70
              transition-all
              duration-700
              group-hover:scale-105
              group-hover:opacity-90
            "
          />
        )}

        {/* Purple overlay */}
        <div
          className="
            pointer-events-none
            absolute
            inset-0
            bg-gradient-to-t
            from-black/70
            via-transparent
            to-purple-900/10
          "
        />
      </div>

      {/* Caption */}
      <div className="px-2 pb-2 pt-3 sm:px-3 sm:pb-3">
        <p className="text-[10px] leading-5 text-white/40 sm:text-xs">
          {memory.caption}
        </p>
      </div>
    </motion.button>
  )
}

export default MemoriesSection