class TodoItem
	attr_reader :name
	
	def initialize(name)
		@name = name
		@complete = false
	end

	def to_s
		if complete?
			"[C] #{name}"
		else
			"[i] #{name}"
		end
	end

	def complete?
		@complete
	end

	def mark_complete!
		@complete = true
	end

	

	def mark_incomplete!
		@complete = false
	end


end