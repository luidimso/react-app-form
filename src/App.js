import React, {useState} from "react";
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
    <div>
      <AddUser onAddUser={addUserHandler}></AddUser>
      <UserList users={users}></UserList>
    </div>
  );
}

export default App;
