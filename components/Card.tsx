import { useNavigation } from "@react-navigation/native"
import styled from "styled-components/native"
import { View } from "react-native"
import React from "react"

import { background_transparent } from "../assets"
import { RegularText, SmallText } from "./Text"
import { currency, maskNumber } from "../utils"
import type { Props } from "../screens/Home"
import { ScreenWidth } from "./shared"
import { colors } from "../constants"
import { CardProps } from "../types"

const CardBackground = styled.ImageBackground`
	height: 75%;
	width: ${ScreenWidth * 0.67}px;
	resize-mode: cover;
	background-color: ${colors.tertiary};
	border-radius: 10px;
	margin-right: 25px;
	overflow: hidden;
`

const CardTouchable = styled.TouchableHighlight`
	height: 100%;
	border-radius: 10px;
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

const Card = (props: CardProps) => {
	const navigation = useNavigation<Props["navigation"]>()

	const handlePress = () => navigation.navigate("Balance", { ...props })

	return (
		<CardBackground source={background_transparent}>
			<CardTouchable underlayColor={colors.tertiary} onPress={handlePress}>
				<Touchableview>
					<CardRow>
						<RegularText textStyles={{ color: colors.white, fontSize: 24, fontWeight: "800" }}>
							******{props.accountNo.substring(6, 10)}
						</RegularText>
					</CardRow>
					<CardRow>
						<RegularText textStyles={{ fontSize: 28, fontWeight: "700", color: colors.secondary }}>
							{maskNumber(props.cardNo)}
						</RegularText>
					</CardRow>
					<CardRow>
						<View style={{ flex: 3 }}>
							<SmallText
								textStyles={{ marginBottom: 5, color: colors.gray, fontWeight: "300", fontSize: 12 }}>
								Total Balance
							</SmallText>
							<RegularText textStyles={{ marginBottom: 5, color: colors.secondary, fontWeight: "600" }}>
								{currency(props.currency, props.balance)}
							</RegularText>
						</View>
						<Logo source={props.logo} />
					</CardRow>
				</Touchableview>
			</CardTouchable>
		</CardBackground>
	)
}

export default Card
