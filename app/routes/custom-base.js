import Ember from 'ember';

const {
  isPresent
} = Ember;

export default Ember.Route.extend({
  beforeModel() {
    console.log('haha');
  },

  afterModel(model, transition) {
    isPresent(model) ? console.log(model) : console.log("no model");
  }
});
