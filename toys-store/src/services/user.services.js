import { roles } from "../utils/constants";
import httpService from "./http.services";
import localStorageService from "./localStorage.service";

const userEndpoint = "user/";

const userService = {
  get: async () => {
    const { data } = await httpService.get(userEndpoint);
    debugger;
    return data;
  },
  create: async (payload) => {
    const { data } = await httpService.put(userEndpoint + payload.id, {
      ...payload,
      role: roles.user,
    });

    return data;
  },
  getCurrentUser: async () => {
    const { data } = await httpService.get(
      userEndpoint + localStorageService.getUserId()
    );

    return data;
  },
};
export default userService;
