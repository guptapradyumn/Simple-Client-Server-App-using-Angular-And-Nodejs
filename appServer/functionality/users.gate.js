const db = require('../db/users.db');

let users = [];

users.selectUser = async (req, res) => {
  try {
    let result = await db.DBquery('select * from users where u_id=' + req.params.id + ';');
    res.send({ staus: true, data: result });
  } catch (e) {
    res.send({ staus: false });
  }
}

users.selectUsers = async (req, res) => {
  try {
    let result = await db.DBquery('select * from users;');
    res.send({ staus: true, data: result });
  } catch (e) {
    res.send({ staus: false });
  }
}


module.exports = users;