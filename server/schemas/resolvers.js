const { User, Matchup } = require('../models');
const { signToken } = require('../utils/auth')

const resolvers = {
  Query: {
    user: async (parent, args, context) => {
      if (context.user) {
        return User.findOne({ _id: context.user._id }).select('-__v -password');
      }
      throw new AuthenticationError('You need to be logged in!');
    },
    // matchups: async (parent, { _id }) => {
    //   const params = _id ? { _id } : {};
    //   return Matchup.find(params);
    // },
  },
  Mutation: {
    createUser: async (parent,args) => {
      const user = await User.create(args);
      const token = signToken(user);
      return {user, token};
    },
  },
};

module.exports = resolvers;