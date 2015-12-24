var M = M || {};

M.Storage = (function(){
  var storage = [];
  
  return {
    get: function(name) {
      if (storage.hasOwnProperty(name)) {
        return storage[name];
      }
      
      return null;
    },
    
    set: function(name, val) {
      storage[name] = val;
    }
  }
})();