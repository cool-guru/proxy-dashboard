import React, {useState} from "react";

import QubeIcon from './assets/icons/qube.svg';
import QueeIcon from './assets/icons/quee.svg';
import DateIcon from './assets/icons/date-w.svg';
import './App.css'

function App (){

  const [sessionTime, setSessionTime] = useState(22); // Default session time

  const handleSliderChange = (e) => {
    setSessionTime(e.target.value);
  };

  return (
    <div className="min-h-screen bg-gray-100 p-5">
      <div className="py-4 px-5">
        <div className="flex justify-between items-center">
          <h1 className="text-xl font-bold">Generated Proxy</h1>
          <div>
            Need Support? 
            <button className="ml-1 text-white bg-blue-700 px-4 py-2 rounded-md">Contact Us</button>
          </div>
        </div>
        
        <div>
          Plan ID: 672576d20a6c581e87249045
        </div>
      </div>
      <section className="grid grid-cols-4 gap-6 px-7">
        <div className="bg-white p-4 rounded-lg shadow-md flex justify-between items-start">
          <div>
            <div className="bg-blue-500 text-white p-3 rounded-md flex items-center justify-center w-12 h-12">
              <img src={QubeIcon} alt="icon" className="w-6 h-6" />
            </div>

            <div className="mt-4">
              <p className="text-gray-500 text-sm">Current Plan</p>
              <p className="text-gray-900 font-bold text-lg">Residential 5GB</p>
            </div>
          </div>

          <button className="bg-gray-100 text-blue-500 text-sm font-medium px-4 py-2 rounded-md hover:bg-gray-200">
            Plan Settings &gt;
          </button>
        </div>

        <div className="bg-white p-4 rounded-lg shadow-md flex justify-between items-start">
          <div>
            <div className="bg-blue-500 text-white p-3 rounded-md flex items-center justify-center w-12 h-12">
              <img src={DateIcon} alt="icon" className="w-6 h-6" />
            </div>

            <div className="mt-4">
              <p className="text-gray-500 text-sm">Plan Expiry</p>
              <p className="text-gray-900 font-bold text-lg">31 Jun 2025 03:52</p>
            </div>
          </div>

          <button className="bg-gray-100 text-blue-500 text-sm font-medium px-4 py-2 rounded-md hover:bg-gray-200">
            Auto Renew &gt;
          </button>
        </div>

        {/* Card 3 */}
        <div className="col-span-2 bg-white p-4 rounded-lg shadow-md grid grid-cols-3 gap-2 items-center">
          {/* Left Section: Icon and Total Bandwidth */}
          <div className="flex items-start flex-col ml-5 mr-5">
            <div className="bg-blue-500 text-white rounded-md flex items-center justify-center w-12 h-12">
              <img src={QueeIcon} alt="icon" className="w-6 h-6" />
            </div>
            <div className="flex items-start flex-col mt-4">
              <p className="text-gray-500 text-sm">Total Bandwidth</p>
              <p className="text-gray-900 font-bold text-lg">5 GB</p>
            </div>
          </div>

          {/* Middle Section: Progress Circle */}
          <div className="flex col-span-2">
            <div className="flex flex-col items-center justify-center border-l border-blue-500 px-4">
              <div className="relative w-24 h-24 flex items-center justify-center">
                {/* Background Circle */}
                <svg className="absolute w-full h-full">
                  <circle
                    cx="50%"
                    cy="50%"
                    r="40%"
                    className="text-blue-200"
                    strokeWidth="8"
                    fill="none"
                    stroke="currentColor"
                  />
                </svg>

                {/* Progress Circle */}
                <svg className="absolute w-full h-full">
                  <circle
                    cx="50%"
                    cy="50%"
                    r="40%"
                    className="text-blue-500"
                    strokeWidth="8"
                    fill="none"
                    stroke="currentColor"
                    strokeDasharray="251.2" /* Circumference of the circle */
                    strokeDashoffset="66.3" /* 76% progress (calculated dynamically) */
                    strokeLinecap="round"
                    transform="rotate(-90 48 48)"
                  />
                </svg>

                {/* Center Text */}
                <span className="text-blue-500 font-bold text-lg">76%</span>
              </div>
            </div>

            {/* Right Section: Bandwidth Details and Add Bandwidth Form */}
            <div className="flex flex-col justify-cente space-y-4 band-block">
              {/* Bandwidth Details */}
              <div className="">
                <div className="flex items-center space-x-2 justify-between">
                  <div className="flex items-center">
                    <span className="w-2 h-2 bg-blue-500 rounded-full mr-1"></span>
                    <span className="text-gray-500 text-sm">Used Bandwidth</span>
                  </div>
                  <span className="text-gray-900 font-bold">1.2 GB</span>
                </div>
                <div className="flex items-center space-x-2 mt-2 justify-between">
                  <div className="flex items-center">
                    <span className="w-2 h-2 bg-gray-300 rounded-full mr-1"></span>
                    <span className="text-gray-500 text-sm">Remaining Bandwidth</span>
                  </div>
                  <span className="text-gray-900 font-bold">3.8 GB</span>
                </div>
              </div>

              {/* Add Bandwidth Form */}
              <div>
                <label htmlFor="bandwidth" className="text-gray-500 text-sm mb-2 block">
                  Add Bandwidth
                </label>
                <div className="flex items-center space-x-2 justify-between">
                  <div className="border rounded-md px-1">
                    <input
                      type="number"
                      id="bandwidth"
                      className="w-[130px] rounded-md px-2 py-1 text-gray-900"
                      placeholder="0"
                    />
                    <span className="text-blue-500 text-sm">GB</span>
                  </div>
                  <button className="bg-blue-500 text-white text-sm font-medium px-4 py-2 rounded-md hover:bg-blue-600">
                    Add &gt;
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>

      </section>
      <div className="py-4 px-5">
        <div className="flex justify-between items-center">
          <h1 className="text-xl font-bold">Configure Proxy</h1>
        </div>
        
        <div>
          Configure your proxy type, and whitelist
        </div>
      </div>
      <section className="grid grid-cols-2 gap-6 px-7">
        <div className="bg-white p-6 rounded-lg shadow-md">
          {/* Tabs */}
          <div className="flex items-center border-b mb-6 relative">
            <button className="py-2 px-6 text-blue-500 border-b-2 border-blue-500 font-medium">
              User Auth & Pass
            </button>
            <button className="py-2 px-6 text-gray-500 hover:text-gray-700">
              Whitelist IP
            </button>
            {/* Toggle Options */}
          <div className="flex items-center space-x-6 mb-6 absolute" style={{right: "10px"}} >
            <label className="flex items-center space-x-2">
              <input type="radio" name="proxy-type" className="form-radio text-blue-500" checked />
              <span className="text-gray-700">Standard</span>
            </label>
            <label className="flex items-center space-x-2">
              <input type="radio" name="proxy-type" className="form-radio text-blue-500" />
              <span className="text-gray-700">Regions</span>
            </label>
          </div>
          </div>

          

          {/* Form Section */}
          <div className="grid grid-cols-2 gap-6 mb-6">
            {/* Username */}
            <div className="flex flex-col">
              <label className="text-gray-500 text-sm mb-2">Username</label>
              <input
                type="text"
                className="border rounded-md px-4 py-2 text-gray-900"
                value="dnzkfhzjlkcobzp90166-zone-resi-region-de"
                readOnly
              />
            </div>

            {/* Password */}
            <div className="flex flex-col">
              <label className="text-gray-500 text-sm mb-2">Password</label>
              <input
                type="password"
                className="border rounded-md px-4 py-2 text-gray-900"
                value="lsusonhymn"
                readOnly
              />
            </div>

            {/* Country - State - City Button */}
            <div className="col-span-2 flex justify-end mb-6">
              <button className="bg-blue-500 text-white px-6 py-2 rounded-md hover:bg-blue-600">
                Country - State - City
              </button>
            </div>
          </div>

          {/* Country, State, City */}
          <div className="grid grid-cols-3 gap-6 mb-6">
            {/* Country */}
            <div className="flex flex-col">
              <label className="text-gray-500 text-sm mb-2">Country</label>
              <select className="border rounded-md px-4 py-2 text-gray-900">
                <option value="germany">Germany</option>
              </select>
            </div>

            {/* State */}
            <div className="flex flex-col">
              <label className="text-gray-500 text-sm mb-2">State</label>
              <input
                type="text"
                className="border rounded-md px-4 py-2 text-gray-900"
                value="Worldwide Mix"
                readOnly
              />
            </div>

            {/* City */}
            <div className="flex flex-col">
              <label className="text-gray-500 text-sm mb-2">City</label>
              <input
                type="text"
                className="border rounded-md px-4 py-2 text-gray-900"
                value="Worldwide Mix"
                readOnly
              />
            </div>
          </div>

          {/* Buttons */}
          <div className="flex justify-between">
            <button className="bg-blue-500 text-white px-6 py-2 rounded-md hover:bg-blue-600">
              API Generator &gt;
            </button>
            <button className="bg-blue-500 text-white px-6 py-2 rounded-md hover:bg-blue-600">
              Update Settings &gt;
            </button>
          </div>
        </div>
        <div className="bg-white p-6 rounded-lg shadow-md">
          {/* Section Header */}
          <h2 className="text-gray-700 font-medium text-lg mb-6 border-b pb-2">Proxy</h2>

          {/* Proxy Section */}
          <div className="grid grid-cols-2 gap-6 mb-6">
            {/* Host */}
            <div className="flex flex-col">
              <label className="text-gray-500 text-sm mb-2">Host</label>
              <input
                type="text"
                className="border rounded-md px-4 py-2 text-gray-900"
                value="resi-eu.lightningproxies.net"
                readOnly
              />
            </div>

            {/* Port */}
            <div className="flex flex-col">
              <label className="text-gray-500 text-sm mb-2">Port (HTTP & SOCKS5)</label>
              <input
                type="text"
                className="border rounded-md px-4 py-2 text-gray-900"
                value="9999"
                readOnly
              />
            </div>

            {/* Rotating Proxy */}
            <div className="col-span-2 flex flex-col">
              <label className="text-gray-500 text-sm mb-2">Rotating Proxy</label>
              <input
                type="text"
                className="border rounded-md px-4 py-2 text-gray-900"
                value="resi-eu.lightningproxies.net:9999:dnzkfhzjlkcobzp90166-zone-resi-region-de:lsusonhymn"
                readOnly
              />
            </div>

            {/* Sticky Sessions */}
            <div className="col-span-2 flex flex-col bg-gray-50 border p-4 rounded-lg">
              <label className="text-black text-sm mb-2 block">
                Sticky Sessions (Session time: {sessionTime} min)
              </label>
              <input
                type="range"
                min="1"
                max="60"
                value={sessionTime}
                onChange={handleSliderChange}
                className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer focus:outline-none"
                style={{
                  accentColor: "#3b82f6", // Blue color for the slider thumb
                }}
              />
            </div>

            {/* Sticky Count */}
            <div className="flex items-center">
              <label className="text-gray-500 text-sm mr-1">Sticky count:</label>
              <input
                type="text"
                className="border rounded-md px-2 py-1 text-gray-900"
                value="2000"
                readOnly
              />
            </div>
          </div>

          {/* Proxy List */}
          <div className="flex flex-col mb-4">
            <textarea
              rows="4"
              className="border rounded-md px-4 py-2 text-gray-900 overflow-auto"
              style={{ maxHeight: "100px" }} /* Adds scroll for overflow content */
              readOnly
              value={`resi-eu.lightningproxies.net:9999:dnzkfhzjlkcobzp90166-zone-resi-region-de-session-39HjvxVOacW-sessTime-22:lsusonhymn\nresi-eu.lightningproxies.net:9999:dnzkfhzjlkcobzp90166-zone-resi-region-de-session-gc8nJmvbJEVw-sessTime-22:lsusonhymn`}
            ></textarea>
          </div>

          {/* Save and Copy Buttons */}
          <div className="flex justify-between">
            <button className="text-blue-500 hover:underline flex items-center">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke-width="2"
                stroke="currentColor"
                class="w-5 h-5"
                style={{color: "#3b82f6"}} /* Set the color to blue */
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M12 4v16m0 0l-6-6m6 6l6-6"
                />
              </svg>
              Save as .txt
            </button>
            <button className="bg-blue-500 text-white px-6 py-2 rounded-md hover:bg-blue-600">
              Copy Proxies
            </button>
          </div>
        </div>
      </section>

    </div>
  );
};

export default App;
