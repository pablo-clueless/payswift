import { master_card, visa } from "../assets"
import { CardProps } from "../types"

export const CARD_DATA: CardProps[] = [
	{
		accountNo: "0025072872",
		balance: 5813500.95,
		id: "a627b0b9-a3fe-4e9d-84cd-2633a306f835",
		logo: master_card,
		alias: "Personal",
		currency: "NGN",
		cardNo: "3581236561274391",
	},
	{
		accountNo: "1002443083",
		balance: 28000.95,
		id: "410db61f-aa0e-4811-bc5d-77dda504b557",
		logo: master_card,
		alias: "USD Travel",
		currency: "USD",
		cardNo: "3557780915565319",
	},
	{
		accountNo: "0121433693",
		balance: 456789.86,
		id: "67e15b59-2f3d-48d8-a727-8ebf33a9b6d4",
		logo: visa,
		alias: "Work Debit",
		currency: "USD",
		cardNo: "6394710641075549",
	},
]
