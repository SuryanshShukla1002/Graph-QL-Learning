import { gql, useLazyQuery, useMutation, useQuery } from "@apollo/client";
import { addUser, getUsers } from "./graphql/query/query";
import { FormEvent, useState } from "react";

const App = () => {
  const [viewUsers, { loading, data, error }] = useLazyQuery(gql(getUsers));
  const [add, { data: addUserResponse }] = useMutation(gql(addUser));
  const [name, setName] = useState("");
  const [Age, setAge] = useState("");
  const [gender, setGender] = useState("");

  console.log(addUserResponse);
  const submitHandler = (e:FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    add({variables:{
      name,
      Age,
      gender
    }})
  }

  if (error) return <h1>Some Error</h1>;
  console.log(data);
  return loading ? (
    <h1>Loading.....</h1>
  ) : (
    <div>
      <h1>WOW</h1>
      {data?.courses[0]?.title}
      <button onClick={() => viewUsers()}>Add Users</button>
      <form onSubmit={submitHandler}>
        <input
          type="text"
          placeholder="name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <input
          type="number"
          placeholder="Age"
          value={Age}
          onChange={(e) => setAge(e.target.value)}
        />
        <input
          type="text"
          placeholder="Gender"
          value={gender}
          onChange={(e) => setGender(e.target.value)}
        />
      </form>
      <button type="submit">Add users </button>
    </div>
  );
};
export default App;
