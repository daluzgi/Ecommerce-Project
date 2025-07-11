import React, { useEffect, useState } from "react";
import { getProducts } from "../Mock/AsyncMock";
import ItemDetail from "./ItemDetail/ItemDetail";
import { useParams } from "react-router-dom";
import LoaderComponent from "./LoaderComponent";
import { collection, doc, getDoc } from "firebase/firestore";
import { dataBase } from "../service/firebase";
import { Link } from "react-router-dom";

const ItemDetailContainer = () => {
  const [detail, setDetail] = useState({});
  const [cargando, setCargando] = useState(false);
  const [invalid, setInvalid] = useState(false);
  const { id } = useParams();

  //FIREBASE
  useEffect(() => {
    setCargando(true);
    const productCollection = collection(dataBase, "products");
    const docRef = doc(productCollection, id);
    getDoc(docRef)
      .then((res) => {
        if (res.data()) {
          setDetail({
            id: res.id,
            ...res.data(),
          });
        } else {
          setInvalid(true);
        }
      })
      .catch((error) => console.log(error))
      .finally(() => setCargando(false));
  }, []);

  if (invalid) {
    return (
      <div>
        <h1>El producto no existe!</h1>
        <Link to="/" className="btn btn-dark">
          Ir al home
        </Link>
      </div>
    );
  }

  //MOCK LOCAL PROMESA
  // useEffect(() => {
  //   setCargando(true);
  //   getProducts()
  //     .then((res) => setDetail(res.find((item) => item.id === id)))
  //     .catch((error) => console.log(error))
  //     .finally(() => setCargando(false));
  // }, []);

  return (
    <>
      {cargando ? (
        <LoaderComponent />
      ) : (
        <ItemDetail detail={detail}></ItemDetail>
      )}
    </>
  );
};

export default ItemDetailContainer;
