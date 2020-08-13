import React from "react";
import { IEpisode } from "../interfaces";

export default function EpisodesList(props: any): Array<JSX.Element> {
  const { episodes, context, toggleFavAction, favorites } = props;
  const { state, dispatch } = context
  
  return episodes.map((episode: IEpisode) => (
    <section key={episode.id}>
      <img src={episode.image.medium} alt={`Rick and Morty ${episode.name}`} />
      <div>{episode.name}</div>
      <section>
        <div>
          Season: {episode.season} Number: {episode.number}
        </div>
        <button type="button" onClick={() => toggleFavAction(state, dispatch, episode)}>
          {favorites.find((fav: IEpisode) => fav.id === episode.id)
            ? "Unfav"
            : "Fav"}
        </button>
      </section>
    </section>
  ));
}
