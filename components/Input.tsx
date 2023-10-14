import { TextInput, TextInputProps } from "react-native"
import styled from "styled-components/native"
import React, { forwardRef } from "react"

import { colors } from "../constants"
import { SmallText } from "./Text"

interface Props extends TextInputProps {
	label?: string
	error?: string
}

const StyledView = styled.View`
	flex-direction: column;
	width: 100%;
	margin-vertical: 10px;
`

const StyledInput = styled.TextInput`
	width: 100%;
	height: 45px;
	border-radius: 4px;
	border-color: ${colors.black};
	border-width: 1px;
	padding-horizontal: 4px;
`

export const Input = forwardRef<TextInput, Props>((props, ref) => {
	const { label, error, ...rest } = props

	return (
		<StyledView>
			<SmallText textStyles={{ fontSize: 12, marginBottom: 4, fontWeight: "600" }}>{label}</SmallText>
			<StyledInput ref={ref} {...rest} cursorColor={"black"} />
		</StyledView>
	)
})
