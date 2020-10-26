import { Workbox } from 'workbox-window';
import { Router } from 'solid-app-router';

import { App } from './app';
import { createApp } from './utils/bootstrap';

const routes = [
  {
    path: '/',
    component: '/_dist_/pages/home.js',
  },
  {
    path: '/products',
    component: '/_dist_/pages/products.js',
    children: [
      {
        path: '/',
        component: '/_dist_/pages/products/index.js',
      },
      {
        path: '/:id',
        component: '/_dist_/pages/products/[id].js',
      },
    ],
  },
  {
    path: '/about',
    component: '/_dist_/pages/about.js',
  },
];

const app = createApp(App);
app.use(Router, { routes });
const dispose = app.mount('#app');

/**
 * This bits of code is tree-shaken during build
 * It handles HMR by accepting the incomming changes
 * and removing the existing app in place.
 */
if (import.meta.env.MODE === 'development') {
  import.meta.hot.accept();
  import.meta.hot.dispose(dispose);
}

// https://developers.google.com/web/tools/workbox/modules/workbox-window
if (import.meta.env.MODE === 'production' && 'serviceWorker' in navigator) {
  const wb = new Workbox('/sw.js');
  wb.register();
}
