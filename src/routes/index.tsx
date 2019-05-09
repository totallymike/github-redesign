// TODO: Separate logged in vs logged out routes and pages and stuff.
export const routes = [
  { name: 'home', path: '/' },
  { name: 'login', path: '/login?:return_to' },
  { name: 'repo', path: '/:owner/:repository' },
  { name: 'pulls', path: '/pulls' }
];
