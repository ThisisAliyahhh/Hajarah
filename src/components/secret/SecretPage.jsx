import { motion } from "framer-motion"

function SecretPage() {
  return (
    <main className="relative min-h-[100svh] overflow-hidden bg-[#050308] px-6 text-white">
      {/* Soft purple atmosphere */}
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
          bg-purple-700/[0.06]
          blur-[120px]
          sm:h-[500px]
          sm:w-[500px]
        "
      />

      <section className="relative z-10 flex min-h-[100svh] items-center justify-center py-16 sm:py-20">
        <div className="w-full max-w-2xl">

          {/* Top symbol */}
          <motion.div
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1 }}
            className="
              text-center
              text-2xl
              text-purple-300
              drop-shadow-[0_0_15px_rgba(192,132,252,0.5)]
            "
          >
            ✦
          </motion.div>

          {/* Heading */}
          <div className="mt-7 text-center">
            <motion.p
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="
                font-serif
                text-[10px]
                italic
                uppercase
                tracking-[0.5em]
                text-purple-300/50
              "
            >
              From me to You
            </motion.p>

            <motion.h1
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.5 }}
              className="
                mt-3
                font-serif
                text-[clamp(1.5rem,3vw,2.2rem)]
                font-medium
                italic
                tracking-[0.08em]
                text-white/90
              "
            >
              EMERGENCY
            </motion.h1>
          </div>

          {/* Letter */}
          <motion.article
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.9 }}
            className="
              mt-5
              rounded-[2rem]
              border
              border-purple-400/[0.12]
              bg-purple-500/[0.025]
              p-7
              shadow-[0_20px_80px_rgba(0,0,0,0.3)]
              backdrop-blur-sm
              sm:mt-14
              sm:p-12
            "
          >
            <div className="font-serif text-sm leading-8 text-white/65 sm:text-base sm:leading-9">
              <p>
                You finally found the question and the answer. This is my way of getting back at you for making me choosing my font too and I genuinely had nothing in mind.
              </p>

              <p className="mt-1">
                Sooo... this is the emergency 🙃
                The suicide mission 🤭
              </p>
            </div>

            <div
              className="
                mt-7
                space-y-6
                font-serif
                text-sm
                leading-8
                text-white/50
                sm:text-base
                sm:leading-9
              "
            >
              <p>
                First, I want to say I am sorry for the misunderstanding.
                I still cannot believe that actually happened.
                I have replayed it in my head more times than
                I would like to admit, and honestly, after
                this, I am probably going to avoid any
                conversation that could somehow lead to it
                because I genuinely cannot handle it.
                So, it never happened. We are deleting the
                entire incident from existence. Thank you. 😭
              </p>

              <p>
                I am also sorry I was not there when you needed
                me the most. I thought about it. I really did.
                But I kept thinking you guys had already spoken,
                and I really hoped that it would not happen. I wish I had
                known for sure and I had done something better. 🥺
              </p>

              <p>
                So, I am going to say this once, and you can always
                come back here to read it if you want to hear it again.
              </p>

              <p className="text-white/70">
                I love you ❤️.
              </p>

              <p>
                I really do. I do not know how to express it
                properly, and it pains me sometimes because I
                wish I was better at saying things like this.
                But well... I am a tech girl. What can I say? 🙃
              </p>

              <p>
                I do not think I say it enough, but you mean a
                lot to me. More than I probably know how to put
                into words. Somewhere along the way, the random
                conversations, the stupid moments, the songs,
                the memories, even the books you recommended
                to me somehow became things I associate with
                you. And yes, I know it took me forever to read
                all of them. I loved every single one. 😭
              </p>

              <p>
                I am just really happy I finally got to make
                this for you. It took a lot longer than it
                probably should have, but I wanted to give you
                something that was actually made for you.
                The next one would be from scratch without Chat help but I really needed to make this now 💪🏽.
              </p>

              <p>
                And maybe one day, when I can actually afford
                it, I will give you the gift I know you really
                want. The BTS concert tickets. At least that is what I think it is. So until then,
                please accept this tiny corner of the internet.
              </p>

              <p>
                I also blocked you on Instagram and created an account on Weverse hoping to get a message from BTS themselves but they did not answer. But I guess the little seven will do.
              </p>

              <p>
                I think that is what I wanted this whole
                thing to say.
              </p>

              <p className="text-white/70">
                You left a mark.
              </p>

              <p>
                So anyway, happy birthday to the best thing
                that happened to me in Al-Hikamah.
              </p>

              <p>
                I hope nineteen is kind to you. I hope you
                experience so many good things that the bad
                ones eventually feel small. I hope you laugh
                a lot, find people who make life lighter, have sense and
                become everything you want to be.
              </p>

              <p>
                And if you ever forget how loved you are,
                come back here and read this again.
              </p>
            </div>

            {/* Closing */}
            <div className="mt-10 border-t border-purple-400/[0.08] pt-8">
              <p className="font-serif text-sm italic text-purple-300/70">
                Your Love,
              </p>

              <p
                className="
                  mt-2
                  font-['Allura']
                  text-3xl
                  text-purple-200/80
                "
              >
                Aliyah 🙈❤️
              </p>
            </div>
          </motion.article>
        </div>
      </section>
    </main>
  )
}

export default SecretPage