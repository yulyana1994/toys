import httpService from "./http.services";
import { transformData } from "./helpers";

const categoryEndpoint = "category/";

const categoryService = {
  get: async () => {
    const { data } = await httpService.get(categoryEndpoint);

    return transformData(data);
  },
};
export default categoryService;
