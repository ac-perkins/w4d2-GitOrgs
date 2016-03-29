(function(getGitOrgs) {
  'use strict';

  var ghOrgs = 'data.json';
  var loginAvatar = [];
  getGitOrgs.pushToArray = function pushToArray(element){
    loginAvatar.push( {login: element.login, avatar: element.avatar_url } );
    console.log(loginAvatar);
    return loginAvatar;
  };

  getGitOrgs.getOrgsData = function getOrgsData() {

  $.ajax({
    type: 'GET',
    url: ghOrgs,
    dataType: 'json',
    success: function showGHOrgs(data) {
      console.log(data);
      data.forEach(getGitOrgs.renderItem
        // loginAvatar.push( {login: element.login, avatar: element.avatar_url } );
        // console.log(loginAvatar);
        // getGitOrgs.addOrgItems(element);
        // console.log(element);
      );


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
