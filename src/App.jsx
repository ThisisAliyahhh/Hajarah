import { useEffect, useRef, useState } from "react"
import Intro from "./components/intro/Intro"
import MainUniverse from "./components/layout/MainUniverse"
import SparkEffect from "./components/layout/SparkEffect"
import StarField from "./components/layout/StarField"
import StarCollector from "./components/secret/StarCollector"
import IdentityCheck from "./components/secret/IdentityCheck"
import NotHajarah from "./components/secret/NotHajarah"
import SecretPage from "./components/secret/SecretPage"

function App() {
  const [page, setPage] = useState("intro")
  const [isMuted, setIsMuted] = useState(false)

  const backgroundAudioRef = useRef(null)
  const secretAudioRef = useRef(null)

  const isMutedRef = useRef(false)
  const pageRef = useRef("intro")

  useEffect(() => {
    const backgroundAudio = new Audio(
      "/music/birds-of-a-feather.mp3"
    )

    const secretAudio = new Audio(
      "/music/photograph.mp3"
    )

    backgroundAudio.loop = true
    backgroundAudio.volume = 0.22
    backgroundAudio.preload = "auto"

    secretAudio.loop = true
    secretAudio.volume = 0.22
    secretAudio.preload = "auto"

    backgroundAudioRef.current = backgroundAudio
    secretAudioRef.current = secretAudio

    // Playlist starts playing
    // Pause Birds of a Feather
    const handleSoundtrackPlay = () => {
      const backgroundAudio = backgroundAudioRef.current

      if (backgroundAudio) {
        backgroundAudio.pause()
      }
    }

    // Playlist pauses
    // Resume Birds of a Feather
    const handleSoundtrackPause = () => {
      if (isMutedRef.current) return

      if (pageRef.current === "secret") return

      const backgroundAudio = backgroundAudioRef.current

      if (!backgroundAudio) return

      backgroundAudio
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
      handleSoundtrackPlay
    )

    window.addEventListener(
      "soundtrack-pause",
      handleSoundtrackPause
    )

    return () => {
      window.removeEventListener(
        "soundtrack-play",
        handleSoundtrackPlay
      )

      window.removeEventListener(
        "soundtrack-pause",
        handleSoundtrackPause
      )

      backgroundAudio.pause()
      backgroundAudio.currentTime = 0

      secretAudio.pause()
      secretAudio.currentTime = 0

      backgroundAudioRef.current = null
      secretAudioRef.current = null
    }
  }, [])

  const stopAllMusic = () => {
    const backgroundAudio = backgroundAudioRef.current
    const secretAudio = secretAudioRef.current

    if (backgroundAudio) {
      backgroundAudio.pause()
    }

    if (secretAudio) {
      secretAudio.pause()
    }
  }

  const playBackgroundMusic = () => {
    if (isMutedRef.current) return

    const backgroundAudio = backgroundAudioRef.current
    const secretAudio = secretAudioRef.current

    if (!backgroundAudio) return

    // Make sure Photograph is stopped
    if (secretAudio) {
      secretAudio.pause()
    }

    backgroundAudio.muted = false

    backgroundAudio
      .play()
      .catch((error) => {
        console.log(
          "Background music playback was blocked:",
          error
        )
      })
  }

  const playSecretMusic = () => {
    if (isMutedRef.current) return

    const secretAudio = secretAudioRef.current
    const backgroundAudio = backgroundAudioRef.current

    if (!secretAudio) return

    // Stop Birds of a Feather
    if (backgroundAudio) {
      backgroundAudio.pause()
    }

    secretAudio.currentTime = 0
    secretAudio.muted = false

    secretAudio
      .play()
      .catch((error) => {
        console.log(
          "Secret music playback was blocked:",
          error
        )
      })
  }

  const enterUniverse = () => {
    pageRef.current = "main"
    setPage("main")

    if (isMutedRef.current) return

    playBackgroundMusic()
  }

  const goToSecret = () => {
    stopAllMusic()

    pageRef.current = "secret"
    setPage("secret")

    if (isMutedRef.current) return

    playSecretMusic()
  }

  const toggleMute = () => {
    const backgroundAudio = backgroundAudioRef.current
    const secretAudio = secretAudioRef.current

    const nextMuted = !isMuted

    isMutedRef.current = nextMuted
    setIsMuted(nextMuted)

    if (nextMuted) {
      if (backgroundAudio) {
        backgroundAudio.muted = true
        backgroundAudio.pause()
      }

      if (secretAudio) {
        secretAudio.muted = true
        secretAudio.pause()
      }

      return
    }

    if (backgroundAudio) {
      backgroundAudio.muted = false
    }

    if (secretAudio) {
      secretAudio.muted = false
    }

    if (pageRef.current === "secret") {
      playSecretMusic()
    } else {
      playBackgroundMusic()
    }
  }

  return (
    <div className="relative min-h-screen bg-[#050308]">
      <StarField />

      <div className="relative z-10">
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
            onCorrect={goToSecret}
            onIncorrect={() => setPage("denied")}
          />
        )}

        {page === "denied" && (
          <NotHajarah
            onBack={() => setPage("identity")}
          />
        )}

        {page === "secret" && <SecretPage />}

        {/* Single music control */}
        {page !== "intro" && (
          <button
            onClick={toggleMute}
            aria-label={
              isMuted
                ? "Play music"
                : "Pause music"
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
              outline-none
              transition-all
              duration-300
              hover:border-purple-400/40
              hover:bg-purple-500/[0.08]
              hover:text-purple-100
              focus:outline-none
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
      </div>
    </div>
  )
}

export default App