import PrimaryButton from "./components/PrimaryButton";
import Users from "./components/Users/Users";
import UserTable from "./components/Users/UserTable";
export const users = [
  { id: 1, name: "Alice", age: 30 },
  { id: 2, name: "Bob", age: 25 },
  { id: 3, name: "Charlie", age: 35 },
];

function App() {
  return (
    <div>
      <h1>Hello World</h1>
      <PrimaryButton />
      <PrimaryButton actionType="Delete" />
      <Users />
      <UserTable users={users} />
    </div>
  );
}

export default App;
