/* eslint-disable react/prop-types */
import "./ofertas.css";
const ItemCards = ({ item, offer }) => {
  return (
    <div className="card-offer" key={item.id}>
      <div className="card-image">
        <img src={item.img} alt={item.name} />
      </div>
      <div className="card-parag">
        <div>{item.name}</div>
        {offer ? (
          <div className="price">${item.price}</div>
        ) : (
          <div>${item.price}</div>
        )}

        {offer ? <div className="offer-price">${item.offerPrice}</div> : null}
      </div>
    </div>
  );
};

export default ItemCards;
