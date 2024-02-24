import { Context } from "@/app/api/graphql/route";

export const resolvers = {
  Query: {
    novels: async (parent: any, args: any, context: Context) => {
      return await context.prisma.novel.findMany();
    },
  },
};
