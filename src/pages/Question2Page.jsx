import axios from "axios";
import React, { useEffect, useState } from "react";

const Question2Page = () => {
  const [value, setValue] = useState();
  const [data, setData] = useState([]);
  const [searchData, setSearchData] = useState([]);

  const handleValue = (e) => {
    const v = e.target.value;
    setValue(e.target.value);
    if (v !== "" && v) {
      const mapData = data.map((d) => d.toLowerCase());
      const filterData = mapData.filter((f) => f.includes(v.toLowerCase()));
      setSearchData(filterData);
    } else {
      setSearchData(data);
    }
  };
  useEffect(() => {
    const fetchData = async () => {
      const { data } = await axios.get("https://api.publicapis.org/categories");
      setData(data);
      setSearchData(data);
    };
    fetchData();
  }, []);

  console.log(searchData);
  return (
    <div>
      <input value={value} onChange={handleValue} />
      <ul>
        {searchData.map((d) => {
          return <li>{d}</li>;
        })}
      </ul>
    </div>
  );
};

export default Question2Page;
