'use strict'

/** @type {typeof import('@adonisjs/lucid/src/Lucid/Model')} */
const Model = use('Model')

class List extends Model {
  board() {
    return this.belongsTo('App/Models/Board');
  }
}

module.exports = List
