const db = require('../data/db-config')

module.exports = {
  find,
  findById,
  findSteps,
  add,
  addStep,
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
    return db("schemes").insert(scheme)
        .then(([id]) => findById(id));
};

function addStep(step, scheme_id) {
    return db("steps").insert({...step, scheme_id})
        .then(([id]) => 
            db("steps").where({id})
        )
}

function update(changes, id) {
  return db('schemes')
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
