(function(getGitOrgs) {
  'use strict';

  var userPlusAvatar = {};
  var loginAvatar = [];
  getGitOrgs.pushToArray = function pushToArray(element){
    loginAvatar.push( {login: element.login, avatar: element.avatar_url } );
    console.log(loginAvatar);
    return loginAvatar;
  };

  getGitOrgs.getOrgsData = function getOrgsData() {

  $.ajax({
    type: 'GET',
    url: getGitOrgs.ghUser,
    dataType: 'json',
    success: function showGHUser(data) {
      userPlusAvatar.name = data.name;
      userPlusAvatar.avatar_url = data.avatar_url;
      getGitOrgs.renderUser(data);
    },
  });

  $.ajax({
    type: 'GET',
    url: getGitOrgs.ghOrgs,
    dataType: 'json',
    success: function showGHOrgs(data) {
      data.forEach(getGitOrgs.renderItem);
      $('aside')
        .text('');
    },
    error: function handleErrors(xhr) {
      console.log( xhr );

      if (xhr.status === 404) {
        $('aside')
          .text("Please enter a real user's account and try again.");
      }
    },
  });
};

window.getGitOrgs = getGitOrgs;

})(window.getGitOrgs || {});
