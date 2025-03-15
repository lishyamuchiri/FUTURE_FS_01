import { db } from "../firebaseConfig.js";  // Import Firestore
import { collection, addDoc } from "firebase/firestore";

// Function to add a new food item
const addFoodItem = async () => {
  try {
    const docRef = await addDoc(collection(db, "foodItems"), {
      name: "Pizza",
      price: 10.99,
      category: "Fast Food",
      createdAt: new Date(),
    });
    console.log("Document written with ID:", docRef.id);
  } catch (error) {
    console.error("Error adding document:", error);
  }
};

// Call the function (test)
addFoodItem();
