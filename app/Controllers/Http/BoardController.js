"use strict"
const Board = use("App/Models/Board")

class BoardController {
  async index() {
    const boards = Board.all()

    return boards
  }

  async store({ request }) {
    const data = await request.only(["title", "description", "date_execution"])
    const board = await Board.create(data)

    return board
  }

  async show({ params }) {
    const board = await Board.findOrFail(params.id)
    return board
  }

  async update({ request }) {
    const board = await Board.findOrFail(params.id)
    const data = await request.only(["title", "description", "date_execution"])

    board.merge(data)
    await board.save()

    return board
  }

  async destroy({ params }) {
    const board = await Board.findOrFail(params.id)

    await board.delete()
  }
}

module.exports = BoardController
