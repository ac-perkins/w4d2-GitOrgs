(function(getGitOrgs) {
  'use strict';

  $('form').on('submit', function() {
    event.preventDefault();
    getGitOrgs.user = $('.check-user').val();
    getGitOrgs.ghUser = 'https://api.github.com/users/' + getGitOrgs.user;
    getGitOrgs.ghOrgs = 'https://api.github.com/users/' + getGitOrgs.user + '/orgs';
    getGitOrgs.getOrgsData();
    $('li').remove();
  });

  $('.getOrgsBtn').on('click', function() {
    event.preventDefault();
    getGitOrgs.user = $('.check-user').val();
    getGitOrgs.ghUser = 'https://api.github.com/users/' + getGitOrgs.user;
    getGitOrgs.ghOrgs = 'https://api.github.com/users/' + getGitOrgs.user + '/orgs';
    getGitOrgs.getOrgsData();
    $('li').remove();
  });

  getGitOrgs.renderUser = function renderUser(itemData) {

    var newUserItem = $('<li>')
      .attr( {class: 'user'} )
      .append( $('<img>').attr( {src: itemData.avatar_url, class: 'user_img'} ) )
      .append( $('<p>').text( itemData.name ).attr({class: 'user_name'}) );

    $('.users')
      .append(newUserItem);
  };

  getGitOrgs.renderItem = function renderItem(itemData) {

    var newListItem = $('<li>')
      .append( $('<img>').attr( {src: itemData.avatar_url, class: 'avatar_img'} ) )
      .append( $('<p>').text( itemData.login ).attr({class: 'org_name'}) );

    $('.orgs')
      .append(newListItem);
  };

  window.getGitOrgs = getGitOrgs;

})(window.getGitOrgs || {});
