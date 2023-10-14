import { StyleProp, TextStyle } from "react-native"
import styled from "styled-components/native"
import React, { ReactNode } from "react"

import { colors, sizes } from "../constants"

interface Props {
	textStyles?: StyleProp<TextStyle>
	children: ReactNode
}

const StyledSmallText = styled.Text`
	font-size: ${sizes.base}px;
	color: ${colors.gray};
	text-align: left;
`

const StyledRegularText = styled.Text`
	font-size: ${sizes.base}px;
	color: ${colors.gray};
	text-align: left;
`

const StyledBoldText = styled.Text`
	font-size: ${sizes["7xl"]}px;
	color: ${colors.white};
	text-align: left;
`

export const SmallText = (props: Props) => {
	return <StyledSmallText style={props.textStyles}>{props.children}</StyledSmallText>
}

export const RegularText = (props: Props) => {
	return <StyledRegularText style={props.textStyles}>{props.children}</StyledRegularText>
}

export const BoldText = (props: Props) => {
	return <StyledBoldText style={props.textStyles}>{props.children}</StyledBoldText>
}
