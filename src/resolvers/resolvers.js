// resolves the hello query into actual data
const resolvers = {
  Query: {
    hello: () => "Hello, world!",
  },
};

module.exports = { resolvers };
