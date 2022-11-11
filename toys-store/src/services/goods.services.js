import httpService from "./http.services";

const goodsEndpoint = "goods/";

const goodsService = {
  get: async () => {
    const { data } = await httpService.get(goodsEndpoint);

    return data;
  },
};
export default goodsService;
