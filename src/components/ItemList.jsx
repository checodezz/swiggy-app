import { CDN_URL } from "../utils/constant";

const ItemList = ({ items }) => {
  return (
    <div>
      {items.map((item) => (
        <div
          key={item.card.info.id}
          className="p-2 m-2 border-b-2 text-left flex justify-between"
        >
          <div className="w-9/12">
            <div>
              <h5 className="font-bold">{item.card.info.name}</h5>
              <span>
                ₹
                {item.card.info.price / 100 ||
                  item.card.info.defaultPrice / 100}
              </span>
            </div>
            <p>{item.card.info.description}</p>
          </div>

          <div className="p-4 w-3/12">
            <div className="">
              <button className="p-2 bg-black text-white text-center rounded shadow-lg absolute mx-16">
                {" "}
                Add +
              </button>
            </div>
            <img src={CDN_URL + item.card.info.imageId} alt="" />
          </div>
        </div>
      ))}
    </div>
  );
};

export default ItemList;
