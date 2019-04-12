const { ObjectId } = require('mongodb');
const { executeAndSkipException, isValidDate, isString } = require('../shared');

class Crawl {
  /**
   * Creates a new Crawl class instance
   * 
   * @param {Collection} collection The collection to operate against.
   */
  constructor(collection) {
    this.collection = collection;
  }

  /**
   * The create method allows us to create a new pub crawl document.
   * 
   * @async
   * @param {ObjectId} id The _id for the new document.
   * @param {String} name The name of the pub crawl.
   * @param {String} description The description text of the pub crawl.
   * @param {String} username The username of the user who is creating the pub crawl.
   * @param {Date} from The start date and time of the pub crawl.
   * @param {Date} to The end date and time of the pub crawl.
   * @param {Boolean} published The pub crawl has been published.
   * @param {ObjectId[]} pubs The list of pub id values in order of the start to end of the pub crawl.
   * @param {Object} optionals An object of optional values that are merged in.
   * @returns {Promise<Object>} Returns an object of Errors, no errors means no entries.
   */
  async create(id, name, description, username, from, to, published, pubs, optionals = {}) {
    throw Error('not implemented');
  }

  /**
   * Allows you to update any or all of the following fields (name, description, from and to) 
   * for a specific pub crawl.
   * 
   * @async
   * @param {ObjectId} crawlId The _id of the document we are updating
   * @param {String|null} name The new name of the pub crawl or null if no change
   * @param {String} description The new description of the pub crawl or null if no change
   * @param {Date} from The new from date and time or null if no change
   * @param {Date} to The new to date and time or null if no change
   * @returns {Promise<Object>} Returns an object of Errors, no errors means no entries
   */
  async update(crawlId, name, description, from, to) {
    throw Error('not implemented');
  }

  /**
   * Flips the published field to true for a specific pub crawl.
   * 
   * @async
   * @param {ObjectId} crawlId The _id of the pub crawl document.
   * @returns {Promise<Object>} Returns a document.
   */
  async publish(crawlId) {
    throw Error('not implemented');
  }

  /**
   * Flips the published field to false for a specific pub crawl.
   * 
   * @async
   * @param {ObjectId} crawlId The _id of the pub crawl document.
   * @returns {Promise<Object>} Returns a document.
   */
  async unpublish(crawlId) {
    throw Error('not implemented');
  }

  /**
   * Update the starting geoJSON location of the pub crawl.
   * 
   * @async
   * @param {ObjectId} crawlId The _id of the pub crawl document.
   * @param {Object} location geoJSON Feature object containing polygon field.
   * @returns {Promise<Object>} Returns a document.
   */
  async updateLocation(crawlId, location) {
    throw Error('not implemented');
  }

  /**
   * Update the possible list of pub crawl locations, as well as the radius of the
   * starting circle for the pub crawl.
   * 
   * @async
   * @param {ObjectId} crawlId The _id of the pub crawl document.
   * @param {Object[]} locations A list of geo feature objects.
   * @param {Number} distance The distance from the center in meters of the starting circle for the pub crawl.
   * @returns {Promise<Object>} Returns a document.
   */
  async updateSearchLocations(crawlId, locations, distance = 1000) {
    throw Error('not implemented');
  }

  /**
   * Add the user as present to a set of pubs. (if the user is not clearly inside one pub
   * it adds it to the ones inside the users probable location circle).
   * 
   * @async
   * @param {ObjectId} id The _id of the pub crawl document.
   * @param {ObjectId} userId The id of the user.
   * @param {ObjectId[]} pubIds The list of pub ids that are involved.
   * @returns {Promise<Object>} Returns a document.
   */
  async addUserToPubs(id, userId, pubIds = []) {
    throw Error('not implemented');
  }

  /**
   * Clear the user from being in any of the pubs in the pub crawl.
   * 
   * @async
   * @param {ObjectId} id The _id of the pub crawl document.
   * @param {ObjectId} userId The id of the user.
   * @returns {Promise<Object>} Returns a document.
   */
  async removeUserFromPubs(id, userId) {
    throw Error('not implemented');
  }

  /**
   * Remove the user to the pub crawls attendant list.
   * 
   * @async
   * @param {ObjectId} id The _id of the pub crawl document.
   * @param {ObjectId} userId The id of the user.
   * @returns {Promise<Object>} Returns a document.
   */
  async removeAttendant(id, userId) {
    throw Error('not implemented');
  }

  /**
   * Add the user to the pub crawls attendant list.
   * 
   * @async
   * @param {ObjectId} id The _id of the pub crawl document.
   * @param {ObjectId} userId The id of the user.
   * @returns {Promise<Object>} Returns a document.
   */
  async addAttendant(id, userId) {
    throw Error('not implemented');
  }

  /**
   * Add a pub id to the pub crawl list.
   * 
   * @async
   * @param {ObjectId} id The _id of the pub crawl document.
   * @param {ObjectId} pubId The pub id to add to the pub crawl pub list.
   * @returns {Promise<Object>} Returns a document.
   */
  async addPub(id, pubId) {
    throw Error('not implemented');
  }

  /**
   * Remove a pub from the list of pub crawl pubs.
   * 
   * @async
   * @param {ObjectId} id The _id of the pub crawl document.
   * @param {ObjectId} pubId The pub id to remove to the pub crawl pub list.
   * @returns {Promise<Object>} Returns a document.
   */
  async removePub(id, pubId) {
    throw Error('not implemented');
  }

  /**
   * Move a specific pub id up in the pub crawl list order.
   * 
   * @async
   * @param {ObjectId} id The _id of the pub crawl document.
   * @param {ObjectId} pubId The pub id to move up on the pub crawl pub list.
   * @returns {Promise<Object>} Returns a document.
   */
  async movePubUp(id, pubId) {
    throw Error('not implemented');
  }

  /**
   * Find a pub crawl by its _id
   * 
   * @async
   * @param {ObjectId} id The _id of the pub crawl document.
   * @returns {Promise<Object>} Returns a document.
   */
  async findOneById(id) {
    throw Error('not implemented');
  }

  /**
   * Locates all the pub crawls, who's starting area intersects with the current
   * location of the user and also are actually active as well as published.
   * 
   * @async
   * @param {Number[]} center An array of 2 elements [latitude, longitude] 
   * @param {Date} timestamp The current date and time
   * @returns {Promise<Object[]>} Returns a list of documents.
   */
  async findIntersectWithPointAndDates(center, timestamp) {
    throw Error('not implemented');
  }

  /**
   * Find a pub crawl by the username
   * 
   * @async
   * @param {String} username The username used to match pub crawl.
   * @param {Number} sort The sort order of the returned pub crawls, default descending order.
   * @returns {Promise<Object[]>} Returns a list of documents.
   */
  async findByUsername(username, sort = { createdOn: -1 }) {
    throw Error('not implemented');
  }

  /**
   * Find the pub crawl that matches the passed in id and is still active.
   * 
   * @async
   * @param {ObjectId} id The _id of the pub crawl document.
   * @param {Date} date The date used to validate if the pub crawl is still active.
   * @returns {Promise<Object>} Returns a document.
   */
  async findOneByIdAndDates(id, date) {
    throw Error('not implemented');
  }

  /**
   * Find a pub crawl by its _id, merge in all the pub documents using $lookup.
   * 
   * @async
   * @param {ObjectId} id The _id of the pub crawl document.
   * @returns {Promise<Object>} Returns a document.
   */
  async findOneByIdFull(id) {
    throw Error('not implemented');
  }

  /**
   * Find a pub crawl by its _id, merge in all users attending using $lookup
   * 
   * @async
   * @param {ObjectId} id The _id of the pub crawl document.
   * @returns {Promise<Object>} Returns a document.
   */
  async findOneByIdWithAttendants(id) {
    throw Error('not implemented');
  }

  /**
   * Find a pub crawl by its _id, merge in all users locations using $lookup
   * 
   * @async
   * @param {ObjectId} id The _id of the pub crawl document.
   * @returns {Promise<Object>} Returns a document.
   */
  async findOneByIdAttendantLocations(id, userId) {
    throw Error('not implemented');
  }

  /**
   * Create the default indexes, skip indexes if they fail
   * 
   * @async
   * @returns {Promise<>}
   */
  async createIndexes() {
    await executeAndSkipException(this.collection.createIndex({ "location.geometry": "2dsphere" }));
    await executeAndSkipException(this.collection.createIndex({ "location.polygon": "2dsphere" }));
  }
}

/**
 * Merges in all the pub documents for the pubIds field
 * Next sort the merged in pub documents in the original order
 *
 * @async 
 * @param {Collection} collection The MongoDB Collection that we run the aggregation against.
 * @param {Object} match The matching stage.
 * @returns {Promise<Object>} Returns a document.
 */
async function findWithLookup(collection, match) {
  throw Error('not implemented');
}

module.exports = { Crawl };