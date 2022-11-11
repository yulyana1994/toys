import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import s from "./admin.module.css";
import httpService from "../../services/http.services";
import config from "./../../config.json";
import AddGoodsAdmin from "../../components/AddGoodsAdmin/addGoodsAdmin";
import GoodsAdmin from "../../components/GoodsAdmin/goodsAdmin";

const Admin = () => {
  const [data, setData] = useState({
    id: "",
    name: "",
    categories: "",
    price: "",
    img: "",
  });

  const enterData = async (content) => {
    try {
      const { data } = await httpService.post(config.apiEndpoint, content);
      return data;
    } catch (error) {
      console.log("expected error");
    }
  };

  const getData = async (id) => {
    try {
      const { data } = await httpService.get(config.apiEndpoint);
      return data;
    } catch (error) {
      console.log("expected error");
    }
  };

  useEffect(() => {
    getData().then((data) => setData(data.content));
  }, []);

  const handleChange = (target) => {
    setData((prevState) => ({
      ...prevState,
      [target.name]: target.value,
    }));
  };

  const onSubmit = (data) => {
    enterData(data);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit(data);
  };
  return (
    <div className={s.container}>
      <AddGoodsAdmin handleSubmit={handleSubmit} handleChange={handleChange} />
      <GoodsAdmin />
    </div>
  );
};

export default Admin;
