import { useState, useEffect } from 'react'

const useDebounceMath = (value: any, wait = 400) => {
  const [debouncedValue, setDebouncedValue] = useState(value)

  const fetcher = async (obj: any) => {
    const { type, valueOne, valueTwo } = obj

    if (valueTwo !== '') {
      if (type === 'addition') {
        const resOne = await fetch('/api/tonumber', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({ roman: valueOne }),
        })

        const resTwo = await fetch('/api/tonumber', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({ roman: valueTwo }),
        })

        const dataOne = await resOne.json()
        const dataTwo = await resTwo.json()
        const sum = dataOne.number + dataTwo.number

        const finalSum = await fetch('/api/toroman', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({ number: sum }),
        })
        const finalSumData = await finalSum.json()

        setDebouncedValue({ roman: finalSumData.roman, number: sum })
      } else if (type === 'subtraction') {
        const resOne = await fetch('/api/tonumber', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({ roman: valueOne }),
        })

        const resTwo = await fetch('/api/tonumber', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({ roman: valueTwo }),
        })

        const dataOne = await resOne.json()
        const dataTwo = await resTwo.json()
        const sum = Math.abs(dataOne.number - dataTwo.number)

        const finalSum = await fetch('/api/toroman', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({ number: sum }),
        })
        const finalSumData = await finalSum.json()

        setDebouncedValue({ roman: finalSumData.roman, number: sum })
      } else if (type === 'division') {
        const resOne = await fetch('/api/tonumber', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({ roman: valueOne }),
        })

        const resTwo = await fetch('/api/tonumber', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({ roman: valueTwo }),
        })

        const dataOne = await resOne.json()
        const dataTwo = await resTwo.json()
        const sum = Math.round(dataOne.number / dataTwo.number)

        const finalSum = await fetch('/api/toroman', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({ number: sum }),
        })
        const finalSumData = await finalSum.json()

        setDebouncedValue({ roman: finalSumData.roman, number: sum })
      } else if (type === 'multiplication') {
        const resOne = await fetch('/api/tonumber', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({ roman: valueOne }),
        })

        const resTwo = await fetch('/api/tonumber', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({ roman: valueTwo }),
        })

        const dataOne = await resOne.json()
        const dataTwo = await resTwo.json()
        const sum = dataOne.number * dataTwo.number

        const finalSum = await fetch('/api/toroman', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({ number: sum }),
        })
        const finalSumData = await finalSum.json()

        setDebouncedValue({ roman: finalSumData.roman, number: sum })
      }
    }
  }

  useEffect(() => {
    const id = setTimeout(() => fetcher(value), wait)
    return () => clearTimeout(id)
  }, [value])

  return debouncedValue
}

export default useDebounceMath
