//resolvers as in commands for calling
const resolvers = {
    Query: {
        info: () => `This is the API of a Hackernews Clone`,
        users: async (parent, args, context) => {
            return context.prisma.user.findMany();
        },
    },

    Mutation: {
        //like REST API's GET, POST, PUT and DELETE
        //args are arguments that will be implemented as posted
        //parent and info ???
        createUser: async (parent, args, context) => {
            try {
                await context.prisma.user.create({
                    data: {
                        username: args.username,
                        password: args.password,
                    },
                });
            } catch (e) {
                console.log(e)
                throw e
            }
        },

        updateUserName: async (parent, args, context) => {
            const updateUserName = context.prisma.user.update({
                where: { id: args.id },
                data: { username: args.username },
            });
        },

        deleteUser: (parent, args) => {
            const { id } = args;

            const deletingUser = Users.find((a) => a.id == id);
            if (deletingUser != null) {
                Users.find((a, i) => Users.splice(i, 1));
                return deletingUser;
            }
        },
    },
};

module.exports = resolvers;
