def create_list
	print "What is the list name? "
	name = gets.chomp

	hash = {"name" => name, "items" => Array.new}
	return hash
end

def add_list_item
	print "What is the item called? "
	item_name = gets.chomp

	print "How much? "
	quantity = gets.chomp.to_i

	hash = { "name" => item_name, "quantity" => quantity }
	return hash
end

list = create_list()
puts list.inspect
list['items'].push(add_list_item())

puts list.inspect
