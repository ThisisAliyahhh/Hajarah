import { useEffect, useRef, useState } from "react"
import Intro from "./components/intro/Intro"
import MainUniverse from "./components/layout/MainUniverse"
import SparkEffect from "./components/layout/SparkEffect"
import StarCollector from "./components/secret/StarCollector"
import IdentityCheck from "./components/secret/IdentityCheck"
import NotHajarah from "./components/secret/NotHajarah"
import SecretPage from "./components/secret/SecretPage"

function App() {
  const [page, setPage] = useState("intro")
  const [isMuted, setIsMuted] = useState(false)

  const audioRef = useRef(null)
  const isMutedRef = useRef(false)

  useEffect(() => {
    const audio = new Audio("/music/birds-of-a-feather.mp3")

    audio.loop = true
    audio.volume = 0.22
    audio.preload = "auto"

    audioRef.current = audio

    // Pause background music when soundtrack starts
    const pauseBackgroundMusic = () => {
      audio.pause()
    }

    // Resume background music when soundtrack is paused
    const resumeBackgroundMusic = () => {
      if (isMutedRef.current) return

      audio
        .play()
        .catch((error) => {
          console.log(
            "Background music could not resume:",
            error
          )
        })
    }

    window.addEventListener(
      "soundtrack-play",
      pauseBackgroundMusic
    )

    window.addEventListener(
      "soundtrack-pause",
      resumeBackgroundMusic
    )

    return () => {
      window.removeEventListener(
        "soundtrack-play",
        pauseBackgroundMusic
      )

      window.removeEventListener(
        "soundtrack-pause",
        resumeBackgroundMusic
      )

      audio.pause()
      audio.currentTime = 0
      audioRef.current = null
    }
  }, [])

  const enterUniverse = () => {
    const audio = audioRef.current

    setPage("main")

    if (!audio) return

    audio.muted = isMutedRef.current

    audio
      .play()
      .catch((error) => {
        console.log(
          "Audio playback was blocked:",
          error
        )
      })
  }

  const toggleMute = () => {
    const audio = audioRef.current

    if (!audio) return

    const nextMuted = !isMuted

    audio.muted = nextMuted

    isMutedRef.current = nextMuted
    setIsMuted(nextMuted)
  }

  return (
    <>
      <SparkEffect />

      {page === "intro" && (
        <Intro onEnter={enterUniverse} />
      )}

      {page === "main" && (
        <>
          <StarCollector
            onComplete={() => setPage("identity")}
          />

          <MainUniverse />
        </>
      )}

      {page === "identity" && (
        <IdentityCheck
          onCorrect={() => setPage("secret")}
          onIncorrect={() => setPage("denied")}
        />
      )}

      {page === "denied" && (
        <NotHajarah
          onBack={() => setPage("identity")}
        />
      )}

      {page === "secret" && <SecretPage />}

      {/* Music control */}
      {page !== "intro" && (
        <button
          onClick={toggleMute}
          aria-label={
            isMuted
              ? "Unmute music"
              : "Mute music"
          }
          className="
            fixed
            bottom-5
            right-5
            z-[300]
            flex
            h-10
            w-10
            items-center
            justify-center
            rounded-full
            border
            border-purple-400/20
            bg-[#0a0710]/70
            text-purple-200/70
            backdrop-blur-md
            transition-all
            duration-300
            hover:border-purple-400/40
            hover:bg-purple-500/[0.08]
            hover:text-purple-100
          "
        >
          {isMuted ? (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.5"
              className="h-4 w-4"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M11 5.25 7 8.5H4.75A1.75 1.75 0 0 0 3 10.25v3.5c0 .966.784 1.75 1.75 1.75H7l4 3.25V5.25Z"
              />

              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="m17 9-5 6m0-6 5 6"
              />
            </svg>
          ) : (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.5"
              className="h-4 w-4"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M11 5.25 7 8.5H4.75A1.75 1.75 0 0 0 3 10.25v3.5c0 .966.784 1.75 1.75 1.75H7l4 3.25V5.25Z"
              />

              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M15.5 9a4.5 4.5 0 0 1 0 6"
              />

              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M18 6.75a8 8 0 0 1 0 10.5"
              />
            </svg>
          )}
        </button>
      )}
    </>
  )
}

export default App