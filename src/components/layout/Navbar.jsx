import { AnimatePresence, motion } from "framer-motion"
import { useState } from "react"

const menuItems = [
  {
    label: "Seven",
    target: "letters",
  },
  {
    label: "Archive",
    target: "memories",
  },
  {
    label: "18 + 1",
    target: "nineteen",
  },
  {
    label: "On Repeat",
    target: "soundtrack",
  },
  {
    label: "Cake",
    target: "birthday",
  },
]

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false)

  const scrollToSection = (target) => {
    const section = document.getElementById(target)

    if (section) {
      section.scrollIntoView({
        behavior: "smooth",
        block: "start",
      })
    }

    setMenuOpen(false)
  }

  const goHome = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    })
  }

  return (
    <>
      {/* Navigation bar */}
      <nav className="fixed left-0 right-0 top-0 z-50 px-5 py-4 sm:px-8 sm:py-6">
        <div className="mx-auto flex max-w-6xl items-center justify-between">
          {/* Logo */}
          <button
            onClick={goHome}
            className="
              relative
              font-['Allura']
              text-sm
              font-medium
              tracking-[0.25em]
              text-purple-200/80
              transition-all
              duration-300
              hover:scale-105
              hover:text-purple-100
              hover:drop-shadow-[0_0_10px_rgba(192,132,252,0.5)]
            "
          >
            HB
          </button>

          {/* Menu button */}
          <button
            onClick={() => setMenuOpen(true)}
            className="
              rounded-full
              border
              border-purple-400/20
              bg-purple-500/[0.05]
              px-4
              py-2
              text-[10px]
              font-medium
              tracking-[0.25em]
              text-purple-200/80
              backdrop-blur-md
              transition-all
              duration-300
              hover:border-purple-400/40
              hover:bg-purple-500/[0.1]
              hover:text-purple-100
              sm:px-5
              sm:text-xs
            "
          >
            MENU
          </button>
        </div>
      </nav>

      {/* Menu overlay */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.35 }}
            className="
              fixed
              inset-0
              z-[200]
              overflow-hidden
              bg-[#050308]/95
              px-6
              py-6
              backdrop-blur-xl
              sm:px-10
              sm:py-8
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
                bg-purple-700/10
                blur-[120px]
              "
            />

            <div className="relative mx-auto flex h-full max-w-5xl flex-col">

              {/* Top */}
              <div className="flex shrink-0 items-center justify-between">
                <span
                  className="
                    font-['Allura']
                    text-sm
                    tracking-[0.25em]
                    text-purple-200
                  "
                >
                  HB
                </span>

                <button
                  onClick={() => setMenuOpen(false)}
                  className="
                    flex
                    h-9
                    w-9
                    items-center
                    justify-center
                    rounded-full
                    border
                    border-white/10
                    text-sm
                    text-white/50
                    transition-all
                    hover:border-purple-400/30
                    hover:text-white
                  "
                  aria-label="Close menu"
                >
                  ✕
                </button>
              </div>

              {/* Menu heading */}
              <div className="mt-10 shrink-0 sm:mt-14">
                <p
                  className="
                    font-serif
                    italic
                    text-[9px]
                    uppercase
                    tracking-[0.5em]
                    text-purple-300/80
                    sm:text-[10px]
                  "
                >
                  Explore
                </p>

                <h2
                  className="
                    mt-2
                    max-w-xl
                    font-serif
                    text-2xl
                    font-medium
                    italic
                    leading-tight
                    tracking-[0.08em]
                    text-white
                    sm:mt-3
                    sm:text-4xl
                  "
                >
                  Hajarah's Mikrokosmos
                </h2>
              </div>

              {/* Items */}
              <div
                className="
                  mt-8
                  flex
                  flex-col
                  border-y
                  border-purple-400/[0.08]
                  sm:mt-10
                "
              >
                {menuItems.map((item, index) => (
                  <motion.button
                    key={item.target}
                    initial={{ opacity: 0, x: -15 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{
                      duration: 0.45,
                      delay: 0.06 * index,
                    }}
                    onClick={() => scrollToSection(item.target)}
                    className="
                      group
                      flex
                      items-center
                      border-b
                      border-purple-400/[0.08]
                      py-4
                      text-left
                      last:border-b-0
                      sm:py-5
                    "
                  >
                    <span
                      className="
                        flex-1
                        text-base
                        font-light
                        tracking-[0.08em]
                        text-purple-200/55
                        transition-colors
                        duration-300
                        group-hover:text-purple-300/80
                        sm:text-xl
                        font-serif
                        italic
                      "
                    >
                      {item.label}
                    </span>
                  </motion.button>
                ))}
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}

export default Navbar