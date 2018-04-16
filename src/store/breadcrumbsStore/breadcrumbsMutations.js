import * as types from './breadcrumbsTypes';

export default {
  [types.MUTATE_MAKE_TRACK]: (state, payload) => (
    state.breadcrumbs = payload
  ),
};
