class BankAccount
	attr_reader :name

	def initialize(name)
		@name = name
		@transactions = []
		add_transaction("Beginning Balance", 0)
	end

	def credit(description, amount)
		add_transaction(description, amount)
	end

	def debit(description, amount)
		add_transaction(description, -amount)
	end

	def add_transaction(description, amount)
		@transactions.push(description: description, amount: amount)
	end
end

bank_account = BankAccount.new("Jason")
bank_account.credit("Paycheck", 100)
bank_account.debit("Groceries", 40)
puts bank_account.inspect

# puts bank_account.inspect
# bank_account.add_transaction("Groceries", 40)
