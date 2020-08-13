import axios from "axios";
import { IState, IEpisode } from "../interfaces";

export const fetchDataAction = async (dispatch: any) => {
  const URL =
    "https://api.tvmaze.com/singlesearch/shows?q=rick-&-morty&embed=episodes";
  const fetchData = await axios.get(URL);
  return dispatch({
    type: "FETCH_DATA",
    payload: fetchData.data._embedded.episodes,
  });
};

export const toggleFavAction = (state: IState, dispatch:any, episode: IEpisode | any) => {
  const isFAv = state.favorites.includes(episode);
  let dispatchObj = {
    type: "ADD_FAV",
    payload: episode,
  };

  if (isFAv) {
    let newFavs = state.favorites.filter(
      (fav: IEpisode) => fav.id !== episode.id
    );

    dispatchObj = {
      type: "REMOVE_FAV",
      payload: newFavs,
    };
  }

  return dispatch(dispatchObj);
};
