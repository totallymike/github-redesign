export const routes = [
  { name: 'home', path: '/' },
  { name: 'login', path: '/login?:return_to' },
  { name: 'repo', path: '/:owner/:repository' },
  { name: 'pulls', path: '/pulls' }
];
