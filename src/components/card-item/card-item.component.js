import "./card-item.style.css";

function CardItem({ item }) {
  return (
    <div className="card-container" key={item.id}>
      <img
        src={`https://robohash.org/${item.id}?set=set2&size=180x180`}
        alt={`monster ${item.name}`}
      />
      <h2>{item.name}</h2>
      <p>{item.email}</p>
    </div>
  );
}

export default CardItem;
