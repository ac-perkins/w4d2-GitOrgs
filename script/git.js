(function(getGitOrgs) {
  'use strict';

  // var ghOrgs = 'https://api.github.com/users/jisaacks/orgs';
  var loginAvatar = [];
  getGitOrgs.pushToArray = function pushToArray(element){
    loginAvatar.push( {login: element.login, avatar: element.avatar_url } );
    console.log(loginAvatar);
    return loginAvatar;
  };

  getGitOrgs.getOrgsData = function getOrgsData() {

  $.ajax({
    type: 'GET',
    url: getGitOrgs.ghOrgs,
    dataType: 'json',
    success: function showGHOrgs(data) {
      console.log(data);
      console.log(typeof data);
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
