const mongoose = require("mongoose")
require("dotenv").config()

export const connect = () => {
  mongoose
    .connect(process.env.MONGODB_URL)
    .then(() => console.log("DB Connected Successfully"))
    .catch((error) => {
      console.log("DB Connection Failed")
      console.error(error)
      process.exit(1)
    })
}
