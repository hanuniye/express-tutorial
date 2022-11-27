const express = require("express");
const router = express.Router();
const { getPeople,deletePoeple,postPeople,putPeople } = require("../controller/people")

router.get("/", getPeople)

router.post("/", postPeople)

router.put("/:personID", putPeople)

router.delete('/:personID', deletePoeple)

module.exports = router;

