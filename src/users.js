const users = [
  {
    user_id: 260,
    username: "VCHar",
    password: "********",
    email: "vchar@example.com",
    user_level_id: 1,
    created_at: "2020-09-12T06:56:41.000Z",
  },
  {
    user_id: 305,
    username: "Donatello",
    password: "********",
    email: "dona@example.com",
    user_level_id: 1,
    created_at: "2021-12-11T06:00:41.000Z",
  },
  {
    user_id: 3609,
    username: "Anon5468",
    password: "********",
    email: "x58df@example.com",
    user_level_id: 3,
    created_at: "2023-04-02T05:56:41.000Z",
  },
];

// Get all users
const getAllUsers = (req, res) => {
  res.json(users);
};

// Get user item by ID
const getUserByID = (req, res) => {
  const user = users.find((user) => user.user_id === parseInt(req.params.id));
  if (user) {
    res.json(user);
  } else {
    res.status(404).json({ message: "User not found" });
  }
};

// POST user item
const postNewUserItem = (req, res) => {
  const data = req.body;
  data.user_id = users[users.length - 1].user_id + 1;
  users.push(data);
  res.status(201).json({ message: "User created", item: data });
};

// Delete user by ID
const deleteUsersByID = (req, res) => {
  const itemToBeDeletedIndex = users.findIndex(
    (user) => user.user_id === parseInt(req.params.id)
  );
  users.splice(itemToBeDeletedIndex, 1);
  if (itemToBeDeletedIndex != -1) {
    res.status(204).json({ message: "User deleted" });
  } else {
    res.status(404).json({ message: "User not found" });
  }
};

export { getAllUsers, getUserByID, postNewUserItem, deleteUsersByID };
