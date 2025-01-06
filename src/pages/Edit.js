import React, { useState, useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';

function Edit() {
  const { id } = useParams();
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    title: '',
    description: '',
    date: '',
    location: '',
  });

  useEffect(() => {
    if (id !== 'new') {
      const storedReminders = JSON.parse(localStorage.getItem('reminders')) || [];
      const reminderToEdit = storedReminders.find((reminder) => reminder.id === id);
      if (reminderToEdit) {
        setFormData(reminderToEdit);
      }
    }
  }, [id]);

  const handleSubmit = (e) => {
    e.preventDefault();

    const newFormData = id === 'new' ? { ...formData, id: Date.now().toString() } : formData;

    const method = id === 'new' ? 'POST' : 'PUT';
    const url = id === 'new' ? 'http://localhost:3001/api/reminders' : `http://localhost:3001/api/reminders/${id}`;
    console.log('Submitting data:', newFormData);

    fetch(url, {
      method: method,
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(newFormData),
    })
      .then((response) => {
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        return response.json();
      })
      .then((data) => {
        // Setelah data berhasil disubmit, simpan ke localStorage
        const storedReminders = JSON.parse(localStorage.getItem('reminders')) || [];
        
        // Jika id baru, tambahkan reminder baru
        if (id === 'new') {
          storedReminders.push(data); // Menambahkan data baru
        } else {
          // Jika edit, update reminder yang ada
          const index = storedReminders.findIndex((reminder) => reminder.id === id);
          if (index !== -1) {
            storedReminders[index] = data; // Update data yang ada
          }
        }
        
        localStorage.setItem('reminders', JSON.stringify(storedReminders));
        navigate('/');
      })
      .catch((error) => {
        console.error('Error saving reminder:', error);
        alert('There was an error saving the reminder. Please try again.');
      });
  };

  return (
    <div className="flex justify-center items-center min-h-screen bg-gradient-to-br from-blue-50 to-blue-100">
      <div className="w-full max-w-lg p-6 bg-white rounded-lg shadow-md">
        <h1 className="text-3xl font-bold text-center text-gray-800 mb-6">
          {id === 'new' ? 'Create Reminder' : 'Edit Reminder'}
        </h1>
        <form onSubmit={handleSubmit} className="space-y-6">
          <div>
            <label htmlFor="title" className="block text-lg font-semibold text-gray-700">Title</label>
            <input
              type="text"
              id="title"
              value={formData.title}
              onChange={(e) => setFormData({ ...formData, title: e.target.value })}
              className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-lg shadow-sm focus:ring-blue-500 focus:border-blue-500"
              placeholder="Enter title"
            />
          </div>

          <div>
            <label htmlFor="description" className="block text-lg font-semibold text-gray-700">Description</label>
            <textarea
              id="description"
              value={formData.description}
              onChange={(e) => setFormData({ ...formData, description: e.target.value })}
              className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-lg shadow-sm focus:ring-blue-500 focus:border-blue-500"
              placeholder="Enter description"
            ></textarea>
          </div>

          <div>
            <label htmlFor="date" className="block text-lg font-semibold text-gray-700">Date</label>
            <input
              type="date"
              id="date"
              value={formData.date}
              onChange={(e) => setFormData({ ...formData, date: e.target.value })}
              className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-lg shadow-sm focus:ring-blue-500 focus:border-blue-500"
            />
          </div>

          <div>
            <label htmlFor="location" className="block text-lg font-semibold text-gray-700">Location</label>
            <input
              type="text"
              id="location"
              value={formData.location}
              onChange={(e) => setFormData({ ...formData, location: e.target.value })}
              className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-lg shadow-sm focus:ring-blue-500 focus:border-blue-500"
              placeholder="Enter location"
            />
          </div>

          <button
            type="submit"
            className="w-full bg-pink-500 text-white py-3 px-6 rounded-lg font-semibold shadow-md hover:bg-pink-600 transition"
          >
            Save
          </button>
        </form>
      </div>
    </div>
  );
}

export default Edit;
