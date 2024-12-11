import React, { useState, useEffect } from 'react';

function AdminSettings() {
  const [settings, setSettings] = useState({
    websiteName: '',
    tagline: '',
    metaDescription: '',
    defaultCurrency: 'USD',
    timeZone: 'UTC',
    contactEmail: '',
    phoneNumber: '',
    address: '',
    socialMediaLinks: '',
  });

  const [message, setMessage] = useState('');
  const [loading, setLoading] = useState(true);

  // Simulate fetching initial settings data
  useEffect(() => {
    setLoading(true);
    setTimeout(() => {
      // Simulated API response
      const fetchedSettings = {
        websiteName: 'Ornaments',
        tagline: 'Celebrate Every Moment with Elegance.',
        metaDescription: 'Discover timeless ornaments that blend tradition and modern elegance. Shop stunning necklaces, rings, bangles, and more for every occasion.',
       //  defaultCurrency: 'USD',
       //  timeZone: 'UTC',
        contactEmail: 'ornsments@gmail.com',
        phoneNumber: '+1 234 567 890',
        address: 'ornaments, Pune 411025',
        socialMediaLinks: ' ',
      };
      setSettings(fetchedSettings);
      setLoading(false);
    }, 1000);
  }, []);

  // Handle input changes
  const handleChange = (field, value) => {
    setSettings((prev) => ({
      ...prev,
      [field]: value,
    }));
  };

  // Simulate saving settings
  const handleSave = (section) => {
    setMessage(`Saving ${section} settings...`);
    setTimeout(() => {
      setMessage(`${section} settings saved successfully!`);
    }, 1000);
  };

  if (loading) {
    return (
      <div className="flex justify-center items-center h-screen">
        <p className="text-xl text-gray-600">Loading settings...</p>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-100 py-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Page Header */}
        

        {/* Display Save Messages */}
        {message && (
          <div className="mb-4 p-4 bg-blue-100 text-blue-700 rounded-lg">{message}</div>
        )}

        {/* General Settings Section */}
        <section className="bg-white shadow-md rounded-lg p-6 mb-8">
          <h2 className="text-2xl font-semibold text-gray-800">General Settings</h2>
          <form
            className="space-y-4 mt-4"
            onSubmit={(e) => {
              e.preventDefault();
              handleSave('General');
            }}
          >
            <div>
              <label className="block text-gray-700 font-medium">Website Name</label>
              <input
                type="text"
                value={settings.websiteName}
                onChange={(e) => handleChange('websiteName', e.target.value)}
                className="mt-1 block w-full border border-gray-300 rounded-lg p-2 shadow-sm focus:ring-blue-500 focus:border-blue-500"
              />
            </div>
            <div>
              <label className="block text-gray-700 font-medium">Tagline</label>
              <input
                type="text"
                value={settings.tagline}
                onChange={(e) => handleChange('tagline', e.target.value)}
                className="mt-1 block w-full border border-gray-300 rounded-lg p-2 shadow-sm focus:ring-blue-500 focus:border-blue-500"
              />
            </div>
            <div>
              <label className="block text-gray-700 font-medium">Meta Description</label>
              <textarea
                rows="3"
                value={settings.metaDescription}
                onChange={(e) => handleChange('metaDescription', e.target.value)}
                className="mt-1 block w-full border border-gray-300 rounded-lg p-2 shadow-sm focus:ring-blue-500 focus:border-blue-500"
              ></textarea>
            </div>
            
            <button
              type="submit"
              className="px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700"
            >
              Save Changes
            </button>
          </form>
        </section>

        {/* Contact Information Section */}
        <section className="bg-white shadow-md rounded-lg p-6 mb-8">
          <h2 className="text-2xl font-semibold text-gray-800">Contact Information</h2>
          <form
            className="space-y-4 mt-4"
            onSubmit={(e) => {
              e.preventDefault();
              handleSave('Contact Information');
            }}
          >
            <div>
              <label className="block text-gray-700 font-medium">Contact Email</label>
              <input
                type="email"
                value={settings.contactEmail}
                onChange={(e) => handleChange('contactEmail', e.target.value)}
                className="mt-1 block w-full border border-gray-300 rounded-lg p-2 shadow-sm focus:ring-blue-500 focus:border-blue-500"
              />
            </div>
            <div>
              <label className="block text-gray-700 font-medium">Phone Number</label>
              <input
                type="text"
                value={settings.phoneNumber}
                onChange={(e) => handleChange('phoneNumber', e.target.value)}
                className="mt-1 block w-full border border-gray-300 rounded-lg p-2 shadow-sm focus:ring-blue-500 focus:border-blue-500"
              />
            </div>
            <div>
              <label className="block text-gray-700 font-medium">Address</label>
              <textarea
                rows="2"
                value={settings.address}
                onChange={(e) => handleChange('address', e.target.value)}
                className="mt-1 block w-full border border-gray-300 rounded-lg p-2 shadow-sm focus:ring-blue-500 focus:border-blue-500"
              ></textarea>
            </div>
            <div>
              <label className="block text-gray-700 font-medium">Social Media Links</label>
              <input
                type="text"
                value={settings.socialMediaLinks}
                onChange={(e) => handleChange('socialMediaLinks', e.target.value)}
                className="mt-1 block w-full border border-gray-300 rounded-lg p-2 shadow-sm focus:ring-blue-500 focus:border-blue-500"
              />
            </div>
            <button
              type="submit"
              className="px-4 py-2 bg-green-600 text-white rounded-md hover:bg-green-700"
            >
              Save Changes
            </button>
          </form>
        </section>

        {/* Add other sections like Homepage Configuration, Payment, etc., dynamically */}
      </div>
    </div>
  );
}

export default AdminSettings;
