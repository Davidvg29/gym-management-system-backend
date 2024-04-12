const {Router} = require("express")

const getUserAdmin = require("../controllers/getUserAdmin")

const router = Router()

router.get("/", getUserAdmin)

module.exports = router