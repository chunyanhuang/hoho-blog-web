'use strict';

/**
 * @param {Egg.Application} app - egg application
 */
module.exports = app => {
  const { router, controller } = app;
  router.get('/home', controller.index.getIndexHtml);
  router.get('/', controller.index.index);

  router.get('/test', controller.index.test);
};
