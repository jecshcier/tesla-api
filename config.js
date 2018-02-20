module.exports = {
  db_config: {
    databaseName: "tesla",
    username: "root",
    password: "Admin12345*",
    options: {
      define: {
        timestamps: false // true by default
      },
      timezone: "+08:00",
      // host:"192.168.109.236",
      host: "127.0.0.1",
      dialect: "mysql",
      dialectOptions: {
        charset: "utf8mb4"
      }
    }
  },
  system_key: "tesla_key"
}
