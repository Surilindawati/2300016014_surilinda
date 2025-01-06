import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import Gambar from '../pages/Wedding.jpg';

const Home = () => {
  const [reminders, setReminders] = useState([]);

  // Fetch data from localStorage
  const getStoredReminders = () => {
    const data = localStorage.getItem("reminders");
    return data ? JSON.parse(data) : [];
  };

  // Save data to localStorage
  const saveToLocalStorage = (reminders) => {
    localStorage.setItem("reminders", JSON.stringify(reminders));
  };

  // Delete a reminder by ID
  const handleDelete = (id) => {
    const updatedReminders = reminders.filter((reminder) => reminder.id !== id);
    setReminders(updatedReminders);
    saveToLocalStorage(updatedReminders);

    // If reminders are empty, show welcome message
    if (updatedReminders.length === 0) {
      alert("The last reminder has been deleted. Welcome screen will be displayed.");
    }
  };

  // Load reminders from localStorage on component mount
  useEffect(() => {
    const storedReminders = getStoredReminders();
    setReminders(storedReminders);
  }, []);

  return (
    <div className="min-h-screen bg-cover bg-center" style={{ backgroundImage: `url(${Gambar})` }}>
      <div className="bg-black bg-opacity-50 min-h-screen">
        <header className="bg-transparent text-white py-8 shadow-lg">
          <h1 className="text-center text-4xl font-extrabold">
            Reminder Invitation
          </h1>
        </header>

        <div className="container mx-auto px-4 py-12">
          {reminders.length === 0 ? (
            <div className="text-center text-white">
              <h2 className="text-3xl font-bold">Selamat Datang!</h2>
              <p className="text-gray-300 mt-4 text-lg text-justify leading-relaxed">
                Selamat datang di aplikasi <span className="font-bold text-pink-500">Reminder Invitation</span>! Aplikasi ini dirancang khusus untuk membantu Anda mengatur dan mengingat momen-momen spesial dalam hidup Anda, seperti ulang tahun, pernikahan, acara keluarga, dan berbagai peristiwa penting lainnya. Dengan antarmuka yang sederhana namun fungsional, kami memastikan Anda dapat dengan mudah membuat pengingat yang dipersonalisasi sesuai kebutuhan Anda.
              </p>
              <p className="text-gray-300 mt-4 text-lg text-justify leading-relaxed">
                Aplikasi ini tidak hanya cocok untuk kebutuhan pribadi. Anda dapat menambahkan detail penting ke setiap pengingat, seperti tanggal, waktu, dan deskripsi acara, sehingga tidak ada informasi yang terlewat. Kami percaya bahwa setiap momen memiliki nilai yang tak tergantikan, dan Reminder Invitation hadir untuk memastikan Anda dapat merayakan momen tersebut dengan penuh kesan.
              </p>
              <p className="text-gray-300 mt-4 text-lg text-justify leading-relaxed">
                Jangan ragu untuk mulai menjelajahi fitur kami dengan menekan tombol di bawah ini. Buat pengingat baru sekarang dan mulailah perjalanan Anda dalam merencanakan momen-momen istimewa dengan lebih terorganisir dan efisien. Biarkan Reminder Invitation menjadi teman setia Anda dalam merayakan setiap detik yang berarti bersama orang-orang terkasih.
              </p>
              <Link
                to="/edit/new"
                className="inline-block mt-6 bg-pink-500 text-white py-2 px-4 rounded-lg hover:bg-pink-600 transition-colors"
              >
                Create Reminder
              </Link>
            </div>
          ) : (
            <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
              {reminders.map((reminder) => (
                <div
                  key={reminder.id}
                  className="bg-white shadow-md rounded-lg p-6 hover:shadow-lg transition-shadow duration-300"
                >
                  <h2 className="text-xl font-bold mb-2 text-pink-600">
                    {reminder.title}
                  </h2>
                  <p className="text-gray-600 mb-4 text-justify">{reminder.description}</p>
                  <p className="text-gray-500 text-sm mb-4 text-justify">
                    Tanggal: {reminder.date}
                  </p>
                  <div className="flex justify-between">
                    <Link
                      to={`/detail/${reminder.id}`}
                      className="inline-block bg-pink-500 text-white py-2 px-4 rounded-lg hover:bg-pink-600 transition-colors"
                    >
                      Lihat Detail
                    </Link>
                    <button
                      onClick={() => handleDelete(reminder.id)}
                      className="inline-block bg-red-500 text-white py-2 px-4 rounded-lg hover:bg-red-600 transition-colors"
                    >
                      Hapus
                    </button>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Home;
