import { StackScreenProps } from "@react-navigation/stack"
import styled from "styled-components/native"
import { Text, View } from "react-native"
import React from "react"

import { Container, Input, RegularText, SmallButton, SmallText } from "../components"
import { RootStackParamList } from "../navigation/RootStack"
import { colors } from "../constants"

type Props = StackScreenProps<RootStackParamList, "Signin">

const Screen = styled(Container)`
	width: 100%;
	flex: 1;
	align-items: center;
	justify-content: center;
	background-color: ${colors.white};
	padding-vertical: 150px;
`

const Signin = ({ navigation }: Props) => {
	return (
		<Screen>
			<RegularText
				textStyles={{ fontSize: 28, color: colors.primary, fontWeight: "700", marginBottom: 20 }}>
				Welcome back!
			</RegularText>
			<SmallText textStyles={{ fontSize: 12, color: colors.gray }}>Access account</SmallText>
			<View style={{ width: "70%", marginVertical: 50 }}>
				<Input label="Email" />
				<Input label="Password" />
				<SmallButton
					onPress={() => navigation.navigate("Home")}
					buttonStyles={{ width: "100%", paddingVertical: 15, marginVertical: 20 }}
					textStyles={{ color: colors.white }}>
					Signin
				</SmallButton>
			</View>
			<SmallText textStyles={{ fontSize: 14, color: colors.gray }}>
				Don't have an account?{" "}
				<Text onPress={() => navigation.navigate("Signup")} style={{ color: colors.primary }}>
					Register
				</Text>
			</SmallText>
		</Screen>
	)
}

export default Signin
