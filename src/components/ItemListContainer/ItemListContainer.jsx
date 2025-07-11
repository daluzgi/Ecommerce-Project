import { useEffect, useState } from "react";
import "./ItemListContainer.css";
import { getProducts } from "../../Mock/AsyncMock";
import ItemList from "../ItemList";
import { useParams } from "react-router-dom";
import LoaderComponent from "../LoaderComponent";
import { collection, getDocs, query, where } from "firebase/firestore";
import { dataBase } from "../../service/firebase";

function ItemListContainer(props) {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);
  const { categoryId } = useParams();

  //FIREBASE
  useEffect(() => {
    setLoading(true);
    //Conectarnos con nuestra coleccion
    const productsCollection = categoryId
      ? query(
          collection(dataBase, "products"),
          where("category", "==", categoryId)
        )
      : collection(dataBase, "products");
    //Pedir los datos
    getDocs(productsCollection)
      .then((res) => {
        //Limpiar los datos para el uso
        //console.log(res.docs);
        const list = res.docs.map((doc) => {
          return {
            id: doc.id,
            ...doc.data(),
          };
        });
        setData(list);
        console.log(list);
      })
      .catch((error) => console.log(error))
      .finally(() => setLoading(false));
  }, [categoryId]);

  //PROMESA LOCAL ASOCIADA AL MOCK
  // useEffect(() => {
  //   setLoading(true);
  //   getProducts()
  //     .then((response) => {
  //       if (categoryId) {
  //         setData(response.filter((item) => item.category === categoryId));
  //       } else {
  //         setData(response);
  //       }
  //     })
  //     .catch((error) => console.log(error))
  //     .finally(() => setLoading(false));
  // }, [categoryId]);

  //console.log(data);
  return (
    <div>
      {loading ? (
        <LoaderComponent />
      ) : (
        <div>
          <div className="item-header">
            <h2>
              En esta página encontraras perritos para adoptar❤️ y accesorios
              para ellos🦮.
            </h2>
            <h3>
              La adopción es sin cargo. El valor asociado que ves es el costo de
              la vacuna obligatoria para comenzar a cuidarlo🤲.
            </h3>
          </div>
          <ItemList data={data} />
        </div>
      )}
    </div>
  );
}
export default ItemListContainer;
