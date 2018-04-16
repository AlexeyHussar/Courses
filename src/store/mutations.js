import * as types from './types';

export default {
  [types.MUTATE_MAKE_TRACK]: (state, payload) => (
    state.breadcrumbs = payload
  ),
};
