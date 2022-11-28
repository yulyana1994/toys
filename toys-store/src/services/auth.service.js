// import axios from "axios";
// // import localStorageService from "./localStorage.service";

// const httpAuth = axios.create();

// const key = "AIzaSyCcRSNAIxv-ODIQ-jXdBUPMaAaDEi39BgI";
// const urlReg = `https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=${key}`;
// const urlLog = `https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=${key}`;

// const authService = {
//   register: async ({ email, password, name }) => {
//     const { data } = await httpAuth.post(urlReg, {
//       email,
//       password,
//       name,
//       returnSecureToken: true,
//     });
//     return data;
//   },
//   login: async ({ email, password }) => {
//     const { data } = await httpAuth.post(urlLog, {
//       email,
//       password,
//       returnSecureToken: true,
//     });
//     debugger;
//     return data;
//   },
//   // refresh: async () => {
//   //     const { data } = await httpAuth.post("token", {
//   //         grant_type: "refresh_token",
//   //         refresh_token: localStorageService.getRefreshToken()
//   //     });
//   //     return data;
//   // }
// };

// export default authService;
