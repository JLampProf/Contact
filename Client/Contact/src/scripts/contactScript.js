/**
 * contactScript.js
 *
 * Handles the uploading and retrieving of contact data to and from the backend
 * via the REST API
 */

import { api } from "./axiosScript.js";

export const contactUpload = async (contactData) => {
  try {
    //Sending the data to the backend
    const result = await api.post("/api/upload", contactData);

    //Return message from backend (success or fail)
    return result?.data?.message;
  } catch (error) {
    return {
      error: true,
      status: error?.response?.status,
      message: error?.response?.message,
    };
  }
};
