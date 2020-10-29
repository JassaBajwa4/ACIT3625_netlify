import React, { useEffect, useState } from 'react';
import axios from 'axios';

const API = () => {
  const [data, setData] = useState({
    name: null,
    id: null,
    fullName: null
  });

  useEffect(() => {
    const fetchData = async () => {
      const res = await axios("https://api.github.com/users/hacktivist123/repos");
      setData({ name: res.data[1].name, id: res.data[1].id, fullName: res.data[1].full_name });
      console.log(res.data);
    };
    fetchData();
  }, []);

  return (
    <div>
      {data.name}<br />
      {data.id} <br />
      {data.fullName}
    </div>

  )
};

export default API;
