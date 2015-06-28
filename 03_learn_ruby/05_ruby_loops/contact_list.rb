contact_list = []

def ask(question, kind="string")
	print question + " "
	answer = gets.chomp
	answer = answer.to_i if kind == "number"
	return answer
end

answer = ask("What is your name?")
puts answer