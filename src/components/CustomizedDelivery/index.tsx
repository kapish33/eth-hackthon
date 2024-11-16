import React, { useState } from 'react';

const CampaignCustomization = () => {
  const [dailyBudget, setDailyBudget] = useState('');
  const [dateRange, setDateRange] = useState('');
  const [paymentMethod, setPaymentMethod] = useState(false); // Boolean to track if payment method is added

  return (
    <div className="flex flex-col md:flex-row space-y-6 md:space-y-0 md:space-x-6 p-6 bg-gray-50">
      {/* Left Side (Customization Options) */}
      <div className="w-full md:w-2/3 space-y-6">
        {/* Demographics Section */}
        <div className="p-4 bg-white shadow rounded">
          <h3 className="text-lg font-semibold">Demographics</h3>
          <p className="text-gray-500">Customize your demographics settings here.</p>
        </div>

        {/* Targeting Features Section */}
        <div className="p-4 bg-white shadow rounded">
          <h3 className="text-lg font-semibold">Targeting Features</h3>
          <p className="text-gray-500">Select targeting options to reach your audience better.</p>
        </div>

        {/* Budget & Schedule Section */}
        <div className="p-4 bg-white shadow rounded space-y-4">
          <h3 className="text-lg font-semibold">Budget & Schedule</h3>
          <label className="text-gray-500">Daily Budget</label>
          <div className="flex items-center space-x-2">
            <span className="text-gray-500">USD</span>
            <input
              type="number"
              className="border border-gray-300 rounded p-2 w-full"
              placeholder="50.00"
              value={dailyBudget}
              onChange={(e) => setDailyBudget(e.target.value)}
            />
          </div>
          <label className="text-gray-500">Date Range</label>
          <input
            type="text"
            className="border border-gray-300 rounded p-2 w-full"
            placeholder="YYYY-MM-DD to YYYY-MM-DD"
            value={dateRange}
            onChange={(e) => setDateRange(e.target.value)}
          />
        </div>

        {/* Payment Method Section */}
        <div className="p-4 bg-white shadow rounded space-y-4">
          <h3 className="text-lg font-semibold">Payment Method</h3>
          {!paymentMethod && <div className="text-red-500">You need to select a payment method</div>}
          <button
            className="w-full bg-gray-100 text-gray-700 rounded py-2"
            onClick={() => setPaymentMethod(true)} // Simulate adding a payment method
          >
            + Add Credit Card
          </button>
        </div>

        {/* Launch Button */}
        <div className="flex justify-end">
          <button className="bg-blue-500 text-white rounded px-6 py-2">Launch Campaign</button>
        </div>
      </div>

      {/* Right Side (Audience Summary) */}
      <div className="w-full md:w-1/3 bg-white shadow rounded p-4">
        <h3 className="text-lg font-semibold">Audience Summary</h3>
        <p className="text-2xl font-bold">23.5M - 25.9M</p>
        <p className="text-gray-500">Reach potential</p>
        <div className="mt-4">
          <h4 className="text-md font-semibold">Demographics</h4>
          <p className="text-gray-500">Gender: Any</p>
          <p className="text-gray-500">Age: Any</p>
          <p className="text-gray-500">Location: India</p>
        </div>
      </div>
    </div>
  );
};

export default CampaignCustomization;
