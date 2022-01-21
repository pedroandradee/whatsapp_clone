const express = require("express");

const AuthController = require("./src/controllers/AuthController");
const ConversationsController = require("./src/controllers/ConversationsController");
const MessagesController = require("./src/controllers/MessagesController");
const UserController = require("./src/controllers/UserController");

const routes = express.Router();

//auth routes
routes.post("/api/users", AuthController.store);
routes.post("/api/users/login", AuthController.login);

//user routes
routes.get("/api/users/:id", UserController.indexAll);
routes.put("/api/users/:id", UserController.update);
routes.delete("/api/users/:id", UserController.delete);

//conversations routes
//routes.put("/api/conversations/:id", ConversationsController.update);
routes.post("/api/conversations", ConversationsController.store);
routes.get("/api/conversations/:id", ConversationsController.index);
routes.get("/api/conversationsAll/:id", ConversationsController.indexAll2);
routes.delete("/api/conversations/:id", ConversationsController.delete);

//messages routes
routes.post("/api/messages", MessagesController.store);
routes.delete("/api/messages/:id", MessagesController.delete);

module.exports = routes;