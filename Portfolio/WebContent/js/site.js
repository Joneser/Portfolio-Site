function homeSelected() {
	$('#CONTACT_VIEW').hide();
	$('#CONTACT_LINK').removeClass('selected_nav_item');
	$('#ABOUT_VIEW').hide();
	$('#ABOUT_LINK').removeClass('selected_nav_item');
	$('#HOME_VIEW').show();
	$('#HOME_LINK').addClass('selected_nav_item');
}

function aboutSelected() {
	$('#CONTACT_VIEW').hide();
	$('#CONTACT_LINK').removeClass('selected_nav_item');
	$('#HOME_VIEW').hide();
	$('#HOME_LINK').removeClass('selected_nav_item');
	$('#ABOUT_VIEW').show();
	$('#ABOUT_LINK').addClass('selected_nav_item');
}

function contactSelected() {
	$('#ABOUT_VIEW').hide();
	$('#ABOUT_LINK').removeClass('selected_nav_item');
	$('#HOME_VIEW').hide();
	$('#HOME_LINK').removeClass('selected_nav_item');
	$('#CONTACT_VIEW').show();
	$('#CONTACT_LINK').addClass('selected_nav_item');
}