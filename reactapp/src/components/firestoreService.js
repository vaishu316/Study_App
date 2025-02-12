// firestoreService.js
import { db } from "./firebase"; // Import Firestore instance
import { collection, addDoc, serverTimestamp } from "firebase/firestore";

// Function to create a group in Firestore
export const createGroup = async (groupName, adminName, description, inviteLink) => {
  try {
    const docRef = await addDoc(collection(db, "groups"), {
      groupName: groupName,
      adminName: adminName,
      description: description,
      inviteLink: inviteLink,
      createdAt: serverTimestamp(), // Stores timestamp
    });

    return { success: true, id: docRef.id };
  } catch (error) {
    return { success: false, error: error.message };
  }
};
