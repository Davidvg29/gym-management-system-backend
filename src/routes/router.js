const {Router} = require("express")

const users = require("../controllers/users")

const router = Router()

router.get("/", users)

module.exports = router