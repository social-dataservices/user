function createUserService(execlib, ParentService) {
  'use strict';
  var dataSuite = execlib.dataSuite;

  function factoryCreator(parentFactory) {
    return {
      'service': require('./users/serviceusercreator')(execlib, parentFactory.get('service')),
      'user': require('./users/usercreator')(execlib, parentFactory.get('user')),
      'crypto': parentFactory.get('crypto')
    };
  }

  function UserService(prophash) {
    ParentService.call(this, prophash);
  }
  
  ParentService.inherit(UserService, factoryCreator, require('./storagedescriptor'));
  
  UserService.prototype.__cleanUp = function() {
    ParentService.prototype.__cleanUp.call(this);
  };
  UserService.prototype.createStorage = function(storagedescriptor) {
    return ParentService.prototype.createStorage.call(this, storagedescriptor);
  };
  return UserService;
}

module.exports = createUserService;
