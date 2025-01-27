import React, { useState } from "react";

interface User {
  name: string;
  email: string;
}

function Users() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [isChecked, setIsChecked] = useState(false);
  const [users, setUsers] = useState<User[]>([]);

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    if (!isChecked) {
      alert("Please agree to the terms before submitting.");
      return;
    }

    const newUser: User = { name, email };
    setUsers([...users, newUser]);
    setName("");
    setEmail("");
    setIsChecked(false);
  };

  return (
    <div>
      <h1>This is React test</h1>
      <h2>THis is form</h2>
      <p>Enter the form data</p>
      <form onSubmit={handleSubmit} style={formStyles}>
        <div>
          <label htmlFor="name">Name:</label>
          <input
            type="text"
            id="name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
            style={inputStyles}
            placeholder="Enter Your Name..."
          />
        </div>
        <div>
          <label htmlFor="email">Email:</label>
          <input
            type="email"
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            style={inputStyles}
            placeholder="Enter Your Email ..."
          />
        </div>
        <div>
          <label htmlFor="terms">
            <input
              type="checkbox"
              id="terms"
              checked={isChecked}
              onChange={() => setIsChecked(!isChecked)}
            />
            Agree to terms
          </label>
        </div>
        <button type="submit" disabled={!isChecked} style={buttonStyle}>
          Submit
        </button>
      </form>

      {users.length > 0 && (
        <div>
          <h2>Submitted Users</h2>
          <ul>
            {users.map((user) => (
              <li key={user.email}>
                <strong>Name:</strong> {user.name}
                <br />
                <strong>Email:</strong> {user.email}
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
}

const formStyles = {
  maxWidth: "400px",
  margin: "0 auto",
  padding: "20px",
  border: "1px solid #ccc",
  borderRadius: "5px",
};

const inputStyles = {
  width: "100%",
  padding: "10px",
  marginBottom: "15px",
  borderRadius: "3px",
  border: "1px solid #ddd",
};

const buttonStyle = {
  backgroundColor: "#007bff",
  color: "#fff",
  padding: "10px 20px",
  border: "none",
  borderRadius: "3px",
  cursor: "pointer",
};

export default Users;
