import React from 'react'
import { Store } from "../store";
import { fetchDataAction, toggleFavAction } from '../store/actions'
import { IEpisodesProps } from "../interfaces";

const EpisodesList = React.lazy<any>(() => import("../components/EpisodesList"));

export default function Home(): JSX.Element {
  const { state, dispatch } = React.useContext(Store);

  React.useEffect(() => {
    state.episodes.length === 0 && fetchDataAction(dispatch);
  });

  const props: IEpisodesProps = {
    episodes: state.episodes,
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
