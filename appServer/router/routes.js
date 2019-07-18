const express = require('express');
const router = express.Router();

const users = require('../functionality/users.gate');


router.get('/selectUser/:id', users.selectUser);
router.get('/selectUsers/', users.selectUsers);


module.exports = router;