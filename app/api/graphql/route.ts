// import { startServerAndCreateNextHandler } from "@as-integrations/next";
// import { ApolloServer } from "@apollo/server";
// import { PrismaClient } from "@prisma/client";
// import { resolvers } from "@/graphql/resolver";
// import { typeDefs } from "@/graphql/schema";
// import { prisma } from "@/prisma/db";

// export type Context = {
//   prisma: PrismaClient;
// };

// const apolloServer = new ApolloServer<Context>({
//   typeDefs,
//   resolvers,
// });

// export default startServerAndCreateNextHandler(apolloServer);

import { startServerAndCreateNextHandler } from "@as-integrations/next";
import { ApolloServer } from "@apollo/server";
import { resolvers } from "@/graphql/resolver";
import { typeDefs } from "@/graphql/schema";

// const resolvers = {
//   Query: {
//     hello: () => "world",
//   },
// };

// const typeDefs = `#graphql
//   type Query {
//     hello: String
//   }
// `;
const server = new ApolloServer({
  resolvers,
  typeDefs,
});

const handler = startServerAndCreateNextHandler(server);

export { handler as GET, handler as POST };
