import { useCallback } from "react";
import { useDispatch, useSelector } from "react-redux";
import { KittyEntity } from "../shared/kitty";
import { RootState } from "../store";
import { kittiesActions } from "../store/kitties";
import { isDefined } from "../utils/isDefined";
import { useSupabase } from "./useSupabase";

export interface UseKitties {
  add: (data: Omit<KittyEntity, "id">) => void;
  kitties: KittyEntity[];
  fetchAll: () => void;
}

export const useKitties = (): UseKitties => {
  const dispatch = useDispatch();
  const kitties = useSelector((state: RootState) => state.kitties.kitties);
  const supabaseClient = useSupabase();

  const add: UseKitties["add"] = useCallback(
    async (data) => {
      console.log("# Add kitty:", data);
      const {
        data: addedKitty,
        error,
      } = await supabaseClient
        .from<KittyEntity>("kitties")
        .insert(data)
        .single();
      if (isDefined(error)) {
        console.error("! Error occurred while adding a kitty.", error);
      }
      if (isDefined(addedKitty)) {
        dispatch(kittiesActions.addKitty(addedKitty));
      }
    },
    [dispatch, supabaseClient]
  );

  const fetchAll: UseKitties["fetchAll"] = useCallback(async () => {
    console.log("# Fetch kitties:");
    const { data: kitties, error } = await supabaseClient
      .from<KittyEntity>("kitties")
      .select();
    if (isDefined(error)) {
      console.error("! Unknown error occurred while fetching kitties.", error);
      return;
    }
    if (!isDefined(kitties)) {
      console.error(
        "! Error occurred while fetching kitties - no data.",
        error
      );
      return;
    }
    dispatch(kittiesActions.setKitties(kitties));
  }, [dispatch, supabaseClient]);

  return {
    add,
    kitties,
    fetchAll,
  };
};
