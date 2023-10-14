import styled from "styled-components/native"
import React from "react"

import { RegularText, SmallText } from "./Text"
import BalanceCard from "./BalanceCard"
import { colors } from "../constants"
import { CardProps } from "../types"
import { currency } from "../utils"

type AmountProps = {
	balance: number
	currency: string
}

const AmountSectionBackground = styled.View`
	width: 100%;
	flex: 1;
	align-items: center;
	padding-top: 5px;
`

const BalanceSectionBackground = styled.View`
	width: 100%;
	flex: 2;
	align-items: center;
`

export const AmountSection = (props: AmountProps) => {
	return (
		<AmountSectionBackground>
			<SmallText textStyles={{ color: colors.secondary, marginBottom: 15 }}>Total Balance</SmallText>
			<RegularText textStyles={{ color: colors.primary, fontSize: 32, fontWeight: "800" }}>
				{currency(props.currency, props.balance)}
			</RegularText>
		</AmountSectionBackground>
	)
}

export const BalanceSection = (props: CardProps) => {
	return (
		<BalanceSectionBackground>
			<BalanceCard {...props} />
		</BalanceSectionBackground>
	)
}
