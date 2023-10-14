import { useNavigation } from "@react-navigation/native"
import styled from "styled-components/native"
import { Ionicons } from "@expo/vector-icons"
import React from "react"

import type { Props } from "../screens/Balance"
import { RegularButton } from "./Button"
import { colors } from "../constants"

const SectionBackground = styled.View`
	width: 100%;
	flex: 1;
	align-items: center;
	padding-top: 5px;
`

const ButtonSection = () => {
	const navigation = useNavigation<Props["navigation"]>()
	return (
		<SectionBackground>
			<RegularButton
				buttonStyles={{ width: "50%" }}
				textStyles={{ color: colors.white }}
				onPress={() => navigation.goBack()}>
				Cancel <Ionicons size={17} name="card" color={colors.white} />
			</RegularButton>
		</SectionBackground>
	)
}

export default ButtonSection
