const { User, Matchup } = require('../models');
const { signToken, AuthenticationError } = require('../utils/auth')

const resolvers = {
  Query: {
    user: async (parent, args, context) => {
      if (context.user) {
        return User.findOne({ _id: context.user._id }).select('-__v -password');
      }
      throw AuthenticationError;
    },
  },
  Mutation: {
    createUser: async (parent,args) => {
      const user = await User.create(args);
      const token = signToken(user);
      return {user, token};
    },
    login: async (parent, { email, password }) => {
      const user = await User.findOne({ email });

      if (!user) {
        throw new AuthenticationError('No user found with this email address');
      }

      const correctPw = await user.isCorrectPassword(password);

      if (!correctPw) {
        throw new AuthenticationError('Incorrect credentials');
      }

      const token = signToken(user);
      console.log(token);
      return { token, user };
    },
    saveBook: async (parent,args, context) => {
      console.log(context.user)
      if (context.user) {
        const user = await User.findByIdAndUpdate(
          {_id: context.user._id},
          {$push: {savedBooks:{bookID:args.bookID, title:args.title}}},
          {new: true}
          );
          return user;        
      }
      throw AuthenticationError;

    },
    removeBook: async (parent,args,context) => {
      if (context.user) {
        const user = await User.findOneAndUpdate(
          {_id: context.user._id},
          {$pull: { savedBooks: args.bookID}},
          {new: true});
          return user;        
      }
      throw new AuthenticationError('Something went wrong!');
    }
  },
};

module.exports = resolvers;