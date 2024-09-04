import { Href } from 'expo-router';

interface Route {
  homeTabs: Href<string>;
  onboarding: Href<string>;
  register: Href<string>;
  signin: Href<string>;
}

const routeNames = {
  homeTabs: '(tabs)',
  onboarding: 'onboarding',
  register: 'register',
  signin: 'signin',
};

export default routeNames;
