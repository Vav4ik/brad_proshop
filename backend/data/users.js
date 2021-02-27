import bcrypt from "bcryptjs";

const users = [
  {
    name: "Admin User",
    email: "admin@proshop.com",
    password: bcrypt.hashSync("123456", 10),
    isAdmin: true,
  },
  {
    name: "Neo",
    email: "neo@matrix.com",
    password: bcrypt.hashSync("123456", 10),
  },
  {
    name: "Diana",
    email: "diana@kingdom.com",
    password: bcrypt.hashSync("123456", 10),
  },
];

export default users;
