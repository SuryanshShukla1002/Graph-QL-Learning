import { gql, useLazyQuery, useMutation, useQuery } from "@apollo/client"
import { addUser, getUsers } from "./graphql/query/query";

const App = () => {
const [ viewUsers, {loading, data , error }] = useLazyQuery(gql(getUsers));

const [add, {data: addUserResponse} ] = useMutation(gql(addUser))
console.log(addUserResponse);


if(error) return <h1>Some Error</h1>
console.log(data);
return loading ? (
  <h1>Loading.....</h1>
) : (
    <div>
      <h1>WOW</h1>
      {data?.courses[0]?.title}
      <button onClick={() => viewUsers()}>View Users</button>
      <button onClick={() => add({variables:{}})}>Add Users</button>
    </div>
  )
}
export default App