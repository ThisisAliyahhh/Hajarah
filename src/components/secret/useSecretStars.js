import { useState } from "react"

function useSecretStars(onComplete) {
  const [collected, setCollected] = useState([])

  const collectStar = (id) => {
    if (collected.includes(id)) return

    const updated = [...collected, id]

    setCollected(updated)

    if (updated.length === 7) {
      setTimeout(() => {
        onComplete()
      }, 900)
    }
  }

  return {
    collected,
    collectStar,
    isCollected: (id) => collected.includes(id),
  }
}

export default useSecretStars