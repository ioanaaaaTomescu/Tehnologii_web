
const { DataTypes } = require('sequelize');
const sequelize= require('../sequelize');
const Student=sequelize.define(
    "Student",
    {
        id:{
            type:DataTypes.INTEGER,
            primaryKey:true,
            autoIncrement:true
        },
        userName:DataTypes.STRING,
        password:DataTypes.STRING
    }

)
