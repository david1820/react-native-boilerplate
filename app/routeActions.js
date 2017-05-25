import { NavigationActions } from 'react-navigation';

export const resetLoginAction = NavigationActions.reset({
  index: 0,
  actions: [
    NavigationActions.navigate({ routeName: 'MainScreen'})
  ]
});

export const resetLogoutAction = NavigationActions.reset({
  index: 0,
  actions: [
    NavigationActions.navigate({ routeName: 'Login'})
  ]
});
