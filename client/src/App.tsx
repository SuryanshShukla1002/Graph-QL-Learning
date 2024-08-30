import { gql, useLazyQuery, useQuery } from "@apollo/client"
import { getUsers } from "./graphql/query/query";

const App = () => {
const [ getCourses, {loading, data , error }] = useLazyQuery(gql(getUsers));

if(error) return <h1>Some Error</h1>
console.log(data);
return loading ? (
  <h1>Loading.....</h1>
) : (
    <div>
      <h1>WOW</h1>

      <button onClick={() => getCourses()}>View Course</button>
    </div>
  )
}
export default App