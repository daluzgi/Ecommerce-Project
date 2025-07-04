import { useEffect, useState } from "react";
import "./ItemListContainer.css";
import { getProducts } from "../../Mock/AsyncMock";
import ItemList from "../ItemList";
import { useParams } from "react-router-dom";

function ItemListContainer({}) {
  const [data, setData] = useState([]);
  const { categoryId } = useParams();

  useEffect(() => {
    getProducts()
      .then((response) => {
        if (categoryId) {
          setData(response.filter((item) => item.category === categoryId));
        } else {
          setData(response);
        }
      })
      .catch((error) => console.log(error));
  }, [categoryId]);

  console.log(data);
  return (
    <div>
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
