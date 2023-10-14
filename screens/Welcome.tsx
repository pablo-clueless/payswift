import { StackScreenProps } from "@react-navigation/stack"
import styled from "styled-components/native"
import { StatusBar } from "expo-status-bar"
import React from "react"

import { BoldText, Container, RegularButton, SmallText } from "../components"
import type { RootStackParamList } from "../navigation/RootStack"
import { background_v1 } from "../assets"
import { colors } from "../constants"

type Props = StackScreenProps<RootStackParamList, "Welcome">

const WelcomeContainer = styled(Container)`
	background-color: ${colors.secondary};
	justify-content: space-between;
	width: 100%;
	height: 100%;
`

const TopSection = styled.View`
	width: 100%;
	flex: 2;
	max-height: 75%;
`

const BottomSection = styled.View`
	width: 100%;
	padding: 25px;
	flex: 1;
`

const TopImage = styled.Image`
	width: 100%;
	height: 100%;
	resize-mode: stretch;
`

const Welcome = ({ navigation }: Props) => {
	return (
		<>
			<StatusBar style="light" />
			<WelcomeContainer>
				<TopSection>
					<TopImage source={background_v1} />
				</TopSection>
				<BottomSection>
					<BoldText textStyles={{ width: "70%", marginBottom: 25 }}>
						Best way to track your money
					</BoldText>
					<SmallText textStyles={{ width: "100%", marginBottom: 25, color: colors.primary }}>
						Fast payment. Easy transfer. Virtual card.
					</SmallText>
					<RegularButton
						onPress={() => navigation.navigate("Signin")}
						textStyles={{ color: `${colors.white}` }}>
						Get Started
					</RegularButton>
				</BottomSection>
			</WelcomeContainer>
		</>
	)
}

export default Welcome
