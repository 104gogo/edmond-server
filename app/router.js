'use strict';

module.exports = app => {
  const { router, controller } = app;

  router.get('/app', controller.home.index);
  router.post('/transform', controller.transform.index);
};
