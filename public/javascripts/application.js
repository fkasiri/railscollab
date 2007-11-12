// Place your application-specific JavaScript functions and classes here
// This file is automatically included by javascript_include_tag :defaults

// Userbox stuff
var userbox_menu_names = ['account_more_', 'projects_more_', 'administration_more_'];
var userbox_current_menu = null;
    
function userbox_reset_menus()
{
	userbox_menu_names.each(function(el_name){
		var el = $(el_name + 'menu');
		if (el && (el != userbox_current_menu))
		{
			el.style.display = 'none';
		}
	});
}

function userbox_menu_switch(icon, el)
{
	var icon_pos = Position.cumulativeOffset(icon);
	
	el.style.left = icon_pos[0] + 'px';
	el.style.top = (icon_pos[1] + icon.offsetHeight) + 'px';
	el.style.display = el.style.display == 'none' ? 'block' : 'none';
	
	if (el.style.display == 'none')
		userbox_current_menu = null;
	else
		userbox_current_menu = el;
}
    
function userbox_init()
{
	var el_names = ['account_more_', 'projects_more_', 'administration_more_'];
	var el_handlers = {
		account_more_: function(evt){
			userbox_menu_switch($('account_more_icon'), $('account_more_menu'));
			userbox_reset_menus();
			Event.stop(evt);
		},
		projects_more_: function(evt){
			userbox_menu_switch($('projects_more_icon'), $('projects_more_menu'));
			userbox_reset_menus();
			Event.stop(evt);
		},
		administration_more_: function(evt){
			userbox_menu_switch($('administration_more_icon'), $('administration_more_menu'));
			userbox_reset_menus();
			Event.stop(evt);
		}
	};
	    
	// Associate event handlers
	userbox_menu_names.each(function(el_name){
		var el = $(el_name + 'menu');
		if (el)
		{
			el.style.display = 'none';
			Event.observe(el_name + 'icon', 'click', el_handlers[el_name], false);
		}
	});
}

function login_toggle_openid()
{
	var toggle_box = $('loginOpenID');
	if (toggle_box.checked)
	{
		$('openid_login').style.display = 'block';
		$('normal_login').style.display = 'none';
	}
	else
	{
		$('openid_login').style.display = 'none';
		$('normal_login').style.display = 'block';
	}
}


// Task form stuff

function task_form_show_add(id)
{
	$('addTaskForm' + id).style.display = 'block';
}

function task_form_hide_add(id)
{
	$('addTaskForm' + id).style.display = 'none';
}

function task_form_loaded_add(id)
{
}

function task_form_loading_add(id)
{
}

// Permissions form stuff
var permissions_form_items = [];

function permissions_form_project_select(id)
{
	$('projectPermissionsBlock' + id).style.display = $('projectPermissions' + id).checked ? 'block' : 'none';
}

function permissions_form_project_select_company(id)
{
	$('projectCompanyUsers' + id).style.display = $('projectCompany' + id).checked ? 'block' : 'none';
}

function permissions_form_project_select_all(id)
{
	if (!$('projectPermissions' + id + 'All').checked)
		return;
	
	// Select all items then!
	permissions_form_items.each(function(permission){
		$('projectPermission' + id + permission).checked = true;
	});
}

function permissions_form_project_select_item(id)
{
	var do_all = true;
	
	// Check to see if everything has been selected
	permissions_form_items.each(function(permission){
		if (!$('projectPermission' + id + permission).checked)
			do_all = false;
	});
	
	$('projectPermissions' + id + 'All').checked = do_all;
}

function permissions_form_items_set(list)
{
	permissions_form_items = list;
}
  	
Event.observe(window, 'load', userbox_init, false);