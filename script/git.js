(function(getGitOrgs) {
  'use strict';

  var ghOrgs = 'https://api.github.com/users/jisaacks/orgs';



  getGitOrgs.getOrgsData = function getOrgsData() {

  $.ajax({
    type: 'GET',
    url: ghOrgs,
    dataType: 'json',
    success: function showGHOrgs(data) {
      console.log( data );

    },
    error: function handleErrors(xhr) {
      console.log( xhr );

      if (xhr.status === 404) {
        $('.message')
          .removeClass('success')
          .addClass('error')
          .text('You messed up. Try a proper GitHub org');
      }
    },
    complete: function requestDone() {
      console.log( 'All done!');
    }
  });
};



window.getGitOrgs = getGitOrgs;

})(window.getGitOrgs || {});
