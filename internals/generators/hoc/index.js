/**
 * HOC Generator
 */

const componentExists = require('../utils/componentExists');

module.exports = {
  description: 'Add a High Order Component',
  prompts: [{
    type: 'input',
    name: 'name',
    message: 'What should it be called? (HOCWithSubscription)',
    default: 'Form',
    validate: value => {
      if ((/.+/).test(value)) {
        return componentExists(value) ? 'A High Order Component with this name already exists' : true;
      }

      return 'The name is required';
    },
  }],
  actions: data => {
    // Generate index.js and index.test.js
    const actions = [
      {
        type: 'add',
        path: '../../app/HOC/{{properCase name}}/index.js',
        templateFile: './hoc/hoc.js.hbs',
        abortOnFail: true,
      },
      {
        type: 'add',
        path: '../../app/HOC/{{properCase name}}/styles.js',
        templateFile: './hoc/styles.js.hbs',
        abortOnFail: true,
      },
    ];

    return actions;
  },
};