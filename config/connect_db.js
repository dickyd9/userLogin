import { Sequelize } from "sequelize";

const db = new Sequelize('dbstart', 'drmw', 'drm9009', {
    host: "localhost",
    dialect: "mysql",
    define: {
        timestamps: false
    }
})

export default db;