const { User, Matchup } = require('../models');

const resolvers = {
  Query: {
    user: async () => {
      return User.find({});
    },
    // matchups: async (parent, { _id }) => {
    //   const params = _id ? { _id } : {};
    //   return Matchup.find(params);
    // },
  },
};

module.exports = resolvers;