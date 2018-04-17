import * as types from './breadcrumbsTypes';
import { computedTrack } from '../storeHelpers';

export default {
  [types.MAKE_TRACK]: ({ commit }, payload) => (
    commit(types.MUTATE_MAKE_TRACK, computedTrack(payload))
  ),
};