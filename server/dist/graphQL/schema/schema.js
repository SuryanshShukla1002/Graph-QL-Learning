export const schema = `#graphql

type User {
    _id: ID!
    name: String!,
    email: String!,
    password: String,
    googleId: String,
    role:String,
    avatar:String,
    verified: Boolean!,
    createdAt:String,
    updatedAt:String,
}

type Course {
    _id: ID!
    title: String!,
    description:String!,
    instructor:User!,
    category:String!,
    subCategory:String!,,
    language:String!,,
    price:Int!,
    whatwillyoulearn:[String!]!
}

type Lecture {
    _id: ID!,
    title: String!,
    description:String!,
    isPublished:Boolean!,
    isPreview:Boolean!
    createdAt:String,
    updatedAt:String,
}


type Query {
users:[User]
courses:[Course]
course(id:ID!):[Course]
lectures:[Lecture]
# sections:[Section]
}
`;
