// import Header from "../components/common/Header";
import { useEffect, useState } from "react";
// import ApiConfig from "../Consants/ApiConfig";

const Terms = () => {
    const [terms, setTerms] = useState([]);
    // const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const [notification, setNotification] = useState(null);
    const [showForm, setShowForm] = useState(false);
    const [formType, setFormType] = useState('');
    const [currentTerm, setCurrentTerm] = useState(null);
    const [formData, setFormData] = useState({ title: '', subtitle: '', content: '' });

    // Fetch terms and conditions from the backend
    // useEffect(
    //   () => {
    //     fetch(ApiConfig.getTermsAndConditionEndpoint())
    //         .then((response) => response.json())
    //         .then((data) => {
    //             if (data.status === 1) {
    //                 setTerms(data.data);
    //             } else {
    //                 setError(data.message || 'Failed to fetch terms and conditions');
    //             }
    //             setLoading(false);
    //         })
    //         .catch((error) => {
    //             setError('Error fetching data: ' + error.message);
    //             setLoading(false);
    //         });
    // }
    // , []);

    // Handle add button click
    const handleAddClick = () => {
        setFormType('add');
        setShowForm(true);
        setFormData({_id: new Date().getTime().toString(), title: '', subtitle: '', content: '' });
        
    };

    // Handle edit button click
    const handleEditClick = (term) => {
        setFormType('edit');
        setCurrentTerm(term);
        setFormData({ title: term.title, subtitle: term.subtitle, content: term.content });
        setShowForm(true);   
    };

    // Handle cancel button click
    const handleCancel = () => {
        setShowForm(false);
        setFormData({ _id: '',title: '', subtitle: '', content: '' });
        setCurrentTerm(null);
    };

    // Handle save button click
    const handleSave = () => {
      terms.push(formData)
      console.log(formData)
        // if (!formData.title.trim() && !formData.subtitle.trim() && !formData.content.trim()) {
        //     setNotification('Please fill at least one field: title, subtitle, or content');
        //     return;
        // }

        // // const endpoint = formType === 'add'
        // //     ? ApiConfig.postTermsAndConditionEndpoint()
        // //     : ApiConfig.putTermsAndConditionEndpoint(currentTerm._id);

        // const method = formType === 'add' ? 'POST' : 'PUT';

        // fetch(endpoint, {
        //     method,
        //     headers: { 'Content-Type': 'application/json' },
        //     body: JSON.stringify(formData),
        // })
        //     .then((response) => response.json())
        //     .then((data) => {
        //         if (data.status) {
        //             if (formType === 'add') {
        //                 setTerms((prevTerms) => [data.data, ...prevTerms]); // Add new term to the front of the list
        //             } else {
        //                 setTerms((prevTerms) =>
        //                     prevTerms.map((term) =>
        //                         term._id === currentTerm._id ? { ...term, ...formData, updatedAt: new Date() } : term
        //                     )
        //                 );
        //             }

        //             setNotification('Terms saved successfully.');
        //             setShowForm(false); // Close the form after saving
        //         } else {
        //             setNotification(data.message || 'Failed to save changes');
        //         }
        //     })
        //     .catch((error) => {
        //         setNotification('Error saving data: ' + error.message);
        //     });
    };

    // Handle delete button click
    const handleDeleteClick = async (id) => {
      setTerms((pervTerms)=>pervTerms.filter((item)=>item._id !== id))
      // setPolicies((prevPolicies) => prevPolicies.filter((policy) => policy._id !== id));
        // try {
        //     const response = await fetch(ApiConfig.deleteTermsAndConditionEndpoint(id), { method: "DELETE" });
        //     const data = await response.json();

        //     if (data.status === 1) {
        //         setTerms((prev) => prev.filter((term) => term._id !== id)); // Remove deleted term
        //         setNotification("Term deleted successfully.");
        //     } else {
        //         setNotification(data.message || "Failed to delete the term.");
        //     }
        // } catch (err) {
        //     setNotification("Error deleting data: " + err.message);
        // }
    };

    // if (loading) {
    //     return <div className='text-center'>Loading...</div>;
    // }

    return (
        <div className='flex-1 relative z-10 overflow-auto bg-white text-black'>
            {/* <Header title={"Terms and Conditions"} /> */}
            <h4 className="text-xl font-semibold">Terms and Conditions</h4>
            <main className='max-w-7xl mx-auto py-6 px-4 lg:px-8'>
                {notification && (
                    <div className='bg-green-200 text-green-700 p-4 rounded-md mb-4'>
                        {notification}
                        {/* <button
                            className="ml-2 text-red-500"
                            onClick={() => setNotification(null)}
                        >
                            ✕
                        </button> */}
                    </div>
                )}
                <button className='bg-blue-500 text-white px-4 py-2 rounded-md mb-4' onClick={handleAddClick}>Add</button>
                <ul className='space-y-4'>
                    {terms.map((term,index) => (
                        <li key={index} className='bg-white p-4 rounded-lg shadow-md text-black border-b border-gray-300'>
                            <span>Title: {term.title}</span><br />
                            <span>Subtitle: {term.subtitle}</span><br />
                            <span>Content: {term.content}</span><br />
                            <small>Created At: {new Date(term.createdAt).toLocaleString()}</small><br />
                            {term.updatedAt && (
                                <small>Updated At: {new Date(term.updatedAt).toLocaleString()}</small>
                            )}
                            <div className='mt-4 flex justify-end space-x-2'>
                                <button className='bg-yellow-500 text-white px-3 py-1 rounded-md' onClick={() => handleEditClick(term)}>Edit</button>
                                <button className='bg-red-500 text-white px-3 py-1 rounded-md' onClick={() => handleDeleteClick(term._id)}>Delete</button>
                            </div>
                        </li>
                    ))}
                </ul>
            </main>

            {showForm && (
                <div className='fixed inset-0 flex items-center justify-center z-20 bg-black bg-opacity-50'>
                    <div className='bg-white rounded-lg p-6 w-11/12 md:w-1/2'>
                        <h3 className='text-lg font-semibold mb-4'>
                            {formType === 'add' ? 'Add New Term' : 'Edit Term'}
                        </h3>
                        <label className='block mb-1'>Title:</label>
                        <input
                            type='text'
                            value={formData.title}
                            onChange={(e) => setFormData({ ...formData, title: e.target.value })}
                            placeholder='Enter title'
                            className='border border-gray-300 rounded-md w-full p-2 mb-4'
                        />
                        <label className='block mb-1'>Subtitle:</label>
                        <input
                            type='text'
                            value={formData.subtitle}
                            onChange={(e) => setFormData({ ...formData, subtitle: e.target.value })}
                            placeholder='Enter subtitle'
                            className='border border-gray-300 rounded-md w-full p-2 mb-4'
                        />
                        <label className='block mb-1'>Content:</label>
                        <textarea
                            value={formData.content}
                            onChange={(e) => setFormData({ ...formData, content: e.target.value })}
                            placeholder='Enter content'
                            className='border border-gray-300 rounded-md w-full p-2 mb-4'
                        />
                        <div className='flex justify-end space-x-2'>
                            <button
                                onClick={handleCancel}
                                className='bg-gray-300 text-gray-700 px-4 py-2 rounded-md'
                            >
                                Cancel
                            </button>
                            <button
                                onClick={() => {
                                    handleSave();
                                    setShowForm(false); // Close the popup after saving
                                }}
                                className='bg-blue-500 text-white px-4 py-2 rounded-md'
                            >
                                Save
                            </button>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
};

export default Terms;