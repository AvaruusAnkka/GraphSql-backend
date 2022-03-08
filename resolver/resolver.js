let users = [
    {
        id: 1,
        username: 'user01',
        password: '123456',
    },
    {
        id: 2,
        username: 'user02',
        password: '123456',
    },
]

const resolvers = {
    Query: {
        info: () => `This is the API of a Hackernews Clone`,
        users: () => users,
        user: (parent, args) => {
            const { id } = args
            return users.find((a) => a.id == id)
        }
    },
}

module.exports = resolvers