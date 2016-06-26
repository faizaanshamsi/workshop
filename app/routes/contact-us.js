import Ember from 'ember';

export default Ember.Route.extend({
  queryParams: {
    name: {
      replace: true
    },
    email: {
      replace: true
    }
  },

  resetController(controller, isExiting, transition) {
    if (isExiting) {
      controller.set('name', '');
      controller.set('email', '');
    }
  }
});
