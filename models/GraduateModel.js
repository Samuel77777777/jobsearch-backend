import { Sequelize } from "sequelize";
// import db from "../config/Database.js";
import sequelize from '../config/Database.js';

const {DataTypes} = Sequelize;

const Graduate = sequelize.define('graduates', {
    fullName: DataTypes.STRING,
    address: DataTypes.STRING,
    email: DataTypes.STRING,
    image: DataTypes.STRING,
    phoneNumber: DataTypes.STRING,
    dateOfBirth: DataTypes.STRING,
    technologies: DataTypes.STRING,
    specialization: DataTypes.STRING,
    employmentStatus: DataTypes.STRING,
    description: DataTypes.STRING,
    published: DataTypes.STRING,
},{
    freezeTableName: true
});


export default Graduate;

(async()=>{
    await sequelize.sync();
})();