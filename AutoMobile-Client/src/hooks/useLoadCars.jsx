import { useEffect, useState } from "react";

const useLoadCars = () => {
  const [loadCars, setLoadCars] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("cars.json")
      .then((res) => res.json())
      .then((data) => {
        setLoadCars(data);
        setLoading(false);
      });
  }, []);
  return { loadCars, loading };
};

export default useLoadCars;
