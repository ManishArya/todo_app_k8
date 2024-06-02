const express = require("express");
const { connect } = require("mongoose");
const mongoose = require("mongoose");

// schema
const taskSchema = new mongoose.Schema({
  title: String,
  description: String,
});

const model = mongoose.model("task", taskSchema);
const app = express();
app.use(express.json());

async function startApplication() {
  try {
    let connectionString = process.env.connectionString;
    if (!connectionString) {
      console.error("connection string is required");
      return;
    }

    connectionString = connectionString.replace(
      "username:password",
      `${process.env.db_username}:${process.env.db_password}`
    );

    console.info("waiting for the db connection....");

    await connect(connectionString, {
      useUnifiedTopology: true,
      useNewUrlParser: true,
    });
    console.info("db connected successfully!!!");
    const port = process.env.PORT || 3000;
    app.listen(port, () =>
      console.info(`App starts to listening on port ${port}!`)
    );
  } catch (error) {
    console.error(error);
  }
}

startApplication();

// Get
app.get("/", async (req, res) => {
  try {
    const response = await model.find({}, { __v: 0 });
    res.status(200).json(response);
  } catch (error) {
    console.error(error);
  }
});

// create
app.post("/", async (req, res) => {
  try {
    const payload = req.body;
    await model.create(payload);
    res.status(201).send("created successfully");
  } catch (error) {
    console.error(error);
  }
});

// delete
app.delete("/:id", async (req, res) => {
  try {
    const id = req.params.id;
    await model.deleteOne({ _id: id });
    res.status(204).send();
  } catch (error) {
    console.error(error);
  }
});

// update
app.put("/:id", async (req, res) => {
  try {
    const id = req.params.id;
    await model.updateOne({ _id: id }, { $set: req.body });
    res.status(200).send("updated successfully");
  } catch (error) {
    console.error(error);
  }
});
