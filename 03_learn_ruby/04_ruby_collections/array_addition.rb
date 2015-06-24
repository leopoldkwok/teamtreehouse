grocery_list = ["milk", "egg", "bread"]
grocery_list << "carrots"
grocery_list.push("potatoes") #add items at the end of the array
grocery_list.unshift("celery") #add items in the beginning
grocery_list += ["ice cream", "pie"]

puts grocery_list.inspect