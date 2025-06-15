import React, { useEffect, useState } from "react";
import { getProducts } from "../Mock/AsyncMock";
import ItemDetail from "./ItemDetail/ItemDetail";

const ItemDetailContainer = () => {
  const [detail, setDetail] = useState({});
  useEffect(() => {
    getProducts()
      .then((res) => setDetail(res.find((item) => item.id === "01")))
      .catch((error) => console.log(error));
  }, []);

  return (
    <>
      <ItemDetail detail={detail}></ItemDetail>
    </>
  );
};

export default ItemDetailContainer;
