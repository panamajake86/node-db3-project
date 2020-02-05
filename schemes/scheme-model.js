const db = require('../data/db-config');

module.exports = {
    find,
    findById,
    findSteps,
    add,
    // addStep,
    update,
    remove
};

function find() {
    return db('schemes');
};

function findById(id) {
    return db('schemes').where({ id }).first();
};

function findSteps(id) {
    return db('steps')
    .join('schemes', 'schemes.id', 'steps.scheme_id')
    .select('steps.id', 'schemes.scheme_name', 'steps.step_number', 'steps.instructions')
    .orderBy('steps.step_number')
    .where({ scheme_id: id});
};

function add(data) {
    return db('schemes').insert(data);
};

// function addStep(id, data) {
//     return db('')
// };

function update(changes, id) {
    return db('schemes').where({ id }).update(changes);
};

function remove(id) {
    return db('schemes').where({ id }).del();
};