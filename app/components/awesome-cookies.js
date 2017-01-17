import Ember from 'ember';

export default Ember.Component.extend({
  // Inject the service. 
  cookieMonster: Ember.inject.service(),
  // If you think cookieMonster is too long a name, 
  // you can use something like this: 
  // cm: Ember.inject.service('cookieMonster') 

  // bind an attribute to a cached cookie value 
  isAwesome: Ember.computed.reads('cookieMonster.cookies.isAwesome'),
  // note, this binding is one way and will not update the cookie 
  // if you change it programatically 

  linkText: Ember.computed('cookieMonster.cookies.ab_link_text', function() {
    var abVariant = this.get('cookieMonster.cookies.ab_link_text');
    if (abVariant === 'version1') {
      return "You won't believe what happens when you click HERE!";
    } else {
      return "If you click here THIS will happen to you!";
    }
  }),

  allCookies: Ember.computed('cookieMonster.cookies', function() {
    return JSON.stringify(this.get('cookieMonster.cookies'));
  })
});
