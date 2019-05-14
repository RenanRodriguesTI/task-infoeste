"use strict";
const Board = use("App/Models/Board");

class BoardController {
  async index() {
    const boards = Board.all();

    return boards;
  }

  async store({ request }) {
    const data = request.only(["title", "description", "date_execution"]);
    const board = await Board.create(data);

    return board;
  }

  async show({ params }) {
    const board = await Board.findOrFail(params.id);
    return board;
  }

  async update({ request, params }) {
    const board = await Board.findOrFail(params.id);
    const data = await request.only(["title", "description", "date_execution"]);

    board.merge(data);
    await board.save();

    return board;
  }

  async destroy({ params }) {
    const board = await Board.findOrFail(params.id);
    try {
      await board.delete();
      return true;
    } catch (error) {
      return false;
    }
  }
}

module.exports = BoardController;
