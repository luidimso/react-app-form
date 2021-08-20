import React, {useState, Fragment} from "react";
import AddUser from "./components/Users/AddUser";
import UserList from "./components/Users/UserList";

function App() {
  const [users, setUsers] = useState([]);

  function addUserHandler(username, age) {
    setUsers((prevUsers) => {
      return [...prevUsers, {name: username, age: age, id: Math.random().toString()}];
    });
  }

  return (
    <Fragment>
      <AddUser onAddUser={addUserHandler}></AddUser>
      <UserList users={users}></UserList>
    </Fragment>
  );
}

export default App;
