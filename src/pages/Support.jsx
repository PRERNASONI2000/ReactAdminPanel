import React from "react";

const Support = () => {
  return (
    <div className="w-full p-6">

      {/* Page Header */}
      <div className="mb-6">
        <h2 className="text-2xl font-semibold text-gray-800">Support Center</h2>
        <p className="text-sm text-gray-500">
          Need help? Submit your query and we will get back to you.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">

        {/* Contact Info Card */}
        <div className="bg-base-100 p-6 rounded-xl shadow">
          <h3 className="font-semibold mb-4">Contact Info</h3>

          <div className="space-y-4 text-sm text-gray-600">
            <p>📧 support@adminpanel.com</p>
            <p>📞 +91 98765 43210</p>
            <p>📍 Jaipur, Rajasthan</p>
          </div>

          <button className="btn btn-primary w-full mt-5">
            Live Chat
          </button>
        </div>

        {/* Support Form */}
        <div className="lg:col-span-2 bg-base-100 p-6 rounded-xl shadow">

          <h3 className="font-semibold mb-4">Submit a Ticket</h3>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">

            <div>
              <label className="text-sm text-gray-500">Full Name</label>
              <input 
                type="text"
                placeholder="Enter your name"
                className="input input-bordered w-full mt-1"
              />
            </div>

            <div>
              <label className="text-sm text-gray-500">Email</label>
              <input 
                type="email"
                placeholder="Enter your email"
                className="input input-bordered w-full mt-1"
              />
            </div>

            <div>
              <label className="text-sm text-gray-500">Subject</label>
              <input 
                type="text"
                placeholder="Enter subject"
                className="input input-bordered w-full mt-1"
              />
            </div>

            <div>
              <label className="text-sm text-gray-500">Priority</label>
              <select className="select select-bordered w-full mt-1">
                <option>Low</option>
                <option>Medium</option>
                <option>High</option>
                <option>Urgent</option>
              </select>
            </div>

          </div>

          <div className="mt-4">
            <label className="text-sm text-gray-500">Message</label>
            <textarea 
              rows="4"
              placeholder="Describe your issue..."
              className="textarea textarea-bordered w-full mt-1"
            ></textarea>
          </div>

          <div className="mt-6 text-right">
            <button className="btn btn-primary px-6">
              Submit Ticket
            </button>
          </div>

        </div>

      </div>

      {/* FAQ Section */}
      <div className="mt-8 bg-base-100 p-6 rounded-xl shadow">
        <h3 className="font-semibold mb-4">Frequently Asked Questions</h3>

        <div className="space-y-3">

          <div className="collapse collapse-arrow bg-base-200 rounded-lg">
            <input type="checkbox" />
            <div className="collapse-title font-medium">
              How do I reset my password?
            </div>
            <div className="collapse-content text-sm text-gray-600">
              Go to settings → change password → save changes.
            </div>
          </div>

          <div className="collapse collapse-arrow bg-base-200 rounded-lg">
            <input type="checkbox" />
            <div className="collapse-title font-medium">
              How can I contact support?
            </div>
            <div className="collapse-content text-sm text-gray-600">
              You can submit a ticket using the form above or use live chat.
            </div>
          </div>

          <div className="collapse collapse-arrow bg-base-200 rounded-lg">
            <input type="checkbox" />
            <div className="collapse-title font-medium">
              How long does it take to get a response?
            </div>
            <div className="collapse-content text-sm text-gray-600">
              Usually within 24 working hours.
            </div>
          </div>

        </div>
      </div>

    </div>
  );
};

export default Support;
