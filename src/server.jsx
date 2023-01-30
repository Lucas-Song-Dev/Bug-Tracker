import express from 'express';
import { MongoClient, ObjectId } from 'mongodb';

const app = express();
const uri = "mongodb+srv://<username>:<password>@cluster0.mongodb.net/<dbname>?retryWrites=true&w=majority";
const client = new MongoClient(uri, { useNewUrlParser: true });

client.connect(async (err) => {
  if (err) throw err;
  const db = client.db('<dbname>');

  // Define routes
  app.get("/", (req, res) => {
    res.send("Hello World!");
  });

  app.get("/bugs", (req, res) => {
    db.collection("bugs").find({}).toArray((err, result) => {
      if (err) throw err;
      res.send(result);
    });
  });

  app.post("/bugs", (req, res) => {
    // Get the bug data from the request body
    const bug = req.body;

    // Insert the bug into the bugs collection
    db.collection("bugs").insertOne(bug, (err, result) => {
      if (err) throw err;
      res.send(result);
    });
  });

  // Update the bug
  app.put("/api/bugs/:id", (req, res) => {
    const id = req.params.id;
    const bugToUpdate = req.body;
    db.collection("bugs").updateOne({ _id: new ObjectId(id) }, { $set: bugToUpdate }, (err, result) => {
      if (err) {
        res.status(500).send({ error: "Error updating bug" });
      } else {
        res.send(result);
      }
    });
  });
});
