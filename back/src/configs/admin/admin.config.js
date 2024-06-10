const admin = require("firebase-admin");

const { getFirestore, Timestamp, FieldValue, Filter} = require("firebase-admin/firestore");

const config = require("./voley-store-server-key.json");

admin.initializeApp({
    credential: admin.credential.cert(config)
})

const data = getFirestore();

module.exports = data;