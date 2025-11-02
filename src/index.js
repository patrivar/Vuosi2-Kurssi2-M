import express from "express";
import {
  getAllMedia,
  getMediaByID,
  postNewMediaItem,
  deleteMediaByID,
} from "./media.js";
import {
  getAllUsers,
  getUserByID,
  postNewUserItem,
  deleteUsersByID,
} from "./users.js";
const hostname = "127.0.0.1";
const app = express();
const port = 3000;

const items = [
  { id: 2, name: "eka" },
  { id: 11, name: "toka juttu" },
];

// Gonfig pug template engine
app.set("views", "./views");
app.set("view engine", "pug");

// PArse json from request body
app.use(express.json());

// Sseve pug template (server root)
app.get("/", (req, res) => {
  const content = {
    title: "My pug page",
    text: "Tässä tallennetut itemit",
    items,
  };
  res.render("index", content);
});

// Määrittää palvelimelle mitä kansiota käyttää staattisena tiedostokansiona
app.use("/", express.static("public"));
app.use("/media", express.static("media"));

// Media endpoints

// Get all media items
app.get("/api/media", getAllMedia);

// Get media item by ID
app.get("/api/media/:id", getMediaByID);

// Post new media item
app.post("/api/media", postNewMediaItem);

// Delete media item by ID
app.delete("/api/media/:id", deleteMediaByID);

// Users endpoints

// Get all users
app.get("/api/users", getAllUsers);

// Get user by ID
app.get("/api/users/:id", getUserByID);

// Post new user
app.post("/api/users", postNewUserItem);

// Delete user by ID
app.delete("/api/users/:id", deleteUsersByID);

// Endpoints for /items
app.get("/api/items", (req, res) => {
  res.json(items);
});
app.get("/api/items/:id", (req, res) => {
  // TODO: Choose correct item based on id property and send it as response
  res.json({ request_id: req.params.id });
});
app.delete("/api/items/:id", (req, res) => {
  // TODO: Delete correct item based on id property
  res.json({ deleteid_id: req.params.id });
});
app.put("/api/items/:id", (req, res) => {
  // TODO: Modify correct item based on id property
  res.json({ modify_id: req.params.id });
});
app.post("/items", (req, res) => {
  // TODO: add new item to items[] (Viime viikon harkka)
  // TODO: add create item to response
  res.sendStatus(201);
});

app.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});
