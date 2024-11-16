'use client'
import React, { useState } from "react";

function AdCreationForm() {
  const [adText, setAdText] = useState("");

  return (
    <div className="flex flex-col lg:flex-row min-h-screen bg-gray-100">
      {/* Form Section */}
      <div className="flex-1 p-6 lg:p-8 bg-white shadow-lg rounded-lg lg:rounded-l-lg">
        <h2 className="text-2xl font-semibold text-gray-800 mb-6">Create a Website Traffic Ad</h2>

        {/* Ad Text */}
        <div className="mb-6">
          <label className="block text-gray-700 font-medium mb-2">Ad Text (required)</label>
          <textarea
            value={adText}
            onChange={(e) => setAdText(e.target.value)}
            placeholder="What's happening?"
            className="w-full h-32 p-4 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>

        {/* Only people you mention */}
        <div className="flex items-center mb-6">
          <input type="checkbox" id="mention-only" className="mr-3 h-5 w-5 text-blue-600" />
          <label htmlFor="mention-only" className="text-gray-700 text-sm">
            <span className="font-semibold">Only people you mention</span>
          </label>
        </div>

        {/* Website Details */}
        <div className="mb-6">
          <label className="block text-gray-700 font-medium mb-2">Website Details (required)</label>
          <button className="px-5 py-2 text-sm font-medium text-gray-700 bg-gray-200 rounded-lg hover:bg-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500">
            Add Media
          </button>
        </div>

        {/* Note */}
        <div className="text-blue-600 text-sm mb-6">
          <span className="font-semibold">NOTE:</span> Launching this ad will create a promoted-only Tweet. Learn more about promoted-only Tweets.
        </div>

        {/* Buttons */}
        <div className="flex justify-between mt-4">
          <button className="px-6 py-2 text-sm font-medium text-gray-700 bg-gray-200 rounded-lg hover:bg-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500">
            Back
          </button>
          <button className="px-6 py-2 text-sm font-medium text-white bg-blue-600 rounded-lg hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500">
            Next
          </button>
        </div>
      </div>

      {/* Preview Section */}
      <div className="w-full lg:w-1/3 p-6 lg:p-8 bg-white shadow-lg rounded-lg lg:rounded-r-lg mt-6 lg:mt-0 lg:ml-6">
        <h3 className="text-2xl font-semibold text-gray-800 mb-6">Preview</h3>
        <div className="border p-4 rounded-lg bg-gray-50">
          <p className="font-semibold text-gray-700">Deepanshu Prajapati</p>
          <p className="text-gray-500">@blockC_School</p>
          <p className="mt-4 text-gray-800">{adText || "What's happening?"}</p>
          <div className="mt-4 text-gray-500 text-sm">Promoted</div>
        </div>
      </div>
    </div>
  );
}

export default AdCreationForm;
