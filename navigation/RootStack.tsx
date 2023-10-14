import { DefaultTheme, NavigationContainer } from "@react-navigation/native"
import { createStackNavigator } from "@react-navigation/stack"
import { Ionicons } from "@expo/vector-icons"

import { CardProps, TransactionProps, UserProps } from "../types"
import { Greeting, Profile } from "../components"
import { colors } from "../constants"
import { avatar } from "../assets"
import {
	AddBeneficiary,
	Balance,
	Beneficiaries,
	Beneficiary,
	Home,
	Signin,
	Signup,
	Transaction,
	User,
	Welcome,
} from "../screens"

export type RootStackParamList = {
	AddBeneficiary: undefined
	Balance: CardProps
	Beneficiaries: undefined
	Beneficiary: UserProps
	Home: undefined
	Signin: undefined
	Signup: undefined
	Transaction: TransactionProps
	User: undefined
	Welcome: undefined
}

const Stack = createStackNavigator<RootStackParamList>()

const theme = {
	...DefaultTheme,
	colors: {
		...DefaultTheme.colors,
		background: "transparent",
	},
}

const RootStack = () => {
	return (
		<NavigationContainer theme={theme}>
			<Stack.Navigator
				screenOptions={{
					headerStyle: {
						backgroundColor: colors.gray,
						borderBottomWidth: 0,
						shadowColor: "transparent",
						shadowOpacity: 0,
						elevation: 0,
						height: 120,
					},
					headerTintColor: colors.primary,
					headerRight: () => <Profile image={avatar} />,
					headerRightContainerStyle: { paddingRight: 15 },
				}}
				initialRouteName="Welcome">
				<Stack.Screen name="Welcome" component={Welcome} options={{ headerShown: false }} />
				<Stack.Screen
					name="Home"
					component={Home}
					options={{
						headerTitle: (props) => <Greeting main="Hi, Samson" sub="Welcome back" {...props} />,
						headerLeft: () => <></>,
					}}
				/>
				<Stack.Screen name="Signup" component={Signup} options={{ headerShown: false }} />
				<Stack.Screen name="Signin" component={Signin} options={{ headerShown: false }} />
				<Stack.Screen
					name="Balance"
					component={Balance}
					options={({ route }) => ({
						headerTitle: route.params?.alias,
						headerTitleAlign: "center",
						headerBackImage: (props) => (
							<Ionicons name="chevron-back" size={25} color={colors.primary} {...props} />
						),
						headerLeftContainerStyle: { paddingLeft: 0 },
					})}
				/>
				<Stack.Screen
					name="User"
					component={User}
					options={{
						headerTitle: "",
						headerTitleAlign: "center",
						headerBackImage: (props) => (
							<Ionicons name="chevron-back" size={25} color={colors.primary} {...props} />
						),
						headerLeftContainerStyle: { paddingLeft: 0 },
					}}
				/>
				<Stack.Screen
					name="AddBeneficiary"
					component={AddBeneficiary}
					options={{
						headerTitle: "Add Beneficiary",
						headerTitleAlign: "center",
						headerBackImage: (props) => (
							<Ionicons name="chevron-back" size={25} color={colors.primary} {...props} />
						),
						headerLeftContainerStyle: { paddingLeft: 0 },
					}}
				/>
				<Stack.Screen name="Beneficiaries" component={Beneficiaries} options={{ headerShown: false }} />
				<Stack.Screen
					name="Beneficiary"
					component={Beneficiary}
					options={({ route }) => ({
						headerTitle: route.params?.name,
						headerTitleAlign: "center",
						headerBackImage: (props) => (
							<Ionicons name="chevron-back" size={25} color={colors.primary} {...props} />
						),
						headerLeftContainerStyle: { paddingLeft: 0 },
					})}
				/>
				<Stack.Screen
					name="Transaction"
					component={Transaction}
					options={({ route }) => ({
						headerTitle: route.params?.id,
						headerTitleAlign: "center",
						headerBackImage: (props) => (
							<Ionicons name="chevron-back" size={25} color={colors.primary} {...props} />
						),
						headerLeftContainerStyle: { paddingLeft: 0 },
					})}
				/>
			</Stack.Navigator>
		</NavigationContainer>
	)
}

export default RootStack
