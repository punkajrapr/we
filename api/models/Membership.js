/**
 * Membership.js
 *
 * @description :: TODO: You might write a short summary of how this model works and what it represents here.
 * @docs    :: http://sailsjs.org/#!documentation/models
 */

module.exports = {
  schema: true,
  attributes: {

    // requested | member | blocked
    status: {
      type: 'string',
      defaultsTo: 'requested'
    },

    user: {
      model: 'user',
    },

    group: {
      model: 'group',
    },

    // member | moderator | administrator
    role: {
      type: 'string',
      defaultsTo: 'member'
    }
  }

};