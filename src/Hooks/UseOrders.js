import { useEffect, useState } from "react";
import UseAuth from "./UseAuth";

const UseOrders = () => {
  // set state
  const [orders, setOrders] = useState([]);
  const [myOrders, setMyorders] = useState([]);
  let [loading, setLoading] = useState(true);

  // get value from context api
  const { user } = UseAuth();
  useEffect(() => {
    fetch("http://localhost:5000/orders")
      .then((res) => res.json())
      .then((data) => {
        setOrders(data);
        const filterOrders = data.filter((data) => data.email === user?.email);
        setMyorders(filterOrders);
        setLoading(false);
      });
  }, []);
  return { orders, setOrders, myOrders, setMyorders, loading, setLoading };
};

export default UseOrders;
