import { ImageSourcePropType } from "react-native"

export interface UserProps {
	id: string
	name: string
	accountNo: string
	image: ImageSourcePropType
	background: string
}

export interface CardProps {
	id: string
	accountNo: string
	balance: number
	cardNo: string
	alias?: string
	logo: ImageSourcePropType
	currency: string
}

export interface CardSectionProps {
	data: CardProps[]
}

export interface TransactionProps {
	id: string
	title: string
	amount: number
	currency: string
	date: string
	type: "credit" | "debit"
}

export interface TransactionSectionProps {
	data: TransactionProps[]
}

export interface TransactionartProps {
	icon: any
	background: string
}

export interface OptionsSectionProps {
	data: UserProps[]
}
