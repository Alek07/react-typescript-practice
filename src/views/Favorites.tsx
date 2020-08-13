import React from "react";
import { Store } from "../store";
import { toggleFavAction } from '../store/actions'
import { IEpisodesProps } from "../interfaces";

const EpisodesList = React.lazy<any>(() =>
  import("../components/EpisodesList")
);

export default function Favorites(): JSX.Element {
  const { state, dispatch } = React.useContext(Store);

  const props: IEpisodesProps = {
    episodes: state.favorites,
    context: {state, dispatch},
    toggleFavAction,
    favorites: state.favorites,
  };

  return (
    <React.Fragment>
      <React.Suspense fallback={<div>Loading...</div>}>
        <section>
          <EpisodesList {...props} />
        </section>
      </React.Suspense>
    </React.Fragment>
  );
}
