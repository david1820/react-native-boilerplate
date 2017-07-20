# React Native Boilerplate: Apollo - Redux - React Navigation

## Overview

This is a boilerplate application for building apps with react-native created from react-native init. Using Apollo, Redux and React Navigation. Helps you stay productive by following best practices

Inspired from [React-boilerplate - A highly scalable, offline-first foundation with the best developer experience and a focus on performance and best practices ](https://github.com/react-boilerplate/react-boilerplate).

### Features

| Feature                                | Summary                                                                                                                                                                                                                                                     |
|----------------------------------------|-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
|  Generators 	 | Allows you to auto-generate boilerplate code for common parts of your application, specifically components, containers and routes navigations  |
| Apollo                  	 	 | [Apollo client](http://dev.apollodata.com/): The flexible, production ready GraphQL client for React and native apps.  |
| Redux                  	 	 | [Redux](https://github.com/reactjs/redux) is a predictable state container for JavaScript apps.  |
| Reselect                  	 	 | [Reselect](https://github.com/reactjs/reselect) is a simple “selector” library for Redux.|
| Redux Logger                 	 	 | [Redux Logger ](https://github.com/evgenyrodionov/redux-logger) is a logger for Redux.  |
| React Navigation                  	 	 | [React Navigation](https://reactnavigation.org/) start quickly with built-in navigators that deliver a seamless out-of-the box experience.  |
| Code Linting               			 | JavaScript code linting is done using [ESLint](http://eslint.org) - a pluggable linter tool for identifying and reporting on patterns in JavaScript.

## Change App name
Default name is 'boilerplate' and if you open your project on Xcode or Android Studio this is how you see its name, to change it follow the next steps:
- First make a copy of the boilerplate directory. And go to your newly cloned directory.
- Change the app name at index.ios.js and index.android.js files which is given as a parameter to AppRegistry.
```sh
#change this line
change AppRegistry.registerComponent('boilerplate', () => App);

#to this
AppRegistry.registerComponent('your-desire-app-name', () => App);
```
- Change the name and version accordingly on cloned-directory/package.json
```sh
#change this
{
  "name": "boilerplate",
  "displayName": "boilerplate"
}

#to this
{
  "name": "your-desire-app-name",
  "displayName": "your-desire-app-name"
}
```
- Delete /ios and /android folders which are remaining from your older app.
- To generate /ios and /android folders again run.
```js
react-native upgrade
```
- For any native dependency run.
```js
react-native link
```
- Finally run react-native run-ios or anything you want.


## Getting Started

Clone the repo:
```sh
git clone
cd boilerplate
```
Install dependencies:
```js
npm install

npm run setup
```

Start the app:
```sh
# Start android app
react-native run-android

# Start iOS app
react-native run-ios
```

Generators:
```sh
# Run generator menu
npm run generate

```

## License
This project is licensed under the [MIT License](#)

## Info

David González – david.1820@gmail.com
