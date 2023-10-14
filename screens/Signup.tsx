import { StackScreenProps } from "@react-navigation/stack"
import styled from "styled-components/native"
import { Text, View } from "react-native"
import React from "react"

import { Container, Input, RegularText, SmallButton, SmallText } from "../components"
import { RootStackParamList } from "../navigation/RootStack"
import { colors } from "../constants"

type Props = StackScreenProps<RootStackParamList, "Signup">

const Screen = styled(Container)`
	width: 100%;
	flex: 1;
	align-items: center;
	justify-content: center;
	background-color: ${colors.white};
	padding-vertical: 150px;
`

const Signup = ({ navigation }: Props) => {
	return (
		<Screen>
			<RegularText
				textStyles={{ fontSize: 28, color: colors.primary, fontWeight: "700", marginBottom: 10 }}>
				Hello!
			</RegularText>
			<SmallText textStyles={{ fontSize: 12, color: colors.gray }}>Create an account</SmallText>
			<View
				style={{
					flexDirection: "row",
					width: "70%",
					alignItems: "center",
					gap: 40,
					marginVertical: 20,
				}}>
				<SmallButton
					buttonStyles={{ paddingVertical: 14, paddingHorizontal: 20, flex: 1 }}
					textStyles={{ color: colors.white }}>
					Google
				</SmallButton>
				<SmallButton
					buttonStyles={{ paddingVertical: 14, paddingHorizontal: 20, flex: 1 }}
					textStyles={{ color: colors.white }}>
					Facebook
				</SmallButton>
			</View>
			<View style={{ width: "70%", marginVertical: 30 }}>
				<Input label="Name" />
				<Input label="Email" />
				<Input label="Phone" />
				<Input label="Password" />
				<SmallButton
					onPress={() => navigation.navigate("Home")}
					buttonStyles={{ width: "100%", paddingVertical: 15, marginVertical: 20 }}
					textStyles={{ color: colors.white }}>
					Signup
				</SmallButton>
			</View>
			<SmallText textStyles={{ fontSize: 14, color: colors.gray, marginTop: 50 }}>
				Already have an account?{" "}
				<Text onPress={() => navigation.navigate("Signin")} style={{ color: colors.primary }}>
					Signin
				</Text>
			</SmallText>
		</Screen>
	)
}

export default Signup
