function App() {
  return (
    <div>
      <h1>Hello World</h1>
      <button
        style={{
          backgroundColor: "#4CAF50",
          border: "none",
          color: "white",
          padding: "15px 32px",
          textAlign: "center",
          textDecoration: "none",
          display: "inline-block",
          fontSize: "16px",
          borderRadius: "4px",
          cursor: "pointer",
          marginRight: "20px",
        }}
      >
        Primary Button
      </button>
      <button
        style={{
          backgroundColor: "#f44336",
          border: "none",
          color: "white",
          padding: "15px 32px",
          textAlign: "center",
          textDecoration: "none",
          display: "inline-block",
          fontSize: "16px",
          borderRadius: "4px",
          cursor: "pointer",
        }}
      >
        Delete
      </button>
    </div>
  );
}

export default App;
