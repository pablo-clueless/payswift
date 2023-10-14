import { StackScreenProps } from "@react-navigation/stack"
import styled from "styled-components/native"
import React from "react"

import { Container, RegularText, SmallText } from "../components"
import { RootStackParamList } from "../navigation/RootStack"
import { colors } from "../constants"

export type Props = StackScreenProps<RootStackParamList, "Beneficiary">

const StyledContainer = styled(Container)`
	background-color: ${colors.white};
	width: 100%;
	padding: 25px;
	flex: 1;
`

const Image = styled.Image`
	width: 150px;
	height: 150px;
	border-radius: 100px;
	resize-mode: contain;
`

const Beneficiaries = ({ route }: Props) => {
	return (
		<StyledContainer>
			<Image source={route?.params?.image} />
			<RegularText
				textStyles={{
					marginTop: 20,
					fontWeight: "400",
					fontSize: 28,
					color: route?.params?.background,
				}}>
				{route?.params?.name}
			</RegularText>
			<SmallText textStyles={{ marginTop: 20, fontWeight: "900", color: colors.primary }}>
				{route?.params?.accountNo}
			</SmallText>
		</StyledContainer>
	)
}

export default Beneficiaries
