/**
 * contactController.js
 *
 * - Uses the DB instance to insert contact data, into the DB
 * - Returns a server error, if insertion fails
 */

import { pool } from "./databaseController.js";

//Uploading a contact to the DB
export const contactUpload = async (req, res) => {
  const contactData = req.body;

  try {
    //query the DB to insert the contact data
    await pool.query(
      "INSERT INTO contacts (name, contact_number, email) VALUES (?, ?, ?)",
      [contactData.name, contactData.number, contactData.email],
    );
    res.json({ message: "success" });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Server Error" });
  }
};
