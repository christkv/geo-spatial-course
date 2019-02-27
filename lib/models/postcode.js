class PostCode {
  constructor(collection) {
    this.collection = collection;
  }

  async create(id, name, description, geometry, optionals = {}) {
    return (await this.collection.insertOne(Object.assign({
      _id: id, name, description, geometry
    }, optionals))).insertedId
  }
}

module.exports = { PostCode };