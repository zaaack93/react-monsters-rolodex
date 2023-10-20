function CardList({items}) {
  return (
    <div>
      {items.map((item, i) => {
          return (
            <h1 key={i}>
              {item.name}, {i}
            </h1>
          );
        })}
    </div>
  );
}

export default CardList;
