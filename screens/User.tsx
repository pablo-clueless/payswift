import { StackScreenProps } from "@react-navigation/stack"
import styled from "styled-components/native"
import { StatusBar } from "expo-status-bar"
import React from "react"

import { Container, RegularText, SmallText } from "../components"
import { RootStackParamList } from "../navigation/RootStack"
import { colors } from "../constants"

type Props = StackScreenProps<RootStackParamList, "User">

const StyledContainer = styled(Container)`
	width: 100%;
	flex: 1;
`

const TopView = styled.View`
	width: 100%;
	flex: 1;
	background-color: ${colors.gray};
	padding: 10px;
`

const BottomView = styled.View`
	width: 100%;
	flex: 5;
`

const User = ({}: Props) => {
	return (
		<StyledContainer>
			<StatusBar style="light" />
			<TopView>
				<RegularText textStyles={{ color: colors.primary, fontSize: 28, marginBottom: 10 }}>
					Samson Okunola
				</RegularText>
				<SmallText textStyles={{ color: colors.white, fontWeight: "900" }}>0025072872</SmallText>
			</TopView>
			<BottomView></BottomView>
		</StyledContainer>
	)
}

export default User
