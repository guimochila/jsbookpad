import express from 'express';
import { createProxyMiddleware } from 'http-proxy-middleware';
import path from 'path';

import router from './routes/cells';

export const serve = (
  port: number,
  filename: string,
  dir: string,
  useProxy: boolean,
) => {
  const app = express();

  app.use(express.urlencoded({ extended: true }));
  app.use(express.json());

  app.use((req, res, next) => {
    res.locals.dir = dir;
    res.locals.filename = filename;
    next();
  });

  app.use(router);

  if (useProxy) {
    app.use(
      createProxyMiddleware({
        target: 'http://localhost:3000',
        ws: true,
        logLevel: 'silent',
      }),
    );
  } else {
    const packagePath = require.resolve('@jsbookpad/client/build/index.html');
    app.use(express.static(path.dirname(packagePath)));
  }

  return new Promise<void>((resolve, reject) => {
    app.listen(port, resolve).on('error', reject);
  });
};
