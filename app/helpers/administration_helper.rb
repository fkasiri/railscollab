=begin
RailsCollab
-----------

=end

module AdministrationHelper
  def administration_tabbed_navigation(current=0)
	 items = [{:id => 0, :title => 'Index', :url => '/administration/index', :selected => false},
		{:id => 1, :title => 'Company', :url => '/administration/company', :selected => false},
		{:id => 2, :title => 'Members', :url => '/administration/members', :selected => false},
		{:id => 3, :title => 'Clients', :url => '/administration/clients', :selected => false},
		{:id => 4, :title => 'Projects', :url => '/administration/projects', :selected => false},
		{:id => 5, :title => 'Configuration', :url => '/administration/configuration', :selected => false},
		{:id => 6, :title => 'Tools', :url => '/administration/tools', :selected => false},
		{:id => 7, :title => 'Upgrade', :url => '/administration/upgrade', :selected => false}]
		
		items[current][:selected] = true
		return items
  end
  
  def administration_crumbs(current, extras=[])
    [{:title => 'Dashboard', :url => '/dashboard'},
	  {:title => 'Administration', :url => '/administration'}] + extras + [{:title => current}]
  end              
end