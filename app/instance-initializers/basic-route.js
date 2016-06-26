import customBase from '../routes/custom-base';

export function initialize(appInstance) {
  // define('math', [], function() {
  //   return {
  //     default: Math,
  //     PI: Math.PI
  //   }
  // });
  appInstance.register('route:basic', customBase);
}

export default {
  name: 'basic-route',
  initialize
};
