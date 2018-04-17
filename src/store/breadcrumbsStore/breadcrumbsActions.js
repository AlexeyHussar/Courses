import * as types from './breadcrumbsTypes';

const computedTrack = (route) => {
  let path = '';
  let crumbs = [];
  let track = route.split('/'); // got an array
  for(let i = 0; i < track.length; i++) {
    let name = track[i];
    path += '/' + name;
    crumbs.push({ path: path });
  };
  return crumbs;
};

export default {
  [types.MAKE_TRACK]: ({ commit }, payload) => (
    commit(types.MUTATE_MAKE_TRACK, computedTrack(payload))
  ),
};