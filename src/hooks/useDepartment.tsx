import { useEffect, useState } from "react";

const useDepartment = () => {
  const [items, setItems] = useState([]);

  useEffect(() => {
    fetch("/departments.json")
      .then((res) => res.json())
      .then((data) => setItems(data));
  }, []);

  return items;
};

export default useDepartment;
