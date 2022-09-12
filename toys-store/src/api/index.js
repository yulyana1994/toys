import { categories } from "./fakeApi/categories";
import toys from "./fakeApi/toys";

const fetch = (data) =>
  new Promise((resolve) => {
    window.setTimeout(function () {
      resolve(data);
    }, 2000);
  });

const getById = (id) =>
  new Promise((resolve) => {
    window.setTimeout(function () {
      resolve(toys.find((toy) => toy.id === +id));
    }, 500);
  });

const api = {
  toys: {
    getAll: () => fetch(toys),
    getById: (id) => getById(id),
  },
  categories: {
    getAll: () => fetch(categories),
  },
};

export default api;
