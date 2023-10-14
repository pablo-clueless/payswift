import { useNavigation } from "@react-navigation/native"
import styled from "styled-components/native"
import React from "react"

import type { Props } from "../screens/Home"
import { ScreenWidth } from "./shared"
import { colors } from "../constants"
import { UserProps } from "../types"
import { SmallText } from "./Text"
import { Profile } from "./Header"

const Container = styled.TouchableHighlight`
	height: 130px;
	width: ${ScreenWidth * 0.27}px;
	padding: 10px;
	border-radius: 15px;
	justify-content: space-around;
	margin: 0 10px 10px 0;
`

const User = (props: UserProps) => {
	const navigation = useNavigation<Props["navigation"]>()
	return (
		<Container
			underlayColor={colors.gray}
			style={{ backgroundColor: props.background }}
			onPress={() => navigation.navigate("Beneficiary", { ...props })}>
			<>
				<Profile
					image={props.image}
					imageContainerStyles={{ marginBottom: 10, width: 60, height: 60 }}
				/>
				<SmallText
					textStyles={{ textAlign: "left", color: colors.white, fontSize: 14, fontWeight: "700" }}>
					{props.name}
				</SmallText>
			</>
		</Container>
	)
}

export default User
