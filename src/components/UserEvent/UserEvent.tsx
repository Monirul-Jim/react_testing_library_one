import { useState } from "react";

const UserEvent = () => {
  const [loveCount, setLoveCount] = useState(0);
  const [userInput, setUserInput] = useState("");

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        minHeight: "100vh",
        backgroundColor: "#f0f0f0",
      }}
    >
      <div
        style={{
          marginBottom: "20px",
          textAlign: "center",
        }}
      >
        <h1
          style={{
            color: "#333",
            fontSize: "2.5rem",
            fontFamily: "sans-serif",
          }}
        >
          Go ahead and type something
        </h1>
        <h2
          style={{
            color: "#666",
            fontSize: "1.5rem",
            fontFamily: "sans-serif",
          }}
        >
          {userInput}
        </h2>
      </div>
      <input
        type="text"
        value={userInput}
        onChange={(e) => setUserInput(e.target.value)}
        style={{
          padding: "10px",
          border: "1px solid #ccc",
          borderRadius: "5px",
          fontSize: "1rem",
          marginBottom: "15px",
        }}
      />
      <h3
        style={{
          color: "#f00",
          fontSize: "1.2rem",
          fontFamily: "sans-serif",
        }}
      >
        Your girlfriend loves you {loveCount} times!
      </h3>
      <div
        style={{
          display: "flex",
          marginTop: "20px",
        }}
      >
        <button
          onClick={() => setLoveCount((count) => ++count)}
          style={{
            padding: "10px 20px",
            backgroundColor: "#4CAF50",
            color: "#fff",
            border: "none",
            borderRadius: "5px",
            marginRight: "10px",
            cursor: "pointer",
          }}
        >
          Make her love you more!
        </button>
        <button
          onClick={() => setLoveCount(0)}
          style={{
            padding: "10px 20px",
            backgroundColor: "#f44336",
            color: "#fff",
            border: "none",
            borderRadius: "5px",
            cursor: "pointer",
          }}
        >
          Reset
        </button>
      </div>
    </div>
  );
};

export default UserEvent;
