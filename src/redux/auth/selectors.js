export const selectIsLoggedIn = state => state.auth.isLoggedIn;
export const selectIsRefreshing = state => state.auth.selectIsRefreshing;
export const selectIsLoading = state => state.auth.isLoading;
export const selectIsError = state => state.auth.error;
export const selectUser = state => state.auth.user;

//   user: {
//     name: null,
//     email: null,
//   },
//   token: null,
//   isLoggedIn: false,
//   isRefreshing: false,

//   isLoading: false,
//   error: null,
