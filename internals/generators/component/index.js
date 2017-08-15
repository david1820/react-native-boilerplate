/**
 * Component Generator
 */

const componentExists = require('../utils/componentExists');

module.exports = {
  description: 'Add an unconnected component',
  prompts: [{
    type: 'list',
    name: 'type',
    message: 'Select the type of component',
    default: 'Stateless Function',
    choices: () => ['ES6 Class', 'ES6 Class (PureComponent)' ,'Stateless Function'],
  }, {
    type: 'input',
    name: 'name',
    message: 'What should it be called?',
    default: 'Button',
    validate: value => {
      if ((/.+/).test(value)) {
        return componentExists(value) ? 'A component or container with this name already exists' : true;
      }

      return 'The name is required';
    },
  }],
  actions: (data) => {

    let componentTemplate;

    switch(data.type) {
      case 'ES6 Class':
        componentTemplate = './component/es6.js.hbs';
        break;
      case 'ES6 Class (PureComponent)':
        componentTemplate = './component/pure.js.hbs';
        break;
      case 'Stateless Function':
        componentTemplate = './component/stateless.js.hbs';
        break;
      default:
        componentTemplate = './component/es6.js.hbs';
        break;
    }
    
    const actions = [{
      type: 'add',
      path: '../../app/components/{{properCase name}}/index.js',
      templateFile: componentTemplate,
      abortOnFail: true,
    },
    {
        type: 'add',
        path: '../../app/components/{{properCase name}}/styles.js',
        templateFile: './component/styles.js.hbs',
        abortOnFail: true,
    }];
    return actions;
  },
};
