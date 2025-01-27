const FruitList = ({ fruits }: { fruits: string[] }) => {
  return (
    <div>
      <ul>
        {fruits.map((fruit, i) => (
          <li key={i}>{fruit}</li>
        ))}
      </ul>
    </div>
  );
};

export default FruitList;
