const admin = require("firebase-admin");

// Load service account key
const serviceAccount = require("./serviceAccountKey.json");

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
});

const db = admin.firestore();

console.log("🔥 Firestore Initialized Successfully!");

// Export for use in other files
module.exports = { admin, db };
