import React from "react";
import { useState } from "react";

const navigateToLogin = async (event) => {
  event.preventDefault();
  window.location.href = "/login";
};

const navigateToSignUp = async (event) => {
  event.preventDefault();
  window.location.href = "/signup";
};

const LandingPage = () => {
  return (
    <div className="bg-black overflow-hidden">
      <main className="overflow-hidden">
        {/* Hero section */}
        <div className="relative isolate overflow-hidden h-screen  bg-gray-900 pb-16 pt-40 sm:pb-40">
          <div className="absolute inset-0 overflow-hidden -z-10">
            <div className="absolute w-full ml-96 h-[150%]  rotate-[25deg] origin-bottom-right bg-gradient-to-b from-white to-transparent opacity-75"></div>
          </div>
          <div className="absolute inset-0 -z-20 h-full w-full object-cover bg-black opacity-60"></div>
          <img
            src="https://heroku-resources.s3.amazonaws.com/LandingPageBG.jpg"
            alt=""
            className="absolute inset-0 -z-30 h-full w-full object-cover"
          />
          <div className="relative z-50 mx-auto ml-0 mt-20 my-auto lg:px-24  ">
            <div className="mx-auto  ml-10  relative flex flex-row justify-between">
              <div className="w-fit mt-0">
                <h1 className="font-bold text-9xl italic tracking-tight text-white sm:text-6xl">
                  Top Tier
                </h1>
                <p className="mt-20 text-4xl italic leading-8 text-gray-300">
                  Power up
                </p>
              </div>
              <div className="flex flex-col w-fit mt-60 z-20 space-y-4 pr-48">
                <button
                  type="button"
                  className="rounded-full bg-white px-25 py-2.5 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50"
                  onClick={navigateToLogin}
                >
                  Sign In
                </button>
                <button
                  type="button"
                  className="rounded-full bg-white px-24 py-2.5 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50"
                  onClick={navigateToSignUp}
                >
                  Sign Up
                </button>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default LandingPage;
