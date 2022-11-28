import { createAction, createSlice } from "@reduxjs/toolkit";
import authService from "../services/auth.service";
import localStorageService from "../services/localStorage.service";
import userService from "../services/user.services";
import history from "../utils/history";

const usersSlise = createSlice({
  name: "users",
  initialState: {
    entities: [],
    isLoading: true,
    error: null,
    role: "",
    auth: "",
    isLoggedIn: false,
  },
  reducers: {
    usersRequested: (state) => {
      state.isLoading = true;
    },
    usersReceved: (state, action) => {
      state.entities = action.payload;
      state.isLoading = false;
    },
    usersRequestFile: (state, action) => {
      state.error = action.payload;
      state.isLoading = false;
    },
    authRequestSuccess: (state, action) => {
      debugger;
      state.auth = action.payload;
      state.isLoggedIn = true;
    },
    authRequestFailed: (state, action) => {
      state.error = action.payload;
    },
    userCreated: (state, action) => {
      if (!Array.isArray(state.entities)) {
        state.entities = [];
      }
      state.entities.push(action.payload);
    },
  },
});

const { reducer: usersReducer, actions } = usersSlise;
const {
  usersRequested,
  usersReceved,
  usersRequestFile,
  authRequestSuccess,
  authRequestFailed,
  userCreated,
} = actions;

const authRequsted = createAction("users/authRequsted");
const userCreateRequested = createAction("users/userCreateRequested");
const createUserFailed = createAction("users/createUserFailed");

export const login = (data) => async (dispatch) => {
  const { email, password } = data;
  dispatch(authRequsted());
  try {
    const data = await authService.login({ email, password });
    const currentUser = await userService.getCurrentUser(data.localId);
    debugger;
    dispatch(authRequestSuccess(currentUser));
    console.log(data);
    localStorageService.setTokens(data);
    history.push("/toys");
  } catch (error) {
    dispatch(authRequestFailed(error.message));
  }
};

export const signUp =
  ({ email, password, name, role }) =>
  async (dispatch) => {
    dispatch(authRequsted());
    try {
      const data = await authService.register({ email, password, name, role });
      localStorageService.setTokens(data);
      dispatch(authRequestSuccess({ userId: data.localId, role: data.role }));
      dispatch(createUser({ id: data.localId, email, name }));
    } catch (error) {
      dispatch(authRequestFailed(error.message));
    }
  };

function createUser(data) {
  return async function (dispatch) {
    dispatch(userCreateRequested());
    try {
      const { content } = await userService.create(data);
      dispatch(userCreated(content));
      history.push("/toys");
    } catch (error) {
      dispatch(createUserFailed(error.message));
    }
  };
}

export const loadUsersList = () => async (dispatch) => {
  dispatch(usersRequested());
  try {
    const data = await userService.get();
    dispatch(usersReceved(data));
  } catch (error) {
    dispatch(usersRequestFile(error.message));
  }
};

export const getCurrentUserData = () => (state) => {
  return state.users.entities
    ? state.users.entities.find((u) => u._id === state.users.auth.userId)
    : null;
};
export default usersReducer;
