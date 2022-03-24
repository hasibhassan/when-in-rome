import { useState, useEffect } from 'react'

export default function useDebounce(value: any, wait = 400) {
  const [debouncedValue, setDebouncedValue] = useState(value)

  const fetcher = async (obj: any) => {
    const { type, value } = obj

    if (value !== '') {
      if (type === 'roman') {
        const res = await fetch('/api/tonumber', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({ roman: value }),
        })

        const data = await res.json()

        setDebouncedValue(data.number)
      } else {
        const res = await fetch('/api/toroman', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({ number: value }),
        })

        const data = await res.json()

        setDebouncedValue(data.roman)
      }
    }
  }

  useEffect(() => {
    const id = setTimeout(() => fetcher(value), wait)
    return () => clearTimeout(id)
  }, [value])

  return debouncedValue
}
