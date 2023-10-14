const currency = (currencyCode: string, amount: number) => {
	return new Intl.NumberFormat("en-NG", {
		style: "currency",
		currency: currencyCode,
	}).format(amount)
}

const getInitials = (value: string | undefined) => {
	if (value) {
		return value
			.split(" ")
			.map((word) => word[0])
			.join("")
	}
}

const obfuscateString = (value: string) => {
	return value.substring(0, 6).replace(/./g, "*")
}

const maskNumber = (cardNumber: string) => {
	const cleanedNumber = cardNumber.replace(/[^\d]/g, "")
	if (cleanedNumber.length === 0 || cleanedNumber.length % 4 !== 0)
		return "Invalid credit card number"
	const groups = cleanedNumber.match(/.{1,4}/g)
	if (!groups) return "Unable to mask number"
	const maskedNumber = "**** **** **** " + groups[groups.length - 1]

	return maskedNumber
}

export { currency, getInitials, maskNumber, obfuscateString }
