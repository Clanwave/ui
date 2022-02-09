import { Config } from '@stencil/core';

import { sass } from '@stencil/sass';

export const config: Config = {
  namespace: 'core',
  taskQueue: 'async',
  plugins: [sass()],
  outputTargets: [
    {
      type: 'dist',
      esmLoaderPath: '../loader',
      dir: '../../dist/packages/core/dist',
    },
    {
      type: 'www',
      dir: '../../dist/packages/core/www',
      serviceWorker: null, // disable service workers
    },
  ],
};
