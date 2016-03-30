(function(getGitOrgs) {
  'use strict';

  $('form').on('submit', function() {
    event.preventDefault();
    getGitOrgs.user = $('.check-user').val();
    getGitOrgs.ghOrgs = 'https://api.github.com/users/' + getGitOrgs.user + '/orgs';
    getGitOrgs.getOrgsData();
    $('li').remove();
    // console.log(getGitOrgs.user);
    // console.log(getGitOrgs.getOrgsData);
  });


  $('.getOrgsBtn').on('click', function() {
    event.preventDefault();
    getGitOrgs.user = $('.check-user').val();
    getGitOrgs.ghOrgs = 'https://api.github.com/users/' + getGitOrgs.user + '/orgs';
    getGitOrgs.getOrgsData();
    $('li').remove();
  });


  getGitOrgs.renderItem = function renderItem(itemData) {

    // var newArticle = $('<article>')
    //   .append( $('<img>').attr( {src: itemData.avatar_url, class: 'avatar_img'} ) );

    var newListItem = $('<li>')
      .append( $('<img>').attr( {src: itemData.avatar_url, class: 'avatar_img'} ) )
      .append( $('<p>').text( itemData.login ).attr({class: 'org_name'}) );

    $('.orgs')
      .append(newListItem);
  };

  window.getGitOrgs = getGitOrgs;

})(window.getGitOrgs || {});
