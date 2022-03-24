import React, { useState } from 'react'
import useDebounce from '../utils/useDebounce'

export default function Input() {
  const [type, setType] = useState<'roman' | 'number'>('roman')
  const [value, setValue] = useState('')
  const [isValid, setIsValid] = useState(true)

  const handleSelectChange = (e: any) => {
    setType(e.target.value)
    setValue('')
  }

  const handleTextChange = (e: any) => {
    const isValid = e.target.checkValidity()
    setIsValid(isValid)

    if (isValid) {
      setValue(e.target.value)
    } else {
      e.target.reportValidity()
    }
  }

  const result = useDebounce({ type, value })

  return (
    <div>
      <label className="block text-sm font-medium text-gray-700">
        Roman Numeral Conversions
      </label>
      <div className="relative mt-1 rounded-md shadow-sm">
        <div className="absolute inset-y-0 left-0 flex items-center">
          <select
            id="conversion"
            name="conversion"
            onChange={handleSelectChange}
            className="h-full rounded-md border-transparent bg-transparent py-0 pl-3 pr-7 text-gray-500 focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
          >
            <option value="roman">To number</option>
            <option value="number">To roman</option>
          </select>
        </div>
        <input
          type="text"
          name="text"
          id="text"
          value={value}
          onChange={handleTextChange}
          aria-invalid={!isValid}
          pattern={type === 'roman' ? '[MDCLXVI]+' : '[0-9]+'}
          className={
            isValid
              ? 'block w-full rounded-md border-gray-300 pl-32 focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm'
              : 'block w-full rounded-md border-gray-300 pl-32 focus:border-red-500 focus:ring-red-500 sm:text-sm'
          }
          placeholder={type === 'roman' ? 'E.g. "IV"' : 'E.g. 567'}
        />
      </div>
      <h1>{value !== '' ? `Result: ${result}` : value}</h1>
    </div>
  )
}
