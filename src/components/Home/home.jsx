import React from 'react'
import { Link } from 'react-router-dom'
import Book from '../../img/images.jpeg'

export default function Home() {
  return (
    <div className="relative bg-white w-full min-h-screen overflow-visible flex justify-center items-center text-black">
      <div className="relative isolate px-6 pt-14 lg:px-8">
        {/* Top Gradient */}
        <div
          aria-hidden="true"
          className="absolute inset-x-0 -top-40 -z-10 transform-gpu overflow-hidden blur-3xl sm:-top-80"
        >
          <div
            style={{
              clipPath:
                'polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)',
            }}
            className="relative left-[calc(50%-11rem)] aspect-[1155/678] w-[36rem] -translate-x-1/2 rotate-[30deg] bg-gradient-to-tr from-cyan-300 to-cyan-500 opacity-30 sm:left-[calc(50%-30rem)] sm:w-[72rem]"
          />
        </div>

        {/* Flex wrapper for image + content */}
        <div className="flex flex-col lg:flex-row items-center gap-10 pt-10">
          
          {/* Text Content */}
          <div className="max-w-2xl text-center lg:text-left">
            <div className="hidden sm:mb-8 sm:flex sm:justify-center lg:justify-start">
              <div className="relative rounded-full px-3 py-1 text-sm text-gray-600 ring-1 ring-black/10 hover:ring-black/20" data-aos="fade-right" data-aos-delay="800">
                Check out more of amazing recipies{' '}
                <Link to="/blog" className="font-semibold text-cyan-600">
                  <span aria-hidden="true" className="absolute inset-0" />
                  Let's Go! <span aria-hidden="true">&rarr;</span>
                </Link>
              </div>
            </div>
            <h1 className="text-5xl font-semibold tracking-tight sm:text-7xl" data-aos="fade-right">
              Are you looking for the perfect recipe for the day?
            </h1>
            <p className="mt-8 text-lg font-medium text-gray-700 sm:text-xl" data-aos="fade-right" data-aos-delay="800">
              Then you came to the right place! New trendy and traditional Recipes from all over the world that will spark your day 🧂
            </p>
            <div className="mt-10 flex items-center justify-center lg:justify-start gap-x-6" data-aos="fade" data-aos-once="true">
              <Link
                to="/blog"
                className="rounded-md bg-cyan-500 px-3.5 py-2.5 text-sm font-semibold text-white shadow hover:bg-cyan-400 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-cyan-500"
              >
                Get started
              </Link>
              <Link to="/about" className="text-sm font-semibold text-cyan-600">
                Learn more about us <span aria-hidden="true">→</span>
              </Link>
            </div>
          </div>

          {/* Image beside text */}
          <div className="flex justify-center lg:justify-end" data-aos="zoom-out" data-aos-duration="1500">
            <img src={Book} alt="Recipe" className="w-md rounded-lg shadow-lg mb-10" />
          </div>
          </div>

        {/* Bottom Gradient */}
        <div
          aria-hidden="true"
          className="absolute inset-x-0 bottom-0 -z-10 transform-gpu overflow-hidden blur-3xl"
        >
          <div
            style={{
              clipPath:
                'polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)',
            }}
            className="relative left-1/2 aspect-[1155/678] w-[36rem] -translate-x-1/2 bg-gradient-to-tr from-cyan-300 to-cyan-500 opacity-30 sm:w-[72rem]"
          />
        </div>
      </div>
    </div>
  )
}
