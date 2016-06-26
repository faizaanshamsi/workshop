import Ember from 'ember';

const { set } = Ember;

export default Ember.Service.extend({
  init: function() {
    this._super(...arguments);
    set(this, 'currentTime', new Date().valueOf());

    setInterval(() => {
      set(this, 'currentTime', new Date().valueOf());
      console.log('ha')
    }, 2000);
  }
});
