// const express = require("express");
// const mongodb = require("mongodb");
// const router = express.Router();

// // Get work hours
// router.get("/", async (req, res) => {
//   const timeTrackers = await loadTimeTrackerCollections();
//   res.send(await timeTrackers.find({}).toArray());
// });

// // Aad time of arrival

// // Add time of living

// module.exports = router;

// async function loadTimeTrackerCollections() {
//   const client = await mongodb.MongoClient.connect(
//     "mongodb+srv://dbadmin:dbadmin@clusterhrm-tnyz8.mongodb.net/timeTracker",
//     {
//       useNewUrlParser: true,
//     }
//   );

//   return client.db("hrm").collection("timeTracker");
// }
