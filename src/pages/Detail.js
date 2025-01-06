import React, { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';

function Detail() {
  const { id } = useParams();
  const navigate = useNavigate();
  const [reminder, setReminder] = useState(null);

  useEffect(() => {
    // Fetch data from the API using the ID
    fetch(`http://localhost:3001/api/reminders/${id}`)
      .then((response) => {
        if (!response.ok) {
          throw new Error('Failed to fetch reminder details');
        }
        return response.json();
      })
      .then((data) => {
        setReminder(data); // Set the fetched reminder data
      })
      .catch((error) => {
        console.error('Error fetching reminder:', error);
        navigate('/'); // Redirect to home page if error occurs
      });
  }, [id, navigate]);

  if (!reminder) return null; // Return null if reminder is not loaded yet

  return (
    <div className="flex justify-center items-center min-h-screen bg-gradient-to-br from-blue-50 to-blue-100">
      <div className="w-full max-w-lg p-6 bg-white rounded-lg shadow-md">
        <h1 className="text-3xl font-bold text-center text-gray-800 mb-6">Reminder Details</h1>
        <div className="space-y-4">
          <p className="text-lg"><strong>Title:</strong> {reminder.title}</p>
          <p className="text-lg"><strong>Description:</strong> {reminder.description}</p>
          <p className="text-lg"><strong>Date:</strong> {reminder.date}</p>
          <p className="text-lg"><strong>Location:</strong> {reminder.location}</p>
        </div>
        <div className="mt-6 flex justify-between">
          <button
            onClick={() => navigate(`/edit/${id}`)}
            className="bg-pink-500 text-white px-4 py-2 rounded hover:bg-gray-400"
          >
            Edit
          </button>
          <button
            onClick={() => navigate('/')}
            className="bg-orange-400 text-white px-4 py-2 rounded hover:bg-gray-400"
          >
            Back
          </button>
        </div>
      </div>
    </div>
  );
}

export default Detail;
