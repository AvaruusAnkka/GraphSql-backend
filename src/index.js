const { ApolloServer } = require("apollo-server");
const fs = require("fs");
const path = require("path");

let links = [
    {
        id: "link-0",
        url: "www.howtographql.com",
        description: "Fullstack tutorial for GraphQL",
    },
    {
        id: "link-1",
        url: "www.geekforgeek.com",
        description: "Help",
    },
];

//resolvers as in commands for calling
const resolvers = {
    Query: {
        info: () => `This is the API of a Hackernews Clone`,
        feed: () => links,
        link: (parent, args) => {
            //pullind "id" from args as a inside object variable
            const { id } = args;
            //find function finds it and returns it without modifying variable
            return links.find((a) => a.id == id);
        },
    },

    Mutation: {
        //like REST API post
        //args are arguments that will be implemented as posted
        //parent ???
        post: (parent, args) => {
            const idCount = links.length;

            const link = {
                //"" or '' will not work, it has to be `` for variables to work
                id: `link-${idCount++}`,
                description: args.description,
                url: args.url,
            };
            //pushing to array
            links.push(link);
            return link;
        },

        updateLink: (parent, args) => {
            const { id } = args,
                { description } = args,
                { url } = args;

            return links.find((a) => {
                if (a.id == id) {
                    if (url != null) {
                        a.url = url;
                    }
                    if (description != null) {
                        a.description = description;
                    }
                    //somehow return true is a must here, then it will send update object
                    return true;
                }
            });
        },

        deleteLink: (parent, args) => {
            const { id } = args;

            const deletingLink = links.find((a) => a.id == id);
            if (deletingLink != null) {
                links.find((a, i) => links.splice(i, 1));
                return deletingLink;
            }
        },
    },
    Link: {
        id: (parent) => parent.id,
        description: (parent) => parent.description,
        url: (parent) => parent.url,
    },
};

const server = new ApolloServer({
    //for defining schemas in a folder
    typeDefs: fs.readFileSync(path.join(__dirname, "schema.graphql"), "utf8"),
    resolvers,
});

server.listen().then(({ url }) => console.log(`Server is running on ${url}`));
