import { StackScreenProps } from "@react-navigation/stack"
import styled from "styled-components/native"
import { StatusBar } from "expo-status-bar"
import React from "react"

import { Container, RegularText, SmallText } from "../components"
import { RootStackParamList } from "../navigation/RootStack"
import { colors } from "../constants"
import { currency } from "../utils"

type Props = StackScreenProps<RootStackParamList, "Transaction">

const TYPE_COLOR = {
	debit: "#FE7070",
	credit: "#96F394",
}

const StyledContainer = styled(Container)`
	background-color: ${colors.white};
	width: 100%;
	padding: 25px;
	flex: 1;
`

const Transaction = ({ route }: Props) => {
	return (
		<StyledContainer>
			<StatusBar style="light" />
			<Container style={{ paddingVertical: 40 }}>
				<RegularText textStyles={{ color: colors.primary, fontSize: 40, marginBottom: 10 }}>
					{currency(route?.params?.currency, route?.params?.amount)}
				</RegularText>
				<RegularText textStyles={{ color: colors.primary, fontSize: 24, marginBottom: 10 }}>
					{route?.params?.title}
				</RegularText>
				<RegularText
					textStyles={{
						color: TYPE_COLOR[route?.params?.type],
						fontSize: 18,
						textTransform: "uppercase",
						marginBottom: 10,
					}}>
					{route?.params?.type}
				</RegularText>
				<SmallText textStyles={{ color: colors.primary }}>
					{new Date(route?.params?.date).toLocaleDateString()}{" "}
					{new Date(route?.params?.date).toTimeString().split(" ")[0]}
				</SmallText>
			</Container>
		</StyledContainer>
	)
}

export default Transaction
