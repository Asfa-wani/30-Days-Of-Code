module.exports = {
    HOST: "localhost",
    USER: "root",
    PASSWORD: "18@Hazik",
    DB: "Day9_db",
    dialect: "postgres",
    pool: {
        max: 5,
        min: 0,
        acquire: 30000,
        idle: 10000
    }
};