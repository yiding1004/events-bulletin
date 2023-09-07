import { defineConfig } from '@umijs/max';

export default defineConfig({
  antd: {},
  access: {},
  model: {},
  initialState: {},
  request: {},
  layout: {
    title: '@umijs/max',
  },
  routes: [
    {
      path: '/',
      redirect: '/home',
    },
    {
      name: 'Home',
      path: '/home',
      component: './Home',
    },
    {
      name: 'access',
      path: '/access',
      component: './Access',
    },
    {
      name: ' CRUD',
      path: '/table',
      component: './Table',
    },
  ],
  npmClient: 'pnpm',
});

