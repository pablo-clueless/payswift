import styled from "styled-components/native"
import { View } from "react-native"
import React from "react"

import { background_transparent } from "../assets"
import { RegularText, SmallText } from "./Text"
import { colors } from "../constants"
import { CardProps } from "../types"
import { currency } from "../utils"

const CardBackground = styled.ImageBackground`
	height: 75%;
	width: 100%;
	resize-mode: cover;
	background-color: ${colors.tertiary};
	border-radius: 10px;
	overflow: hidden;
`

const Touchableview = styled.View`
	justify-content: space-between;
	align-items: center;
	flex: 1;
	padding: 20px;
`

const CardRow = styled.View`
	flex-direction: row;
	justify-content: space-between;
	align-items: center;
	width: 100%;
`

const Logo = styled.Image`
	width: 100%;
	height: 80%;
	resize-mode: contain;
	flex: 1;
`

const BalanceCard = (props: CardProps) => {
	return (
		<CardBackground source={background_transparent}>
			<Touchableview>
				<CardRow>
					<RegularText textStyles={{ color: colors.white, fontSize: 24, fontWeight: "800" }}>
						{props?.accountNo}
					</RegularText>
				</CardRow>
				<CardRow>
					<RegularText textStyles={{ fontSize: 28, fontWeight: "700", color: colors.secondary }}>
						{props?.cardNo}
					</RegularText>
				</CardRow>
				<CardRow>
					<View style={{ flex: 3 }}>
						<SmallText
							textStyles={{ marginBottom: 5, color: colors.gray, fontWeight: "300", fontSize: 12 }}>
							Total Balance
						</SmallText>
						<RegularText textStyles={{ marginBottom: 5, color: colors.secondary, fontWeight: "600" }}>
							{currency(props?.currency, props?.balance)}
						</RegularText>
					</View>
					<Logo source={props.logo} />
				</CardRow>
			</Touchableview>
		</CardBackground>
	)
}

export default BalanceCard
