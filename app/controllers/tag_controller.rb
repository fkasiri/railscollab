=begin
RailsCollab
-----------

=end

class TagController < ApplicationController

  layout 'project_website'

  before_filter :login_required
  before_filter :process_session
  after_filter  :user_track
  
  def project
  	@tag_name = params[:id]
  	tag_object_list = Tag.find_objects(@tag_name, @active_project, !@logged_user.member_of_owner?)
  	
  	@tagged_objects_count = tag_object_list.length
  	@tagged_objects = {
  		:messages => tag_object_list.select { |obj| obj.class == ProjectMessage },
  		:milestones => tag_object_list.select { |obj| obj.class == ProjectMilestone },
  		:task_lists => tag_object_list.select { |obj| obj.class == ProjectTaskList },
  		:files => tag_object_list.select { |obj| obj.class == ProjectFile },
  	}
  end
  
end