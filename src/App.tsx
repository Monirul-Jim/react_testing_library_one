import PrimaryButton from "./components/PrimaryButton";
import Users from "./components/Users/Users";

function App() {
  return (
    <div>
      <h1>Hello World</h1>
      <PrimaryButton />
      <PrimaryButton actionType="Delete" />
      <Users />
    </div>
  );
}

export default App;
