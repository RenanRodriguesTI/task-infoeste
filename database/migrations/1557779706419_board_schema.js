"use strict";

const Schema = use("Schema");

class BoardSchema extends Schema {
  up() {
    this.create("boards", table => {
      table.increments();

      table.string("title", 80).notNullable();
      table.string("description", 200);

      table.timestamps();
    });
  }

  down() {
    this.drop("boards");
  }
}

module.exports = BoardSchema;
