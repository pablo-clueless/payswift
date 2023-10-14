import AppLoading from "expo-app-loading"
import React from "react"
import {
	useFonts,
	Inter_300Light,
	Inter_400Regular,
	Inter_500Medium,
	Inter_600SemiBold,
	Inter_700Bold,
} from "@expo-google-fonts/inter"

import { RootStack } from "./navigation"

const App = () => {
	const [loaded] = useFonts({
		Inter_300Light,
		Inter_400Regular,
		Inter_500Medium,
		Inter_600SemiBold,
		Inter_700Bold,
	})

	if (!loaded) return <AppLoading />

	return <RootStack />
}

export default App
