import * as Font from "expo-font"

export const useFonts = async () => {
	await Font.loadAsync({
		NunitoLight: require("../assets/fonts/Nunito-Light.ttf"),
		NunitoRegular: require("../assets/fonts/Nunito-Regular.ttf"),
		NunitoMedium: require("../assets/fonts/Nunito-Medium.ttf"),
		NunitoSemiBold: require("../assets/fonts/Nunito-SemiBold.ttf"),
	})
}
