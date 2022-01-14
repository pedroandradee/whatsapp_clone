const { Sequelize } = require("sequelize");
const dbConfig = require("../config/database");

const User = require("../models/User");
const Conversations = require("../models/Conversations");
const Participant = require("../models/Participant");
const Messages = require("../models/Messages");

const connection = new Sequelize(dbConfig);

User.Init(connection);
Conversations.Init(connection);
Participant.Init(connection);
Messages.Init(connection);

User.associate(connection.models);
Conversations.associate(connection.models);
Participant.associate(connection.models);
Messages.associate(connection.models);

module.exports = connection;