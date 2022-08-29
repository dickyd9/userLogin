import { Sequelize } from "sequelize";

const db = new Sequelize('backoffice_service', 'hotel', 'hol1g0', {
    host: "10.1.1.5:3306",
    dialect: "mysql",
    define: {
        timestamps: false
    }
})

export default db;