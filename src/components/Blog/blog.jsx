import React from "react";
import Choco from '../../img/choco.jpg'
import Pasta from '../../img/pasta.jpg'
import Wrap from '../../img/wrap.jpg'
import { Link } from 'react-router-dom'

export default function Blog() {
  return (
    <div className="relative bg-white w-full min-h-screen overflow-hidden z-0 p-20">
      {/* Top gradient */}
      <div
        aria-hidden="true"
        className="absolute inset-x-0 -top-40 -z-10 transform-gpu overflow-hidden blur-3xl sm:-top-80"
      >
        <div
          style={{
            clipPath:
              "polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)",
          }}
          className="relative left-1/2 -z-10 aspect-[1155/678] w-[36rem] max-w-none -translate-x-1/2 rotate-30 bg-gradient-to-tr from-cyan-400 to-cyan-600 opacity-25 sm:left-[calc(50%-40rem)] sm:w-[72rem]"
        />
      </div>

      <div className="mx-auto max-w-2xl text-center m-10">
        <h2 className="text-4xl font-semibold tracking-tight text-balance text-[#222] sm:text-5xl">
          Today's Recipes
        </h2>
        <p className="mt-2 text-lg/8 text-gray-600">
          Most popular Picks for today!
        </p>
      </div>

      {/* Cards Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 z-10 items-stretch flex items-center justify-center">
        {/* Card 1 */}
        <div className="relative flex flex-col justify-between border border-gray-300 rounded-2xl bg-white p-6 shadow-md transition-all duration-500" data-aos="flip-left">
          <div className="block overflow-hidden rounded-xl">
            <img
              src={Choco}
              alt="Card image"
              className="w-full"
            />
          </div>
          <h4 className="text-lg font-semibold text-black mb-2 mt-4 capitalize">
            Chocolate Lava Cake
          </h4>
          <p className="text-sm text-gray-700 leading-5 mb-5">
            Rich, warm, and oozing with molten bliss
          </p>

          <Link to="https://preppykitchen.com/molten-chocolate-cake/#recipe">
          <button className="bg-cyan-600 shadow-sm rounded-full py-2 px-5 text-xs text-white font-semibold hover:bg-cyan-500 transition">
            Get the recipe
          </button>
          </Link>
          
        </div>

        {/* Card 2 (Bigger Middle Card) */}
        <div className="relative flex flex-col justify-between border border-gray-300 rounded-2xl bg-white p-8 shadow-lg transition-all duration-500 scale-105" data-aos="flip-left" data-aos-delay="400">
          <div className="block overflow-hidden rounded-xl">
            <img
              src={Pasta}
              alt="Card image"
              className="w-full"
            />
          </div>
          <h4 className="text-xl font-bold text-black mb-3 mt-5 capitalize">
            Creamy Pesto Chicken Pasta
          </h4>
          <p className="text-base text-gray-700 leading-6 mb-6">
            A silky blend of pesto and tender chicken
          </p>

          <Link to="https://www.budgetbytes.com/one-pot-creamy-pesto-chicken-pasta/">
          <button className="bg-cyan-600 shadow-sm rounded-full py-2 px-5 text-xs text-white font-semibold hover:bg-cyan-500 transition">
            Get the recipe
          </button>
          </Link>
        </div>

        {/* Card 3 */}
        <div className="relative flex flex-col justify-between border border-gray-300 rounded-2xl bg-white p-6 shadow-md transition-all duration-500" data-aos="flip-left" data-aos-delay="800">
          <div className="block overflow-hidden rounded-xl">
            <img
              src={Wrap}
              alt="Card image"
              className="w-full"
            />
          </div>
          <h4 className="text-lg font-semibold text-black mb-2 mt-4 capitalize">
            Greek Gyro Wraps
          </h4>
          <p className="text-sm text-gray-700 leading-5 mb-5">
            Fresh, zesty, and wrapped in Mediterranean flavor
          </p>
          
          <Link to="https://realgreekrecipes.com/chicken-gyros-recipe/#recipe">
          <button className="bg-cyan-600 shadow-sm rounded-full py-2 px-5 text-xs text-white font-semibold hover:bg-cyan-500 transition">
            Get the recipe
          </button>
          </Link>
        </div>
      </div>

      {/* Bottom gradient fade */}
      <div
        aria-hidden="true"
        className="absolute inset-x-0 top-[calc(100%-13rem)] -z-10 transform-gpu overflow-hidden blur-3xl sm:top-[calc(100%-30rem)]"
      >
        <div
          style={{
            clipPath:
              "polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)",
          }}
          className="relative left-[calc(50%+3rem)] aspect-[1155/678] w-[36rem] -translate-x-1/2 bg-gradient-to-tr from-cyan-400 to-cyan-600 opacity-30 sm:left-[calc(50%+36rem)] sm:w-[72rem]"
        />
      </div>
    </div>
  );
}
