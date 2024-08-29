import { gql, useQuery } from "@apollo/client"
import { getUsers } from "./graphql/query/query";

const App = () => {
const {loading, data , error } = useQuery(gql(getUsers));

if(error) return <h1>Some Error</h1>
console.log(data);
return loading ? (
  <h1>Loading.....</h1>
) : (
    <div>
      <h1>WOW</h1>
    </div>
  )
}
export default App