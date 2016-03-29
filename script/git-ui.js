(function(getGitOrgs) {
  'use strict';

$('.getOrgsBtn').on('click', function() {
  getGitOrgs.getOrgsData();
});



window.getGitOrgs = getGitOrgs;

})(window.getGitOrgs || {});
