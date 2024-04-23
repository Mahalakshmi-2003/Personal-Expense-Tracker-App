const mongoose = require("mongoose");
// Middleware
const db = 'mongodb+srv://sample:sample@cluster0.bhsbb3v.mongodb.net/'
// Connect to MongoDB using the connection string
mongoose.connect(db, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
}).then(() => {
  console.log(`Connection successful`);
}).catch((e) => {
  console.log(`No connection: ${e}`);
});

// mongodb://localhost:27017