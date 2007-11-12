=begin
RailsCollab
-----------

=end

class AttachedFile < ActiveRecord::Base
	belongs_to :created_by, :class_name => 'User', :foreign_key => 'created_by_id'
	
	belongs_to :project_file, :foreign_key => 'file_id'
	belongs_to :rel_object, :polymorphic => true
	
	def self.clear_attachment(object, attach_id)
		AttachedFile.delete_all(['rel_object_type = ? AND rel_object_id = ? AND file_id = ?', object.class.to_s, object.id, attach_id])
	end
	
	def self.clear_attachments(object)
		AttachedFile.delete_all(['rel_object_type = ? AND rel_object_id = ?', object.class.to_s, object.id])
	end
	
	def self.clear_files(file_id)
		AttachedFile.delete_all(['file_id = ?', file_id])
	end
end