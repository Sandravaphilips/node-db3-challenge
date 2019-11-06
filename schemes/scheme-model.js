const db = require('../data/db-config')

module.exports = {
  find,
  findById,
  findSteps,
  add,
  update,
  remove
};

function find() {
    return db("schemes")
    
};

function findById(id) {
    return db("schemes")
        .where({id});
};

function findSteps(id) {
    return db('steps')
        .where({"scheme_id": id});
};

function add(scheme) {
    return db("schemes").insert(scheme);
};

function update(changes, id) {
  return db('users')
    .where({ id })
    .update(changes)
    .then(() => {
      return findById(id)
    })
};

function remove(id) {
    return findById(id)
        .then(data => {
            db("schemes").where({id}).del();
            return data;
        })
}
