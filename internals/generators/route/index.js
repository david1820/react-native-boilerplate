/**
 * Route Generator
 */
const fs = require('fs');
const componentExists = require('../utils/componentExists');

function reducerExists(comp) {
  try {
    fs.accessSync(`app/containers/${comp}/reducer.js`, fs.F_OK);
    return true;
  } catch (e) {
    return false;
  }
}

function sagasExists(comp) {
  try {
    fs.accessSync(`app/containers/${comp}/sagas.js`, fs.F_OK);
    return true;
  } catch (e) {
    return false;
  }
}

function trimTemplateFile(template) {
  // Loads the template file and trims the whitespace and then returns the content as a string.
  return fs.readFileSync(`internals/generators/route/${template}`, 'utf8').replace(/\s*$/, '');
}

module.exports = {
  description: 'Add a navigation route',
  prompts: [{
    type: 'input',
    name: 'component',
    message: 'Which component should the route show?',
    validate: value => {
      if ((/.+/).test(value)) {
        return componentExists(value) ? true : `"${value}" doesn't exist.`;
      }

      return 'The path is required';
    },
  },],

  // Add the route to the routes.js file above the error route
  // TODO smarter route adding
  actions: data => {
    const actions = [];
      actions.push({
          type: "modify",
          path: '../../app/routes.js',
          pattern:  /(import { StackNavigator } from 'react-navigation';)/g,
          template: '$1\nimport {{ component }} from \'./containers/{{ component }}/index\';',

      });
      actions.push({
          type: "modify",
          path: '../../app/routes.js',
          pattern: /(const Routes = {)/g,
          template: '$1\n  {{ component }}: { screen: {{ component }} },',

      });
    return actions;
  },
};
