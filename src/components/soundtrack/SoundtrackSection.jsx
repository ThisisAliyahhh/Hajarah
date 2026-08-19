import { motion } from "framer-motion"
import { useEffect, useRef, useState } from "react"

const songs = [
  {
    number: "01",
    title: "Swim",
    src: "/music/swim.mp3",
  },
  {
    number: "02",
    title: "2.0",
    src: "/music/2-0.mp3",
  },
  {
    number: "03",
    title: "Seven",
    src: "/music/seven.mp3",
  },
  {
    number: "04",
    title: "Fri(end)s",
    src: "/music/fri(end)s.mp3",
  },
  {
    number: "05",
    title: "They don't know 'bout us",
    src: "/music/they-dont-know-'bout-us.mp3",
  },
  {
    number: "06",
    title: "Fya",
    src: "/music/fya.mp3",
  },
  {
    number: "07",
    title: "Hooligan",
    src: "/music/hooligan.mp3",
  },
]

function PlayIcon({ playing = false }) {
  if (playing) {
    return (
      <span className="flex items-center gap-[3px]">
        <span className="h-3 w-[2px] rounded-full bg-current" />
        <span className="h-3 w-[2px] rounded-full bg-current" />
      </span>
    )
  }

  return (
    <span
      className="
        ml-[2px]
        h-0
        w-0
        border-y-[5px]
        border-l-[7px]
        border-y-transparent
        border-l-current
      "
    />
  )
}

function SoundtrackSection() {
  const [currentSong, setCurrentSong] = useState(null)
  const [isPlaying, setIsPlaying] = useState(false)

  const audioRef = useRef(null)

  useEffect(() => {
    const audio = new Audio()
    audioRef.current = audio

    const handleEnded = () => {
      setCurrentSong((current) => {
        if (current === null) {
          return null
        }

        // Go to the next song.
        // After Hooligan, return to Swim.
        const nextSong =
          current + 1 >= songs.length
            ? 0
            : current + 1

        audio.src = songs[nextSong].src
        audio.currentTime = 0

        audio
          .play()
          .then(() => {
            setIsPlaying(true)

            // Keep background music paused
            window.dispatchEvent(
              new CustomEvent("soundtrack-play")
            )
          })
          .catch((error) => {
            console.log(
              "Audio playback failed:",
              error
            )
            setIsPlaying(false)
          })

        return nextSong
      })
    }

    audio.addEventListener("ended", handleEnded)

    return () => {
      audio.pause()
      audio.removeEventListener("ended", handleEnded)
      audioRef.current = null
    }
  }, [])

  const playSong = (index) => {
    const audio = audioRef.current

    if (!audio) return

    // Clicking the currently playing song pauses it
    if (currentSong === index && isPlaying) {
      audio.pause()
      setIsPlaying(false)

      // Resume background music
      window.dispatchEvent(
        new CustomEvent("soundtrack-pause")
      )

      return
    }

    // Selecting another song
    if (currentSong !== index) {
      audio.pause()
      audio.src = songs[index].src
      audio.currentTime = 0
      setCurrentSong(index)
    }

    audio
      .play()
      .then(() => {
        setIsPlaying(true)

        // Pause background music
        window.dispatchEvent(
          new CustomEvent("soundtrack-play")
        )
      })
      .catch((error) => {
        console.log(
          "Audio playback failed:",
          error
        )
        setIsPlaying(false)
      })
  }

  const toggleMainPlayer = () => {
    const audio = audioRef.current

    if (!audio) return

    // Nothing selected yet
    // Start from Swim
    if (currentSong === null) {
      playSong(0)
      return
    }

    // Pause soundtrack
    if (isPlaying) {
      audio.pause()
      setIsPlaying(false)

      // Resume background music
      window.dispatchEvent(
        new CustomEvent("soundtrack-pause")
      )

      return
    }

    // Resume soundtrack
    audio
      .play()
      .then(() => {
        setIsPlaying(true)

        // Pause background music again
        window.dispatchEvent(
          new CustomEvent("soundtrack-play")
        )
      })
      .catch((error) => {
        console.log(
          "Audio playback failed:",
          error
        )
        setIsPlaying(false)
      })
  }

  return (
    <section
      id="soundtrack"
      className="
        relative
        overflow-hidden
        bg-[#050308]
        px-6
        py-28
        sm:py-36
      "
    >
      <div className="mx-auto w-full max-w-5xl">

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
            ON REPEAT
          </motion.p>

          <motion.h2
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{
              duration: 0.9,
              delay: 0.1,
            }}
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
            PLAYLIST
          </motion.h2>

          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{
              duration: 0.8,
              delay: 0.3,
            }}
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
            I can't hear these without thinking of you,
            they always remind me of you.
          </motion.p>
        </div>

        {/* Album card */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{
            opacity: 1,
            y: 0,
          }}
          viewport={{ once: true }}
          transition={{
            duration: 0.9,
            delay: 0.3,
          }}
          className="
            mx-auto
            mt-16
            max-w-3xl
            overflow-hidden
            rounded-[2rem]
            border
            border-purple-400/10
            bg-[#09060d]
            shadow-[0_20px_80px_rgba(0,0,0,0.35)]
          "
        >
          {/* Album header */}
          <div
            className="
              relative
              overflow-hidden
              border-b
              border-purple-400/[0.08]
              p-7
              sm:p-10
            "
          >
            {/* Purple glow */}
            <div
              className="
                pointer-events-none
                absolute
                -right-20
                -top-20
                h-60
                w-60
                rounded-full
                bg-purple-700/10
                blur-[80px]
              "
            />

            <div
              className="
                relative
                flex
                flex-col
                gap-10
                sm:flex-row
                sm:items-center
              "
            >
              {/* Album artwork */}
              <div
                className="
                  flex
                  aspect-square
                  w-36
                  shrink-0
                  items-center
                  justify-center
                  self-center
                  rounded-2xl
                  border
                  border-purple-400/20
                  bg-gradient-to-br
                  from-purple-950
                  via-[#0c0712]
                  to-black
                  shadow-[0_0_50px_rgba(109,40,217,0.12)]
                  sm:w-44
                  sm:self-auto
                "
              >
                <div className="text-center">
                  <p
                    className="
                      font-['Allura']
                      text-6xl
                      leading-none
                      text-purple-200/90
                      drop-shadow-[0_0_12px_rgba(216,180,254,0.2)]
                    "
                  >
                    HB
                  </p>

                  <div className="mx-auto mt-4 h-px w-8 bg-purple-300/30" />

                  <p
                    className="
                      mt-4
                      text-[8px]
                      uppercase
                      tracking-[0.3em]
                      text-white/25
                    "
                  >
                    YOU LEFT A MARK
                  </p>
                </div>
              </div>

              {/* Right side */}
              <div
                className="
                  flex
                  min-h-[176px]
                  flex-1
                  flex-col
                  justify-center
                  text-center
                  sm:text-left
                "
              >
                <p
                  className="
                    text-[10px]
                    uppercase
                    tracking-[0.4em]
                    text-purple-300/50
                  "
                >
                  HAJARAH'S PLAYLIST
                </p>

                <p className="mt-3 text-sm text-white/35">
                  7 tracks
                </p>

                {/* Main player */}
                <div
                  className="
                    mt-6
                    flex
                    items-center
                    justify-center
                    gap-4
                    sm:justify-start
                  "
                >
                  <button
                    onClick={toggleMainPlayer}
                    className="
                      flex
                      h-11
                      w-11
                      shrink-0
                      cursor-pointer
                      items-center
                      justify-center
                      rounded-full
                      bg-purple-400
                      text-black
                      shadow-[0_0_25px_rgba(192,132,252,0.2)]
                      outline-none
                      transition-all
                      duration-300
                      hover:scale-105
                      hover:shadow-[0_0_35px_rgba(192,132,252,0.35)]
                      focus:outline-none
                      focus:ring-0
                    "
                    aria-label={
                      isPlaying
                        ? "Pause playlist"
                        : "Play playlist"
                    }
                  >
                    <PlayIcon
                      playing={isPlaying}
                    />
                  </button>

                  <div className="min-w-0">
                    <p
                      className="
                        max-w-[180px]
                        truncate
                        text-[10px]
                        uppercase
                        tracking-[0.25em]
                        text-white/25
                      "
                    >
                      {currentSong !== null
                        ? songs[currentSong].title
                        : "7 TRACKS"}
                    </p>

                    {isPlaying && (
                      <motion.div
                        initial={{
                          opacity: 0,
                        }}
                        animate={{
                          opacity: 1,
                        }}
                        className="
                          mt-1
                          flex
                          items-center
                          gap-1
                        "
                      >
                        <span className="h-1 w-1 rounded-full bg-purple-300" />
                        <span className="h-1 w-1 rounded-full bg-purple-300" />
                        <span className="h-1 w-1 rounded-full bg-purple-300" />

                        <span
                          className="
                            ml-1
                            text-[8px]
                            uppercase
                            tracking-[0.2em]
                            text-purple-300/40
                          "
                        >
                          PLAYING
                        </span>
                      </motion.div>
                    )}
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Tracklist */}
          <div className="divide-y divide-purple-400/[0.07]">
            {songs.map((song, index) => (
              <Track
                key={song.number}
                song={song}
                isActive={currentSong === index}
                isPlaying={
                  currentSong === index &&
                  isPlaying
                }
                onPlay={() =>
                  playSong(index)
                }
              />
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}

function Track({
  song,
  isActive,
  isPlaying,
  onPlay,
}) {
  return (
    <motion.div
      whileHover={{ x: 3 }}
      className={`
        group
        flex
        w-full
        items-center
        gap-4
        px-6
        py-5
        text-left
        transition-colors
        duration-300
        sm:gap-7
        sm:px-10
        sm:py-6
        ${
          isActive
            ? "bg-purple-500/[0.045]"
            : "hover:bg-purple-500/[0.035]"
        }
      `}
    >
      {/* Number */}
      <span
        className={`
          w-5
          shrink-0
          font-mono
          text-[10px]
          ${
            isActive
              ? "text-purple-300/70"
              : "text-purple-400/40"
          }
        `}
      >
        {song.number}
      </span>

      {/* Play button */}
      <button
        onClick={onPlay}
        className={`
          flex
          h-8
          w-8
          shrink-0
          cursor-pointer
          items-center
          justify-center
          rounded-full
          border
          text-[9px]
          outline-none
          transition-all
          duration-300
          focus:outline-none
          focus:ring-0
          ${
            isActive
              ? "border-purple-400/40 text-purple-300"
              : "border-purple-400/10 text-purple-300/40 group-hover:border-purple-400/30 group-hover:text-purple-300"
          }
        `}
        aria-label={
          isPlaying
            ? `Pause ${song.title}`
            : `Play ${song.title}`
        }
      >
        <PlayIcon playing={isPlaying} />
      </button>

      {/* Song */}
      <div className="min-w-0 flex-1">
        <p
          className={`
            truncate
            text-sm
            transition-colors
            sm:text-base
            ${
              isActive
                ? "text-white"
                : "text-white/70 group-hover:text-white"
            }
          `}
        >
          {song.title}
        </p>

        {isActive && isPlaying && (
          <p
            className="
              mt-1
              text-[8px]
              uppercase
              tracking-[0.2em]
              text-purple-300/40
            "
          >
            NOW PLAYING
          </p>
        )}
      </div>
    </motion.div>
  )
}

export default SoundtrackSection