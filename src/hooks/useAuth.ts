import { useCallback } from "react";
import { useDispatch, useSelector } from "react-redux";
import { User, UserEntity } from "../shared/user";
import { authActions, RootState } from "../store";
import { isDefined } from "../utils/isDefined";
import { useSupabase } from "./useSupabase";

export interface UseAuth {
  signIn: (data: { email: string; password: string }) => void;
  signUp: (data: {
    email: string;
    password: string;
    firstName: string;
    lastName: string;
  }) => void;
  user: User | null;
}

export const useAuth = (): UseAuth => {
  const dispatch = useDispatch();
  const supabaseClient = useSupabase();
  const user = useSelector((state: RootState) => state.auth.user);

  const signUp: UseAuth["signUp"] = useCallback(
    async ({ firstName, lastName, email, password }) => {
      console.log("# Sign up:", email, password);
      const { user, error } = await supabaseClient.auth.signUp({
        email,
        password,
      });
      if (error || !isDefined(user)) {
        console.error(`! Creating user's auth failed!`, error);
        return;
      }
      const { data: savedData, error: savingDataError } = await supabaseClient
        .from<UserEntity>("users")
        .update({
          firstName,
          lastName,
        })
        .eq("id", user.id);
      if (!isDefined(savedData)) {
        console.error(
          `! Saving user's additional data filed!`,
          savingDataError
        );
        return;
      }
      const userAdditionalData = savedData[0];
      dispatch(
        authActions.setUser({
          role: user.role,
          id: user.id,
          email: user.email || "--Missing Email--",
          firstName: userAdditionalData.firstName,
          lastName: userAdditionalData.lastName,
        })
      );
    },
    [dispatch, supabaseClient]
  );

  const signIn: UseAuth["signIn"] = useCallback(
    async ({ email, password }) => {
      const { user, error } = await supabaseClient.auth.signIn({
        email,
        password,
      });
      if (error || !isDefined(user)) {
        console.error("! Sign in failed!", error);
        return;
      }
      console.log("###", user.id);
      const { data: foundUser } = await supabaseClient
        .from<UserEntity>("users")
        .select("firstName,lastName")
        .eq("id", user.id)
        .single();
      if (!isDefined(foundUser)) {
        console.error("! Cannot get user additional data after signing in.");
        return;
      }
      console.log("###", foundUser);
      dispatch(
        authActions.setUser({
          role: user.role,
          id: user.id,
          email: user.email || "--Missing email--",
          firstName: foundUser.firstName,
          lastName: foundUser.lastName,
        })
      );
    },
    [dispatch, supabaseClient]
  );

  return {
    signIn,
    signUp,
    user,
  };
};
