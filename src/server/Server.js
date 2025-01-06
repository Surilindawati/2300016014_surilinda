const express = require("express");
const app = express();
const cors = require("cors");
const fs = require("fs");
const bodyParser = require("body-parser");

app.use(cors());
app.use(bodyParser.json());

// Path untuk file JSON
const path = require("path");
const remindersFilePath = path.join(__dirname, "./reminders.json");

// Fungsi untuk membaca data dari file JSON
const readRemindersFromFile = () => {
  try {
    const data = fs.readFileSync(remindersFilePath, "utf-8");
    return JSON.parse(data);
  } catch (error) {
    return []; // Jika file tidak ada atau kosong, return array kosong
  }
};

// Fungsi untuk menulis data ke file JSON
const writeRemindersToFile = (reminders) => {
  fs.writeFileSync(remindersFilePath, JSON.stringify(reminders, null, 2));
};

// Route untuk mendapatkan semua reminders
app.get("/api/reminders", (req, res) => {
  const reminders = readRemindersFromFile();
  res.json(reminders);
});

// Route untuk mendapatkan reminder berdasarkan ID
app.get("/api/reminders/:id", (req, res) => {
  const { id } = req.params;
  const reminders = readRemindersFromFile();
  const reminder = reminders.find((reminder) => reminder.id === id);
  if (reminder) {
    res.json(reminder);
  } else {
    res.status(404).json({ error: "Reminder not found" });
  }
});

// Route untuk menambah reminder baru
app.post("/api/reminders", (req, res) => {
  const newReminder = req.body;
  const reminders = readRemindersFromFile();
  reminders.push(newReminder);
  writeRemindersToFile(reminders);
  res.status(201).json(newReminder);
  console.log('Received data:', req.body);

});

// Route untuk memperbarui reminder berdasarkan ID
app.put("/api/reminders/:id", (req, res) => {
  const { id } = req.params;
  const updatedReminder = req.body;
  let reminders = readRemindersFromFile();

  const index = reminders.findIndex((reminder) => reminder.id === id);
  if (index !== -1) {
    reminders[index] = { ...reminders[index], ...updatedReminder };
    writeRemindersToFile(reminders);
    res.json(reminders[index]);
  } else {
    res.status(404).json({ error: "Reminder not found" });
  }
});

// Route untuk menghapus reminder berdasarkan ID
app.delete("/api/reminders/:id", (req, res) => {
  const { id } = req.params;
  let reminders = readRemindersFromFile();
  reminders = reminders.filter((reminder) => reminder.id !== id);
  writeRemindersToFile(reminders);
  res.status(204).send();
});

app.listen(3001, () => {
  console.log("Server running on: 3001");
});
