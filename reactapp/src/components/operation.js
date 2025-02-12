import { db } from "../firebase/config"; // Ensure the correct Firebase config path
import { collection, addDoc, getDocs, updateDoc, doc, serverTimestamp } from "firebase/firestore";

// ✅ Function to create a new group
export const createGroup = async (groupName, adminName, description, inviteLink) => {
  try {
    const docRef = await addDoc(collection(db, "groups"), {
      groupId: Math.random().toString(36).substr(2, 12), // Unique Group ID
      groupName: groupName,
      adminName: adminName,
      description: description || "No description provided",
      inviteLink: inviteLink,
      createdAt: serverTimestamp(),
      members: [{ name: adminName, role: "admin" }], // Admin as first member
    });

    console.log("Group Created with ID:", docRef.id);
    return { success: true, groupId: docRef.id };
  } catch (error) {
    console.error("Error creating group:", error);
    return { success: false, error: error.message };
  }
};

// ✅ Function to fetch all groups
export const fetchGroups = async () => {
  try {
    const querySnapshot = await getDocs(collection(db, "groups"));
    let groups = [];
    querySnapshot.forEach((doc) => {
      groups.push({ id: doc.id, ...doc.data() });
    });
    return { success: true, groups: groups };
  } catch (error) {
    console.error("Error fetching groups:", error);
    return { success: false, error: error.message };
  }
};

// ✅ Function to add a member to a group
export const addMemberToGroup = async (groupId, memberName) => {
  try {
    const groupRef = doc(db, "groups", groupId);
    await updateDoc(groupRef, {
      members: [{ name: memberName, role: "member" }], // Add new member
    });

    console.log(`Member "${memberName}" added to group ${groupId}`);
    return { success: true };
  } catch (error) {
    console.error("Error adding member:", error);
    return { success: false, error: error.message };
  }
};
