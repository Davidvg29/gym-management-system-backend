const {DataTypes} = require("sequelize")

module.exports = (sequelize)=>{
    sequelize.define("UserAdmin", {
        id:{type:
            DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true},
        user:{type:
            DataTypes.STRING,
            allowNull: false},
        password:{type:
            DataTypes.STRING,
            allowNull: false},
    }, {
        tableName: "UserAdmin"
    })
}