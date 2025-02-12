import { db } from "../config"; // Ensure the path is correct
import { collection, doc, setDoc, serverTimestamp } from "firebase/firestore";

export const createGroup = async (groupName, adminName, description, inviteLink) => {
  try {
    console.log("🔥 Connecting to Firestore...");

    // Create a reference to a new document in the "groups" collection
    const newGroupRef = doc(collection(db, "groups"));

    // Save group details in Firestore
    await setDoc(newGroupRef, {
      groupId: newGroupRef.id, // Unique Firestore ID
      groupName: groupName,
      adminName: adminName,
      description: description || "", // Ensure description is always a string
      inviteLink: inviteLink,
      createdAt: serverTimestamp(), // Timestamp for when the group was created
    });

    console.log("✅ Group Created with ID:", newGroupRef.id);
    return { success: true, id: newGroupRef.id };
  } catch (error) {
    console.error("❌ Firestore Error:", error.message);
    return { success: false, error: error.message };
  }
};
