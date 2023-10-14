import { useNavigation } from "@react-navigation/native"
import styled from "styled-components/native"
import React from "react"
import {
	GestureResponderEvent,
	ImageSourcePropType,
	ImageStyle,
	StyleProp,
	TextStyle,
	ViewStyle,
} from "react-native"

import { RegularText, SmallText } from "../components"
import { colors, sizes } from "../constants"
import type { Props } from "../screens/Home"

interface GreetingProps {
	main: string
	sub: string
	mainStyles?: StyleProp<TextStyle>
	subStyles?: StyleProp<TextStyle>
}

interface ProfileProps {
	image: ImageSourcePropType
	imageContainerStyles?: StyleProp<ViewStyle>
	imageStyles?: StyleProp<ImageStyle>
	onPress?: ((event: GestureResponderEvent) => void) | undefined
}

const StyledView = styled.View`
	flex: 1;
	flex-direction: column;
	justify-content: center;
`

const StyledAvatar = styled.TouchableOpacity`
	flex-direction: column;
	height: 50px;
	width: 50px;
	border-radius: 100px;
`

const StyledImage = styled.Image`
	width: 100%;
	height: 100%;
	resize-mode: cover;
	border-radius: 100px;
`

export const Greeting = (props: GreetingProps) => {
	return (
		<StyledView>
			<RegularText textStyles={[props.mainStyles, { color: colors.primary, fontSize: sizes["3xl"] }]}>
				{props.main}
			</RegularText>
			<SmallText textStyles={[props.subStyles, { color: colors.white }]}>{props.sub}</SmallText>
		</StyledView>
	)
}

export const Profile = (props: ProfileProps) => {
	const navigation = useNavigation<Props["navigation"]>()

	return (
		<StyledAvatar style={props.imageContainerStyles} onPress={() => navigation.navigate("User")}>
			<StyledImage source={props.image} style={props.imageStyles} />
		</StyledAvatar>
	)
}
