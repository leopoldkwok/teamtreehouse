class BankAccount
	def initialize(name)
		@name = name
		@transactions = []
	end
end

bank_account = BankAccount.new("Jason")
puts bank_account.inspect