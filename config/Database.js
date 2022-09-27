import {Sequelize} from "sequelize";

// const db = new Sequelize("odc_jobsearch","postgres","1=pankaj7",{
//     host: "localhost",
//     dialect: "postgres"
// });


// export default db;

// const Sequelize = require('sequelize');
const sequelize = new Sequelize('odc_jobsearch','postgres','1=pankaj7',{
    host: 'localhost',
    dialect: 'postgres'
});

sequelize.authenticate().then(() => {
    console.log("Connection Successful");
}).catch((err) => {
    console.log("Error connecting to database!");
});


export default sequelize;
console.log("Another task");



