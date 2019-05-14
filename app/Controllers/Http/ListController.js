"use strict"
const List = use("App/Models/List")

class ListController {
  async index() {
    const ilsts = List.all()

    return lists
  }

  async store({ request }) {
    const data = request.only(["title", "description"])
    const list = await List.create(data)

    return list
  }

  async show({ params }) {
    const list = await List.findOrFail(params.id)
    return list
  }

  async update({ request }) {
    const list = await List.findOrFail(params.id)
    const data = await request.only(["title", "description"])

    list.merge(data)
    await list.save()

    return list
  }

  async destroy({ params }) {
    const list = await List.findOrFail(params.id)
    
    try {
      await list.delete()
      return true
    } catch (error) {
      return false
    }
  }
}

module.exports = ListController
