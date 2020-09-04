import { Operation } from "..";
import * as actions from "./actions";

const dummySignInApi = (request: {
  name: string;
  password: string;
}): Promise<string> => {
  return new Promise((res, rej) => {
    setTimeout(() => {
      res("dummy");
    }, 1000);
  });
};

const dummySignOutApi = (request: {}): Promise<void> => {
  return new Promise((res, rej) => {
    setTimeout(() => {
      res();
    }, 1000);
  });
};

export const signIn = (name: string, password: string): Operation => async (
  dispatch
) => {
  try {
    dispatch(actions.signInRequest());
    const token = await dummySignInApi({ name, password });
    dispatch(actions.signInSucceed(token));
  } catch (e) {
    dispatch(actions.signInFailed(e));
  }
};

export const signOut = (): Operation => async (dispatch) => {
  try {
    dispatch(actions.signOutRequest());
    await dummySignOutApi({});
    dispatch(actions.signOutSuceed());
  } catch (e) {
    dispatch(actions.signOutFailed(e));
  }
};
