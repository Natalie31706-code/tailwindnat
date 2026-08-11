import React from "react";
import About from '../../img/about.jpg'

const stats = [
  { name: 'Teams worldwide', value: '12' },
  { name: 'Full-time colleagues', value: '300+' },
  { name: 'Recipes per week', value: '21' },
  { name: 'Paid time off', value: 'Unlimited' },
]

export default function Aboutt() {
  return (
    <div className="relative isolate overflow-hidden bg-white py-24 sm:py-32">
      <img
        alt=""
        src={About}
        className="absolute inset-0 -z-10 size-full object-cover object-right opacity-10 md:object-center"
      />
      <div
        aria-hidden="true"
        className="hidden sm:absolute sm:-top-10 sm:right-1/2 sm:-z-10 sm:mr-10 sm:block sm:transform-gpu sm:blur-3xl"
      >
        <div
          style={{
            clipPath:
              'polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)',
          }}
          className="aspect-1097/845 w-274.25 bg-linear-to-tr from-[#ff4694] to-[#776fff] opacity-15"
        />
      </div>
      <div
        aria-hidden="true"
        className="absolute -top-52 left-1/2 -z-10 -translate-x-1/2 transform-gpu blur-3xl sm:-top-112 sm:ml-16 sm:translate-x-0"
      >
        <div
          style={{
            clipPath:
              'polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)',
          }}
          className="aspect-1097/845 w-274.25 bg-linear-to-tr from-[#ff4694] to-[#776fff] opacity-15"
        />
      </div>
      <div className="flex flex-col lg:flex-row items-center gap-10">
      <div className="mx-auto max-w-7xl px-6 lg:px-8 pt-15">
        <div className="mx-auto max-w-2xl lg:mx-0">
          <h2 className="text-5xl font-semibold tracking-tight text-gray-900 sm:text-7xl">About us</h2>
          <p className="mt-8 text-lg font-medium text-pretty text-gray-700 sm:text-xl/8">
            We believe that food isn't just about eating—it's about creating moments, sharing love, and exploring cultures. That's why we share a new recipe every day, mixing trendy ideas with timeless classics from around the world.
            <br />
            <br />
            Whether you're a beginner cook or a passionate foodie, our goal is to make cooking simple, fun, and exciting. Every recipe is carefully picked to help you try something new, impress your loved ones, or just enjoy a comforting meal at home.
          </p>
        </div>

        <div className="flex justify-center lg:justify-end mt-10" data-aos="zoom-out" data-aos-duration="1500">
            <img src={About} alt="Recipe" className="max-w-sm rounded-lg shadow-lg" />
        </div>
        </div>

      </div>
      <div className="mx-10 mt-10 max-w-2xl lg:mx-0 lg:max-w-none flex justify-around align-center">
        <dl className="mt-16 grid grid-cols-1 gap-8 sm:mt-20 sm:grid-cols-2 lg:grid-cols-4">
            {stats.map((stat) => (
            <div key={stat.name} className="flex flex-col-reverse gap-1" data-aos="flip-up" data-aos-delay="300">
                <dt className="text-base leading-7 text-gray-700">{stat.name}</dt>
                <dd className="text-4xl font-semibold tracking-tight text-gray-900">{stat.value}</dd>
            </div>
            ))}
        </dl>
    </div>

    </div>
  )
}
