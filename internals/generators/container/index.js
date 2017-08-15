/**
 * Container Generator
 */

const componentExists = require('../utils/componentExists');

module.exports = {
  description: 'Add a container component',
  prompts: [{
    type: 'input',
    name: 'name',
    message: 'What should it be called?',
    default: 'Form',
    validate: value => {
      if ((/.+/).test(value)) {
        return componentExists(value) ? 'A component or container with this name already exists' : true;
      }

      return 'The name is required';
    },
  },{
    type: 'confirm',
    name: 'wantActionsAndReducer',
    default: true,
    message: 'Do you want an actions/constants/selectors/reducer tupel for this container?',
  },{
    type: 'confirm',
    name: 'wantApolloQueries',
    default: true,
    message: 'Do you want an Apollo Queries/Mutations tupel for this container?',
  }],
  actions: data => {
    // Generate index.js and index.test.js
    const actions = [
      {
        type: 'add',
        path: '../../app/containers/{{properCase name}}/index.js',
        templateFile: './container/index.js.hbs',
        abortOnFail: true,
      },
      {
        type: 'add',
        path: '../../app/containers/{{properCase name}}/styles.js',
        templateFile: './container/styles.js.hbs',
        abortOnFail: true,
      },
      {
        type: "modify",
        path: '../../app/reducer.js',
        pattern: /(import { apolloReducer } from '.\/apolloClient';)/g,
        template: '$1\nimport {{properCase name}} from \'./containers/{{properCase name}}/reducer\';',
      },
      {
        type: "modify",
        path: '../../app/reducer.js',
        pattern: /(return combineReducers\({)/g,
        template: '$1\n    {{properCase name}},',
      },
    ];

    if (data.wantApolloQueries) {
      actions.push({
        type: 'add',
        path: '../../app/containers/{{properCase name}}/queries.js',
        templateFile: './container/queries.js.hbs',
        abortOnFail: true,
      });
    }

    // If they want actions and a reducer, generate actions.js, constants.js,
    // reducer.js and the corresponding tests for actions and the reducer
    if (data.wantActionsAndReducer) {
      // Actions
      actions.push({
        type: 'add',
        path: '../../app/containers/{{properCase name}}/actions.js',
        templateFile: './container/actions.js.hbs',
        abortOnFail: true,
      });

      // Constants
      actions.push({
        type: 'add',
        path: '../../app/containers/{{properCase name}}/constants.js',
        templateFile: './container/constants.js.hbs',
        abortOnFail: true,
      });

      // Selectors
      actions.push({
        type: 'add',
        path: '../../app/containers/{{properCase name}}/selectors.js',
        templateFile: './container/selectors.js.hbs',
        abortOnFail: true,
      });

      // Reducer
      actions.push({
        type: 'add',
        path: '../../app/containers/{{properCase name}}/reducer.js',
        templateFile: './container/reducer.js.hbs',
        abortOnFail: true,
      });
    }

    return actions;
  },
};
