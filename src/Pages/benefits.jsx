import React, { useState } from "react";

function Benefits() {
  const [benefits, setBenefits] = useState([]); // State to store the list of benefits
  const [isModalOpen, setIsModalOpen] = useState(false); // Modal open/close state
  const [modalType, setModalType] = useState(""); // 'add' or 'edit'
  const [newBenefit, setNewBenefit] = useState(""); // New benefit input
  const [editingBenefit, setEditingBenefit] = useState(""); // Editing benefit input
  const [editingIndex, setEditingIndex] = useState(null); // Index of benefit being edited

  const handleOpenAddModal = () => {
    setModalType("add");
    setNewBenefit("");
    setIsModalOpen(true);
  };

  const handleOpenEditModal = (index) => {
    setModalType("edit");
    setEditingBenefit(benefits[index].text);
    setEditingIndex(index);
    setIsModalOpen(true);
  };

  const handleAddBenefit = () => {
    if (newBenefit.trim()) {
      setBenefits([...benefits, { text: newBenefit, _id: Date.now() }]);
      setIsModalOpen(false);
    }
  };

  const handleSaveEdit = () => {
    if (editingBenefit.trim()) {
      const updatedBenefits = [...benefits];
      updatedBenefits[editingIndex].text = editingBenefit;
      setBenefits(updatedBenefits);
      setIsModalOpen(false);
    }
  };

  const handleDeleteBenefit = (index) => {
    const updatedBenefits = benefits.filter((_, i) => i !== index);
    setBenefits(updatedBenefits);
  };

  return (
    <div className="bg-white flex-1 overflow-auto relative z-10 p-4 text-black">
      {/* Add Benefit Button */}
      <div className="mb-6 mt-8">
        <button
          onClick={handleOpenAddModal}
          className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-700 w-full sm:w-auto"
        >
          Add Benefit
        </button>
      </div>

      {/* List of Benefits */}
      <div>
        {benefits.length === 0 ? (
          <p>No benefits added yet.</p>
        ) : (
          <ul className="space-y-4">
            {benefits.map((benefit, index) => (
              <li
                key={benefit._id}
                className="flex flex-col sm:flex-row justify-between items-start sm:items-center border-b pb-2"
              >
                <span className="text-gray-700 w-full sm:w-3/4">
                  {benefit.text}
                </span>
                <div className="mt-4 flex justify-end space-x-2">
                  <button
                    onClick={() => handleOpenEditModal(index)}
                    className="bg-yellow-500 text-white px-3 py-1 rounded-md"
                  >
                    Edit
                  </button>
                  <button
                    onClick={() => handleDeleteBenefit(index)}
                    className="bg-red-500 text-white px-3 py-1 rounded-md"
                  >
                    Delete
                  </button>
                </div>
              </li>
            ))}
          </ul>
        )}
      </div>

      {/* Modal for Adding/Editing Benefit */}
      {isModalOpen && (
        <div className="fixed inset-0 bg-gray-900 bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white rounded-lg shadow-lg p-6 w-11/12 sm:w-1/2">
            <h2 className="text-lg font-bold mb-4">
              {modalType === "add" ? "Add New Benefit" : "Edit Benefit"}
            </h2>
            {modalType === "add" ? (
              <div>
                <textarea
                  placeholder="Enter new benefit"
                  value={newBenefit}
                  onChange={(e) => setNewBenefit(e.target.value)}
                  className="border p-2 w-full mb-2 h-32"
                />
                <button
                  onClick={handleAddBenefit}
                  className="bg-blue-500 text-white px-6 py-3 rounded-md hover:bg-blue-700 w-full sm:w-auto"
                >
                  Add Benefit
                </button>
              </div>
            ) : (
              <div>
                <textarea
                  placeholder="Edit benefit"
                  value={editingBenefit}
                  onChange={(e) => setEditingBenefit(e.target.value)}
                  className="border p-2 w-full mb-2 h-32"
                />
                <button
                  onClick={handleSaveEdit}
                  className="bg-green-500 text-white px-6 py-3 rounded-md hover:bg-green-700 w-full sm:w-auto"
                >
                  Save
                </button>
              </div>
            )}
          </div>
        </div>
      )}
    </div>
  );
}

export default Benefits;
