import type { NextPage } from 'next'
import Head from 'next/head'
import { useState } from 'react'
import { Tab } from '@headlessui/react'
import Input from '../components/Input'
import MathInput from '../components/MathInput'

function classNames(...classes: any) {
  return classes.filter(Boolean).join(' ')
}

const Home: NextPage = () => {
  let [categories] = useState({
    'Roman Numeral Conversions': true,
    'Roman Math': true,
  })

  return (
    <div className="mx-auto  bg-gradient-to-r from-cyan-500 to-blue-500 px-4 sm:px-6 lg:px-8">
      <Head>
        <title>When In Rome</title>
      </Head>
      <div className="mx-auto max-w-3xl">
        <div className="flex h-screen items-center justify-center">
          <div className="w-full max-w-md  px-2 py-16 sm:px-0">
            <Tab.Group>
              <Tab.List className="flex space-x-1 rounded-xl bg-blue-900/20 p-1">
                {Object.keys(categories).map((category) => (
                  <Tab
                    key={category}
                    className={({ selected }) =>
                      classNames(
                        'w-full rounded-lg py-2.5 text-sm font-medium leading-5 text-blue-700',
                        'ring-white ring-opacity-60 ring-offset-2 ring-offset-blue-400 focus:outline-none focus:ring-2',
                        selected
                          ? 'bg-white shadow'
                          : 'text-blue-100 hover:bg-white/[0.12] hover:text-white'
                      )
                    }
                  >
                    {category}
                  </Tab>
                ))}
              </Tab.List>
              <Tab.Panels className="mt-2">
                <Tab.Panel
                  className={classNames(
                    'rounded-xl bg-white p-3',
                    'ring-white ring-opacity-60 ring-offset-2 ring-offset-blue-400 focus:outline-none focus:ring-2'
                  )}
                >
                  <Input />
                </Tab.Panel>
                <Tab.Panel
                  className={classNames(
                    'rounded-xl bg-white p-3',
                    'ring-white ring-opacity-60 ring-offset-2 ring-offset-blue-400 focus:outline-none focus:ring-2'
                  )}
                >
                  <MathInput />
                </Tab.Panel>
              </Tab.Panels>
            </Tab.Group>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Home
