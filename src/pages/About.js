import React from "react";

const About = () => {
  return (
    <div className="bg-white p-6 rounded-lg shadow text-center">
      <h2 className="text-3xl font-bold text-pink-500 mb-4">Tentang Aplikasi</h2>
      <p className="text-gray-600 text-lg text-justify">
        Reminder Invitation adalah aplikasi sederhana yang dirancang untuk
        membantu Anda mengelola acara penting dengan lebih mudah dan efisien. 
        Aplikasi ini memungkinkan pengguna untuk membuat pengingat untuk berbagai
        jenis acara seperti ulang tahun, pertemuan, pernikahan, atau acara spesial
        lainnya. Dengan antarmuka yang ramah pengguna, Anda dapat dengan cepat
        menambahkan detail acara seperti tanggal, waktu, dan deskripsi tambahan.
      </p>
      <p className="text-gray-600 text-lg mt-4 text-justify">
        Fitur-fitur utama aplikasi meliputi kemampuan untuk mengedit informasi
        pengingat jika ada perubahan, menghapus pengingat yang tidak lagi
        relevan, serta melihat daftar pengingat yang telah Anda buat dengan
        mudah. Semua data tersimpan dengan aman sehingga Anda tidak perlu khawatir
        kehilangan informasi penting.
      </p>
      <p className="text-gray-600 text-lg mt-4 text-justify">
        Selain itu, Reminder Invitation membantu meningkatkan produktivitas Anda
        dengan memastikan tidak ada momen penting yang terlewat. Aplikasi ini
        cocok untuk individu yang sibuk dan ingin tetap terorganisir, serta untuk
        mereka yang ingin memastikan setiap acara dirayakan dengan sempurna.
      </p>
      <p className="mt-4 text-gray-500 text-justify">
        Dibuat dengan ❤ untuk membantu merayakan momen penting Anda.
      </p>
    </div>
  );
};

export default About;
