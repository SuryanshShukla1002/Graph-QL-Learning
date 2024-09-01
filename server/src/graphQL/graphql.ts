import { ApolloServer } from "@apollo/server";
import { graphQLschema } from "./schema/schema.js";
import { graphQLResolver } from "./resolvers/resolver.js";
import { startStandaloneServer } from "@apollo/server/dist/esm/standalone";


export const connectGraphQl = () => {
    const server = new ApolloServer({
        typeDefs: graphQLschema,
        resolvers: graphQLResolver
      });   
      
      return server

      
// startStandaloneServer(server, {
//     listen: {
//       port,
//     },
//   })
//     .then(() => {
//       console.log(
//         "Server is working on port:" + port + " in " + envMode + " Mode. "
//       );
//     })
//     .catch((err) => {
//       console.log(err);
//     });
  
      
//       return server
}