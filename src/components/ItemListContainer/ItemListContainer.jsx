import { useEffect, useState } from "react";
import "./ItemListContainer.css";
import { getProducts } from "../../Mock/AsyncMock";
import ItemList from "../ItemList";

function ItemListContainer({ message }) {
  const [data, setData] = useState([]);

  useEffect(() => {
    getProducts()
      .then((response) => setData(response))
      .catch((error) => console.log(error));
  }, []);

  console.log(data);
  return (
    <div>
      <p className="item-message">{message}</p>;
      <ItemList data={data} />
    </div>
  );
}
export default ItemListContainer;
