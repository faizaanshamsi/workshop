/* global moment */
import Ember from 'ember';

const { get, inject, observer } = Ember;
const { service } = inject;

export default Ember.Helper.extend({
  time: service(),

  onNewUser: observer('time.currentTime', function() {
    this.recompute();
  }),

  compute(params) {
    let futureTime = moment(params[0]);
    let currentTime = moment(get(this, 'time.currentTime'));
    return currentTime.to(futureTime);
  }
});