import { createSlice } from "@reduxjs/toolkit";

let rawToken = localStorage.getItem("token");
let token = null;

try {
  // In case an old stringified token is still stored
  token = rawToken ? JSON.parse(rawToken) : null;
} catch {
  // If it's already a plain string, just use it directly
  token = rawToken;
}

const initialState = {
  signupData: null,
  loading: false,
  token: token,
};

const authSlice = createSlice({
  name: "auth",
  initialState: initialState,
  reducers: {
    setSignupData(state, action) {
      state.signupData = action.payload;
    },
    setLoading(state, action) {
      state.loading = action.payload;
    },
    setToken(state, action) {
      state.token = action.payload;
      localStorage.setItem("token", action.payload); // ✅ keep localStorage updated
    },
  },
});

export const { setSignupData, setLoading, setToken } = authSlice.actions;

export default authSlice.reducer;