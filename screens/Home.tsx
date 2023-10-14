import { StackScreenProps } from "@react-navigation/stack"
import styled from "styled-components/native"
import { StatusBar } from "expo-status-bar"
import React from "react"

import { CardSection, Container, OptionsSection, TransactionSection } from "../components"
import { BENEFICIARIES, CARD_DATA, TRANSACTIONS, colors } from "../constants"
import { RootStackParamList } from "../navigation/RootStack"

export type Props = StackScreenProps<RootStackParamList, "Home">

const HomeContainer = styled(Container)`
	background-color: ${colors.white};
	width: 100%;
	flex: 1;
`

const Home = ({}: Props) => {
	return (
		<HomeContainer>
			<StatusBar style="light" />
			<CardSection data={CARD_DATA} />
			<TransactionSection data={TRANSACTIONS} />
			<OptionsSection data={BENEFICIARIES} />
		</HomeContainer>
	)
}

export default Home
