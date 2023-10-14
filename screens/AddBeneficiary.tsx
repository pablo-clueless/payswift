import { StackScreenProps } from "@react-navigation/stack"
import styled from "styled-components/native"
import { StatusBar } from "expo-status-bar"
import React from "react"

import { RootStackParamList } from "../navigation/RootStack"
import { Container } from "../components"
import { colors } from "../constants"

type Props = StackScreenProps<RootStackParamList, "AddBeneficiary">

const StyledContainer = styled(Container)`
	background-color: ${colors.white};
	width: 100%;
	padding: 25px;
	flex: 1;
`

const Beneficiaries = ({}: Props) => {
	return (
		<StyledContainer>
			<StatusBar style="light" />
		</StyledContainer>
	)
}

export default Beneficiaries
