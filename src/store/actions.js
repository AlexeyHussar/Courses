import * as types from './types';
import { computedCrumbs } from './storeHelpers';

export default {
  [types.MAKE_TRACK]: ({ commit }, payload) => (
    commit(types.MUTATE_MAKE_TRACK, computedCrumbs[payload])
  ),
}