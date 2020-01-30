function sinkMapCreator(execlib, ParentSinkMap) {
  'use strict';
  var sinkmap = require('./websinkmapcreator')(execlib, ParentSinkMap);
  sinkmap.add('crypto', ParentSinkMap.get('crypto'));
  
  return sinkmap;
}

module.exports = sinkMapCreator;
