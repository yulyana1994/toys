import httpService from "./http.services";

const goodsEndpoint = "goods/";

const goodsService = {
  get: async () => {
    const { data } = await httpService.get(goodsEndpoint);

    return data;
  },
  create: async (payload) => {
    const { data } = await httpService.put(goodsEndpoint + payload.id, payload);
    return data;
  },
};
export default goodsService;
