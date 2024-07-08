// we us e resolvers to preprocess the queries
// query to fetch the data
// mutation to update the data
const User = require("./models/userSchema");

const resolvers = {
  Query: {
    getUser: async (_, { id }) => {
      return User.findById(id);
    },
    getUsers: async () => {
      return await User.find();
    },
    searchUsers: async (_, { name }) => {
      return await User.find({ name: new RegExp(name, "i") });
    },
    getLimitedUsers: async (_, { limit, offset }) => {
        return await User.find().skip(offset).limit(limit);
    }  
  },
  Mutation: {
    createUser: async (_, { input }) => {
      return await User.create(input);
    },
    updateUser: async (_, { id, input }) => {
      await User.findByIdAndUpdate(id, input);
    },
    deleteUser: async (_, { id }) => {
      return await User.findByIdAndDelete(id);
    },
    changepass: async (_, { id, password }) => {
      await User.updateOne({ _id: id }, { $set: { password: password } });
    },
  },
  User: {
    email: (parent) => parent.email || "",
  },
};

module.exports = resolvers;