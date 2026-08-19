import { AnimatePresence, motion } from "framer-motion"

function LetterModal({ member, onClose }) {
  return (
    <AnimatePresence>
      {member && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.35 }}
          className="
            fixed
            inset-0
            z-[200]
            flex
            items-center
            justify-center
            overflow-hidden
            bg-[#050308]/70
            px-5
            py-8
            backdrop-blur-xl
          "
          onClick={onClose}
        >
          {/* Background glow */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.8 }}
            transition={{ duration: 0.7 }}
            className="
              pointer-events-none
              absolute
              left-1/2
              top-1/2
              h-[500px]
              w-[500px]
              -translate-x-1/2
              -translate-y-1/2
              rounded-full
              bg-purple-700/[0.08]
              blur-[120px]
            "
          />

          {/* Message card */}
          <motion.div
            initial={{
              opacity: 0,
              y: 25,
              scale: 0.94,
              rotateX: 6,
            }}
            animate={{
              opacity: 1,
              y: 0,
              scale: 1,
              rotateX: 0,
            }}
            exit={{
              opacity: 0,
              y: 20,
              scale: 0.94,
            }}
            transition={{
              duration: 0.5,
              ease: "easeOut",
            }}
            onClick={(event) => event.stopPropagation()}
            className="
              relative
              flex
              max-h-[78vh]
              w-full
              max-w-md
              flex-col
              overflow-hidden
              rounded-[1.75rem]
              border
              border-purple-400/20
              bg-[#0a0710]/95
              shadow-[0_30px_100px_rgba(0,0,0,0.7)]
            "
          >
            {/* Top glow */}
            <div
              className="
                pointer-events-none
                absolute
                left-1/2
                top-0
                h-48
                w-48
                -translate-x-1/2
                rounded-full
                bg-purple-700/[0.10]
                blur-[80px]
              "
            />

            {/* Close */}
            <button
              onClick={onClose}
              className="
                absolute
                right-4
                top-4
                z-20
                flex
                h-9
                w-9
                items-center
                justify-center
                rounded-full
                border
                border-white/10
                bg-white/[0.02]
                text-xs
                text-white/40
                transition-all
                duration-300
                hover:border-purple-400/30
                hover:bg-purple-500/[0.08]
                hover:text-white
              "
              aria-label="Close message"
            >
              ✕
            </button>

            {/* Scrollable content */}
            <div
              className="
                relative
                overflow-y-auto
                px-7
                py-9
                sm:px-10
                sm:py-11
                [scrollbar-width:none]
                [-ms-overflow-style:none]
                [&::-webkit-scrollbar]:hidden
              "
            >
              {/* Member */}
              <div className="text-center">
                <motion.div
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.5, delay: 0.15 }}
                  className="
                    font-serif
                    text-3xl
                    text-purple-200
                    drop-shadow-[0_0_15px_rgba(192,132,252,0.3)]
                  "
                >
                  {member.symbol}
                </motion.div>

                <motion.h2
                  initial={{ opacity: 0, y: 8 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.2 }}
                  className="
                    mt-4
                    text-sm
                    font-medium
                    tracking-[0.3em]
                    text-white
                  "
                >
                  {member.name}
                </motion.h2>

                <div className="mx-auto mt-5 h-px w-8 bg-purple-400/30" />
              </div>

              {/* Message */}
              <motion.div
                initial={{ opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.3 }}
                className="mt-8"
              >
                <h3
                  className="
                    font-serif
                    text-lg
                    italic
                    leading-7
                    text-purple-100/80
                    sm:text-xl
                  "
                >
                  {member.message.title}
                </h3>

                <div
                  className="
                    mt-6
                    space-y-5
                    text-sm
                    leading-7
                    text-purple-200/55
                    sm:text-[15px]
                    sm:leading-8
                  "
                >
                  {member.message.paragraphs.map((paragraph, index) => (
                    <motion.p
                      key={index}
                      initial={{ opacity: 0, y: 8 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{
                        duration: 0.5,
                        delay: 0.4 + index * 0.12,
                      }}
                    >
                      {paragraph}
                    </motion.p>
                  ))}
                </div>
              </motion.div>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}

export default LetterModal