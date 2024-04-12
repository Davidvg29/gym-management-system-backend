require('dotenv').config()
const {Sequelize} = require("sequelize")
const {DB_USER, DB_PASSWORD, DB_HOST, DB_NAME} = process.env

const userAdmin = require("./models/userAdmin")

const sequelize = new Sequelize(
    `postgres://${DB_USER}:${DB_PASSWORD}@${DB_HOST}/${DB_NAME}`,
    {logging:false}
)

// add models
userAdmin(sequelize)


module.exports = {
    ...sequelize.models, 
    db: sequelize,     
  };