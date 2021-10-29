import { useEffect, useState } from "react";

const UseDestinations = () => {
  const [destinations, setDestinations] = useState([]);

  let [loading, setLoading] = useState(true);
  useEffect(() => {
    fetch("https://ancient-forest-11611.herokuapp.com/destinations")
      .then((res) => res.json())
      .then((data) => {
        setDestinations(data);
        setLoading(false);
      });
  }, []);
  return { destinations, setDestinations, loading, setLoading };
};

export default UseDestinations;
