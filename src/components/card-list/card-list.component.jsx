import "./card-list.style.css";
import CardItem from "../card-item/card-item.component";
function CardList({ items }) {
  return (
    <div className="card-list">
      {items.map((item, i) => {
        return (
          <CardItem item={item} key={item.id} />
        );
      })}
    </div>
  );
}

export default CardList;
