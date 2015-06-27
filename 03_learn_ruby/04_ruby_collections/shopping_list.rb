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

def print_list(list)
	puts "List:#{list['name']}"
	puts "----"

	list["items"].each do |item|
		puts "Item: " + item['name']
		puts "Quantity: " + item['quantity'].to_s
		puts "----"
	end
end

list = create_list()
puts list.inspect
list['items'].push(add_list_item())

puts list.inspect
print_list(list)
