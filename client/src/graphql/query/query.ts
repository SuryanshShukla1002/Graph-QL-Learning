export const getUsers = `#graphql 
query Query{
    sampleUsers {
        name
    }
}
`;

export const addUser = `#graphql
mutation Mutation($name: String!, $age: Int!, $gender: String!){
    newUser(name: $name, age: $age , gender: $$gender)
}


`;
