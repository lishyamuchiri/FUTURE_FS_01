const { db } = require("./firebaseConfig");

async function testConnection() {
  try {
    const testDoc = await db.collection("test").add({ message: "Hello Firebase!" });
    console.log("✅ Firestore connected! Test document ID:", testDoc.id);
  } catch (error) {
    console.error("❌ Error connecting to Firestore:", error);
  }
}

testConnection();
