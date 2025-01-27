import { useEffect, useState } from "react";

interface User {
  id: number;
  name: string;
  age: number;
}

interface Props {
  users: User[];
}

const UserTable = ({ users }: Props) => {
  const [showMessage, setShowMessage] = useState(false);
  useEffect(() => {
    setTimeout(() => {
      setShowMessage(true);
    }, 1000);
  }, []);
  return (
    <div>
      <table style={{ width: "100%", borderCollapse: "collapse" }}>
        <thead>
          <tr>
            <th style={{ padding: "8px", border: "1px solid #ddd" }}>ID</th>
            <th style={{ padding: "8px", border: "1px solid #ddd" }}>Name</th>
            <th style={{ padding: "8px", border: "1px solid #ddd" }}>Age</th>
          </tr>
        </thead>
        <tbody>
          {users.map((user) => (
            <tr key={user.id}>
              <td style={{ padding: "8px", border: "1px solid #ddd" }}>
                {user.id}
              </td>
              <td style={{ padding: "8px", border: "1px solid #ddd" }}>
                {user.name}
              </td>
              <td style={{ padding: "8px", border: "1px solid #ddd" }}>
                {user.age}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      {showMessage && <div>Welcome Jim</div>}
    </div>
  );
};

export default UserTable;
