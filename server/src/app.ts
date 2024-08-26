import express, { NextFunction } from "express";
import cors from "cors";
import { errorMiddleware } from "./middlewares/error.js";
import morgan from "morgan";
import { ApolloServer } from "@apollo/server";
import { startStandaloneServer } from "@apollo/server/standalone";
import { expressMiddleware } from "@apollo/server/express4";
import dotenv from "dotenv";
// import { schema } from "./graphQL/schema/schema.js";
import { connectDB } from "./database/database.js";
import { graphQLResolver } from "./graphQL/resolvers/resolver.js";
import { connectGraphQl } from "./graphQL/graphql.js";

dotenv.config({ path: "./.env" });

export const envMode = process.env.NODE_ENV?.trim() || "DEVELOPMENT";
const port = Number(process.env.PORT) || 3000;
const mongoURI = process.env.MONGO_URI!;

connectDB(mongoURI);
const graphqlServer = connectGraphQl();
await graphqlServer.start();

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors({ origin: " * ", credentials: true }));
app.use(morgan("dev"));

// for authentication of user 
// const isAdmin = (req: Request, res: Response, next: NextFunction) => {
//   const user = { role: "admin" };

//   if (user.role === "admin") next();
//   else  res.send("Bhag yaha se ");
// };

app.use("/graphql",  expressMiddleware(graphqlServer));

app.get("/", (req, res) => {
  res.send("Hello, World!");
});

// your routes here

// app.get("*", (req, res) => {
//   res.status(404).json({
//     success: false,
//     message: 'Page not found'
//   });
// });

app.use(errorMiddleware);

app.listen(port, () =>
  console.log("Server is working on Port:" + port + " in " + envMode + " Mode.")
);
