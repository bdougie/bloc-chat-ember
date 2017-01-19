import Ember from 'ember';

export default Ember.Component.extend({
  // Inject the service. 
  cookieMonster: Ember.inject.service(),
  // If you think cookieMonster is too long a name, 
  // you can use something like this: 
  // cm: Ember.inject.service('cookieMonster') 

  // bind an attribute to a cached cookie value 
  userAvailable: Ember.computed.reads('cookieMonster.cookies.userAvailable'),
  // note, this binding is one way and will not update the cookie 
  // if you change it programatically 

  allCookies: Ember.computed('cookieMonster.cookies', function() {
    return JSON.stringify(this.get('cookieMonster.cookies'));
  })
});
