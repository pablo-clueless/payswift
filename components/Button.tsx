import { GestureResponderEvent, StyleProp, TextStyle, ViewStyle } from "react-native"
import styled from "styled-components/native"
import React, { ReactNode } from "react"

import { RegularText, SmallText } from "./Text"
import { colors } from "../constants"

interface Props {
	buttonStyles?: StyleProp<ViewStyle>
	children: ReactNode
	onPress?: ((event: GestureResponderEvent) => void) | undefined
	textStyles?: StyleProp<TextStyle>
}

const StyledSmallButton = styled.TouchableOpacity`
	align-items: center;
	background-color: ${colors.primary};
	padding-horizontal: 16px;
	padding-vertical: 6px;
	border-radius: 4px;
`

const StyledRegularButton = styled.TouchableOpacity`
	align-items: center;
	background-color: ${colors.primary};
	width: 100%;
	padding: 20px;
	border-radius: 4px;
`

export const SmallButton = (props: Props) => {
	return (
		<StyledSmallButton onPress={props.onPress} style={props.buttonStyles}>
			<SmallText textStyles={props.textStyles}>{props.children}</SmallText>
		</StyledSmallButton>
	)
}

export const RegularButton = (props: Props) => {
	return (
		<StyledRegularButton onPress={props.onPress} style={props.buttonStyles}>
			<RegularText textStyles={props.textStyles}>{props.children}</RegularText>
		</StyledRegularButton>
	)
}
