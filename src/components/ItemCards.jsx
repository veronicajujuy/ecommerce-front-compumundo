import "./ofertas.css";
const ItemCards = ({ item }) => {
  return (
    <div className="card-offer" key={item.id}>
      <div className="card-image">
        <img src={item.img} alt={item.name} />
      </div>
      <div className="card-parag">
        <div>{item.name}</div>
        <div className="price">${item.price}</div>
        <div className="offer-price">${item.offerPrice}</div>
      </div>
    </div>
  );
};

export default ItemCards;
