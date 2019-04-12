const { hashPassword } = require('../shared');

class User {
  /**
   * Creates a new User class instance
   * 
   * @param {Collection} collection The collection to operate against.
   */
  constructor(collection) {
    this.collection = collection;
  }

  /**
   * Create a new User instance.
   * 
   * @async
   * @param {ObjectId} id The _id for the new pub crawl document.
   * @param {String} name The name of the user.
   * @param {String} username The username of the user.
   * @param {String} password The password for the user.
   * @param {String} confirmPassword The confirmation password for the user
   * @param {Object} optionals Additional fields to merge into User document.
   * @returns {Promise<Object>} Returns an object of Errors, no errors means no entries.
   */
  async create(id, name, username, password, confirmPassword, optionals) {
    throw Error('not implemented');
  }

  /**
   * Change the user password.
   * 
   * @async
   * @param {ObjectId} id The _id for the user.
   * @param {String} currentPassword The current password of the user.
   * @param {String} password The password for the user.
   * @param {String} confirmPassword The confirmation password for the user
   * @returns {Promise<Object>} Returns an object of Errors, no errors means no entries.
   */
  async changePassword(id, currentPassword, password, confirmPassword) {
    throw Error('not implemented');
  }

  /**
   * Update the users current geoJSON location.
   * 
   * @async
   * @param {ObjectId} id The _id for the user.
   * @param {Object} location The users current geoJSON location.
   * @returns {Promise<Object>} Returns a document.
   */
  async updateLocation(id, location) {
    throw Error('not implemented');
  }

  /**
   * Find the first user by _id.
   * 
   * @async
   * @param {ObjectId} id The _id for the user.
   * @returns {Promise<Object>} Returns a document.
   */
  async findById(id) {
    throw Error('not implemented');
  }

  /**
   * Find the first user by username
   * 
   * @async
   * @param {String} username The username used to locate the user.
   * @returns {Promise<Object>} Returns a document.
   */
  async findOneByUsername(username) {
    throw Error('not implemented');
  }
}

module.exports = { User };