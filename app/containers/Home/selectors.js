import { createSelector } from 'reselect';

/**
 * Direct selector to the home state domain
 */
const selectHomeDomain = () => state => state.Home;

/**
 * Other specific selectors
 */


/**
 * Default selector used by Home
 */

const selectHome = () => createSelector(
  selectHomeDomain(),
  (substate) => substate.toJS()
);

export default selectHome;
export {
  selectHomeDomain,
};
