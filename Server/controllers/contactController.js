import { pool } from "./databaseController.js";

export const contactUpload = async (req, res) => {
  const contactData = req.body;

  try {
    await pool.query(
      "INSERT INTO contacts (name, contact_number, email) VALUES (?, ?, ?)",
      [contactData.name, contactData.number, contactData.email],
    );
  } catch (error) {
    console.log(error);
  }

  res.json({ message: "success" });
};
