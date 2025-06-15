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
      <div className="item-header">
        <h2>
          En esta página encontraras perritos para adoptar❤️ y accesorios para
          ellos🦮.
        </h2>
        <h3>
          La adopción es sin cargo. El valor asociado que ves es el costo de la
          vacuna obligatoria para comenzar a cuidarlo🤲.
        </h3>
      </div>
      <ItemList data={data} />
    </div>
  );
}
export default ItemListContainer;
