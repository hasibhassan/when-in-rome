import React, { useState } from 'react'
import useDebounceMath from '../utils/useDebounceMath'

export default function MathInput() {
  const [type, setType] = useState<
    'addition' | 'subtraction' | 'multiplication' | 'division'
  >('addition')
  const [isFirstValid, setIsFirstValid] = useState(true)
  const [isSecondValid, setIsSecondValid] = useState(true)
  const [firstText, setFirstText] = useState('')
  const [secondText, setSecondText] = useState('')

  const handleSelectChange = (e: any) => {
    setType(e.target.value)
  }

  const handleFirstTextChange = (e: any) => {
    const isValid = e.target.checkValidity()
    setIsFirstValid(isValid)

    if (isValid) {
      setFirstText(e.target.value)
    } else {
      e.target.reportValidity()
    }
  }

  const handleSecondTextChange = (e: any) => {
    const isValid = e.target.checkValidity()
    setIsSecondValid(isValid)

    if (isValid) {
      setSecondText(e.target.value)
    } else {
      e.target.reportValidity()
    }
  }

  const result = useDebounceMath({
    type,
    valueOne: firstText,
    valueTwo: secondText,
  })

  return (
    <div>
      <label className="block text-sm font-medium text-gray-700">
        Roman Math
      </label>
      <div className="relative mt-1 rounded-md  shadow-sm">
        <div className="absolute inset-y-0 left-0 flex items-center">
          <select
            id="conversion"
            name="conversion"
            onChange={handleSelectChange}
            className="h-full rounded-md border-transparent bg-transparent py-0 pl-3 pr-7 text-gray-500 focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
          >
            <option value="addition">Addition</option>
            <option value="subtraction">Subtraction</option>
            <option value="multiplication">Multiplication</option>
            <option value="division">Division</option>
          </select>
        </div>
        <input
          type="text"
          name="text"
          id="text"
          value={firstText}
          onChange={handleFirstTextChange}
          aria-invalid={!isFirstValid}
          pattern="[MDCLXVI]+"
          className={
            isFirstValid
              ? 'block w-full rounded-md rounded-b-none border-gray-300 pl-36 focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm'
              : 'block w-full rounded-md rounded-b-none border-gray-300 pl-36 focus:border-red-500 focus:ring-red-500 sm:text-sm'
          }
          placeholder={'E.g. "IV"'}
        />
      </div>
      <div>
        <input
          type="text"
          name="job-title"
          id="job-title"
          value={secondText}
          onChange={handleSecondTextChange}
          aria-invalid={!isSecondValid}
          className={
            isSecondValid
              ? 'block w-full rounded-md rounded-t-none border-gray-300 pl-36 focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm'
              : 'block w-full rounded-md rounded-t-none border-gray-300 pl-36 focus:border-red-500 focus:ring-red-500 sm:text-sm'
          }
          pattern="[MDCLXVI]+"
          placeholder={'E.g. "IV"'}
        />
      </div>
      <div>
        {secondText !== '' ? `Roman Numeral: ${result.roman}` : secondText}
      </div>
      <div>{secondText !== '' ? `Number: ${result.number}` : secondText}</div>
    </div>
  )
}
