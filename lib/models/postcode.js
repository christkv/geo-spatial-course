class PostCode {
  /**
   * Creates a new PostCode class instance
   * 
   * @param {Collection} collection The collection to operate against.
   */
  constructor(collection) {
    this.collection = collection;
  }

  /**
   * Create a new postcode document.
   * 
   * @async
   * @param {ObjectId} id The _id for the new document.
   * @param {String} name The name of the post code.
   * @param {String} description The description text of the post code.
   * @param {Object} geometry A geoJSON location object.
   * @param {Object} optionals Additional fields to merge into Postcode document.
   * @returns {Promise<Object>} Returns an object of Errors, no errors means no entries.
   */
  async create(id, name, description, geometry, optionals) {
    throw Error('not implemented');
  }

  /**
   * Find a post code by its name
   * 
   * @async
   * @param {String} name The name of the postcode.
   * @returns {Promise<Object>} Returns a document.
   */
  async findOneByName(name) {
    throw Error('not implemented');
  }
}

module.exports = { PostCode };