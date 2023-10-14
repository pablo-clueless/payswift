import styled from "styled-components/native"
import { Dimensions } from "react-native"

import { colors } from "../constants"

export const Container = styled.View`
	flex: 1;
	align-items: center;
	background-color: ${colors.white};
`

export const ScreenHeight = Dimensions.get("screen").height
export const ScreenWidth = Dimensions.get("screen").width
