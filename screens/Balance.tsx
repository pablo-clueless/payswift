import { StackScreenProps } from "@react-navigation/stack"
import styled from "styled-components/native"
import { StatusBar } from "expo-status-bar"
import React from "react"

import { AmountSection, BalanceSection, ButtonSection, Container } from "../components"
import { RootStackParamList } from "../navigation/RootStack"
import { colors } from "../constants"

export type Props = StackScreenProps<RootStackParamList, "Balance">

const StyledContainer = styled(Container)`
	background-color: ${colors.white};
	width: 100%;
	padding: 25px;
	flex: 1;
`

const Balance = ({ route }: Props) => {
	return (
		<StyledContainer>
			<StatusBar style="light" />
			<AmountSection balance={route?.params?.balance} currency={route?.params?.currency || "NGN"} />
			<BalanceSection {...route?.params} />
			<ButtonSection />
		</StyledContainer>
	)
}

export default Balance
