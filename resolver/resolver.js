const resolvers = {
    Query: {
        users: () => [
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
    }
}

module.exports = resolvers