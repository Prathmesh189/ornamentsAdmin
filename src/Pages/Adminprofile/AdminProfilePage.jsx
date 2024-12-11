import React, { useState } from 'react';
import { IoCameraSharp } from 'react-icons/io5';

const AdminProfilePage = () => {
  const [profileImage, setProfileImage] = useState(
    "https://tse3.mm.bing.net/th/id/OIP.4Sf5Qzlwrq-0iNoydcGW0wHaLH?rs=1&pid=ImgDetMain"
  );

  const [userData, setUserData] = useState({
    profileImage: profileImage,
    firstname: "John",
    lastname: "Doe",
    email: "johndoe@example.com",
    phonenumber: "+1 (555) 123-4567",
    address: "123 Main Street, Cityville",
    dob: "1990-01-01",
    role: "Administrator",
    active: true,
    biography: "Experienced administrator with a passion for customer service.",
  });

  const [isEditing, setIsEditing] = useState(false);
  const [editedData, setEditedData] = useState(userData);
  const [updateMessage, setUpdateMessage] = useState("");

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setProfileImage(reader.result);
        setEditedData((prevData) => ({ ...prevData, profileImage: reader.result }));
      };
      reader.readAsDataURL(file);
    }
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setEditedData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSaveChanges = () => {
    setUserData(editedData);
    setIsEditing(false);
    setUpdateMessage("Profile updated successfully!"); // Set update message
    setTimeout(() => setUpdateMessage(""), 3000); // Clear message after 3 seconds
  };

  const handleCancelEdit = () => {
    setEditedData(userData);
    setIsEditing(false);
  };

  return (
    <div className="container mx-auto">
      {updateMessage && ( // Conditionally render the message
          <div className="mb-4 p-2 bg-green-100 text-green-800 rounded-md">
            {updateMessage}
          </div>
        )}

      <div className="bg-white rounded-lg shadow-lg p-6">
        <h1 className="text-3xl font-semibold mb-4">Admin Profile</h1>
        
        <div className="flex items-center mb-6 relative">
        <div className="relative inline-block text-center ">
            {/* <img
              src={userData.profileImage}
              alt="Profile"
              className="h-20 w-20 rounded-full object-cover"
            /> */}
            {/* Dynamically update the image source */}
            <img
              src={isEditing ? profileImage : userData.profileImage}
              alt="Profile"
              className="h-20 w-20 rounded-full object-cover"
            />
            {/* <label
              htmlFor="file-input"
              className="absolute bottom-0 right-0 p-2 bg-gray-100 text-black rounded-full cursor-pointer"
            >
              <IoCameraSharp size={20} />
            </label> */}
             {isEditing && (
    <label
      htmlFor="file-input"
      className="absolute bottom-0 right-0 p-2 bg-gray-100 text-black rounded-full cursor-pointer"
    >
      <IoCameraSharp size={20} />
    </label>
  )}

            <input
              type="file"
              id="file-input"
              onChange={handleImageChange}
              accept="image/*"
              className="hidden"
            />
          </div>

          <div className="ml-4">
            <h2 className="text-xl font-semibold">
              {userData.firstname} {userData.lastname}
            </h2>
            <p className="text-gray-600">{userData.email}</p>
          </div>
        </div>


        <div className="border-t pt-4">
            <h3 className="text-lg font-semibold mb-2">Personal Information</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label className="text-gray-600">First Name</label>
                {isEditing ? (
                  <input
                    type="text"
                    name="firstname"
                    value={editedData.firstname}
                    onChange={handleInputChange}
                    className="w-full border p-2 rounded-md"
                  />
                ) : (
                  <p>{userData.firstname || "N/A"}</p>
                )}
              </div>
              <div>
                <label className="text-gray-600">Last Name</label>
                {isEditing ? (
                  <input
                    type="text"
                    name="lastname"
                    value={editedData.lastname}
                    onChange={handleInputChange}
                    className="w-full border p-2 rounded-md"
                  />
                ) : (
                  <p>{userData.lastname || "N/A"}</p>
                )}
              </div>
              <div>
                <label className="text-gray-600">Phone</label>
                {isEditing ? (
                  <input
                    type="text"
                    name="phonenumber"
                    value={editedData.phonenumber}
                    onChange={handleInputChange}
                    className="w-full border p-2 rounded-md"
                  />
                ) : (
                  <p>{userData.phonenumber || "N/A"}</p>
                )}
              </div>
              <div>
                <label className="text-gray-600">Address</label>
                {isEditing ? (
                  <input
                    type="text"
                    name="address"
                    value={editedData.address}
                    onChange={handleInputChange}
                    className="w-full border p-2 rounded-md"
                  />
                ) : (
                  <p>{userData.address || "N/A"}</p>
                )}
              </div>
              {/* Additional Fields */}
              <div>
                <label className="text-gray-600">Email</label>
                {isEditing ? (
                  <input
                    type="email"
                    name="email"
                    value={editedData.email}
                    onChange={handleInputChange}
                    className="w-full border p-2 rounded-md"
                  />
                ) : (
                  <p>{userData.email || "N/A"}</p>
                )}
              </div>
              <div>
                <label className="text-gray-600">Date of Birth</label>
                {isEditing ? (
                  <input
                    type="date"
                    name="dob"
                    value={editedData.dob}
                    onChange={handleInputChange}
                    className="w-full border p-2 rounded-md"
                  />
                ) : (
                  <p>{userData.dob || "N/A"}</p>
                )}
              </div>
            </div>
          </div>


      
      {/* Account Settings Section */}
      <div className="border-t pt-4 mt-4">
        <h3 className="text-lg font-semibold mb-2">Account Settings</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <p className="text-gray-600">Email:</p>
            {isEditing ? (
              <input
                type="text"
                name="email"
                value={editedData.email}
                onChange={handleInputChange}
                className="w-full border p-2 rounded-md"
              />
            ) : (
              <p className="text-black">{userData.email}</p>
            )}
          </div>

          <div>
            <p className="text-gray-600">Phone:</p>
            {isEditing ? (
              <input
                type="text"
                name="phonenumber"
                value={editedData.phonenumber}
                onChange={handleInputChange}
                className="w-full border p-2 rounded-md"
              />
            ) : (
              <p className="text-black">{userData.phonenumber}</p>
            )}
          </div>

          <div>
            <p className="text-gray-600">Address:</p>
            {isEditing ? (
              <input
                type="text"
                name="address"
                value={editedData.address}
                onChange={handleInputChange}
                className="w-full border p-2 rounded-md"
              />
            ) : (
              <p className="text-black">{userData.address}</p>
            )}
          </div>

          {/* Language Selection */}
          <div>
            <label className="text-gray-600">Language:</label>
            {isEditing ? (
              <select
                name="language"
                value={editedData.language}
                onChange={handleInputChange}
                className="w-full border p-2 rounded-md"
              >
                <option value="English">English</option>
                <option value="Spanish">Spanish</option>
                <option value="French">French</option>
                <option value="German">German</option>
              </select>
            ) : (
              <p>{userData.language}</p>
            )}
          </div>
        </div>
      </div>


        <div className="border-t pt-4 mt-4">
          <h3 className="text-lg font-semibold mb-2">Biography</h3>
          {isEditing ? (
            <textarea
              name="biography"
              value={editedData.biography}
              onChange={handleInputChange}
              className="w-full border p-2 rounded-md"
            />
          ) : (
            <p>{userData.biography || "No biography available."}</p>
          )}
        </div>

        <div className="border-t pt-4 mt-4">
          <h3 className="text-lg font-semibold mb-2">Role & Active Status</h3>
          <p>Role: {userData.role || "N/A"}</p>
          <p>Status: {userData.active ? "Active" : "Inactive"}</p>
        </div>

        <div className="mt-8 flex justify-center md:justify-end">
          {isEditing ? (
            <>
              <button
                onClick={handleSaveChanges}
                className="bg-green-500 text-white py-2 px-6 rounded-lg shadow hover:bg-green-600 transition"
              >
                Save Changes
              </button>
              <button
                onClick={handleCancelEdit}
                className="bg-red-500 text-white py-2 px-6 ml-4 rounded-lg shadow hover:bg-red-600 transition"
              >
                Cancel
              </button>
            </>
          ) : (
            <button
              onClick={() => setIsEditing(true)}
              className="bg-indigo-500 text-white py-2 px-6 rounded-lg shadow hover:bg-indigo-600 transition"
            >
              Edit Profile
            </button>
          )}
        </div>
      </div>
    </div>
  );
};

export default AdminProfilePage;
