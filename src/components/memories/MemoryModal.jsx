import { AnimatePresence, motion } from "framer-motion"

function MemoryModal({ memory, onClose }) {
  return (
    <AnimatePresence>
      {memory && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="
            fixed
            inset-0
            z-[200]
            flex
            items-center
            justify-center
            overflow-y-auto
            bg-black/90
            px-5
            py-8
            backdrop-blur-md
            sm:px-8
          "
          onClick={onClose}
        >
          <motion.div
            initial={{
              opacity: 0,
              scale: 0.94,
              y: 20,
            }}
            animate={{
              opacity: 1,
              scale: 1,
              y: 0,
            }}
            exit={{
              opacity: 0,
              scale: 0.94,
              y: 20,
            }}
            transition={{ duration: 0.4 }}
            onClick={(event) => event.stopPropagation()}
            className="
              relative
              w-full
              max-w-4xl
              overflow-hidden
              rounded-2xl
              border
              border-purple-400/20
              bg-[#09060d]
              shadow-[0_30px_100px_rgba(0,0,0,0.7)]
            "
          >
            {/* Close */}
            <button
              onClick={onClose}
              className="
                absolute
                right-4
                top-4
                z-20
                flex
                h-10
                w-10
                items-center
                justify-center
                rounded-full
                border
                border-white/10
                bg-black/50
                text-sm
                text-white/60
                backdrop-blur-md
                transition-all
                duration-300
                hover:border-purple-400/40
                hover:text-white
              "
              aria-label="Close memory"
            >
              ✕
            </button>

            {/* Media */}
            <div className="relative flex max-h-[75vh] items-center justify-center bg-black">
              {memory.type === "video" ? (
                <video
                  src={memory.src}
                  autoPlay
                  loop
                  muted
                  playsInline
                  controls
                  className="
                    max-h-[75vh]
                    w-full
                    object-contain
                  "
                />
              ) : (
                <img
                  src={memory.src}
                  alt=""
                  className="
                    max-h-[75vh]
                    w-full
                    object-contain
                  "
                />
              )}
            </div>

            {/* Caption */}
            <div className="border-t border-purple-400/[0.08] px-6 py-5 sm:px-8">
              <p className="text-[10px] uppercase tracking-[0.3em] text-purple-300/40">
                Memory {String(memory.id).padStart(2, "0")}
              </p>

              <p className="mt-2 text-sm leading-6 text-white/55">
                {memory.caption}
              </p>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}

export default MemoryModal