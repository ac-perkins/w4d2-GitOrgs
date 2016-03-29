(function(getGitOrgs) {
  'use strict';

$('form').on('submit', function() {
  var user = $('.check-user').val();
  event.preventDefault();
  console.log(user);
});


$('.getOrgsBtn').on('click', function() {
  getGitOrgs.getOrgsData();
});


getGitOrgs.renderItem = function renderItem(itemData) {
  $('.orgs')
    .append( $('<li>')
      .append( $('<img>').attr( {src: itemData.avatar_url, class: 'avatar_img'} ) )
      .append( $('<article>').text( itemData.login ).attr({class: 'org_name'}) )
    );
};

window.getGitOrgs = getGitOrgs;

})(window.getGitOrgs || {});
