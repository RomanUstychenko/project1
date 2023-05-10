export const isLogin = ({auth}) => auth.isLogin;
export const isRegister = ({auth}) =>( auth.isRegister);
export const getUser = ({auth}) =>  auth.newUser;
// export const getAllUser = ({auth}) => (console.log(auth), auth.users);
export const getLoadingUserStatus = ({auth}) => auth.isLoadingUser;