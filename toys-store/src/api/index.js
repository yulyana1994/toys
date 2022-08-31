import { categories } from "./fakeApi/categories";
import toys from "./fakeApi/toys";
const fetch = (data) =>
  new Promise((resolve) => {
    window.setTimeout(function () {
      resolve(data);
    }, 2000);
  });

const api = {
  toys: {
    getAll: () => fetch(toys),
  },
  categories: {
    getAll: () => fetch(categories),
  },
};

export default api;
