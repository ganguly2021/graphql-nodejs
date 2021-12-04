let users = [];
let user = {};

const resolvers = {
  item: () => {
    return {
      id: 'XYU2546',
      text: 'LED TV',
      timeISO: '15/05/2022',
      time: 1548754568,
      title: 'Electronics',
      deleted: false
    }
  },
  user: () => {
    return {
      firstName: 'Jhon',
      lastName: 'Doe',
      emails: [
        { email: 'abc@gmail.com' },
        { email: 'kbc@yahoo.com' },
        { email: 'xyz@aol.com' },
        { email: 'tpb@netflix.com' }
      ]
    }
  },
  createUser: ({ input }) => {
    user = input

    users = users.concat(user);

    return user
  },

  users: () => users,

  getUser: ({id}) => users.find((item) => item.id === id)
}

module.exports = resolvers;