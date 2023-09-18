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
  Mutation: {
    createUser: async (parent,args) => {
      const user = await User.create(args);
      return user;
    },
  },
};

module.exports = resolvers;