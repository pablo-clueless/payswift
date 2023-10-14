import { useNavigation } from "@react-navigation/native"
import styled from "styled-components/native"
import { View } from "react-native"
import React from "react"

import { RegularText, SmallText } from "./Text"
import type { Props } from "../screens/Home"
import { TransactionProps } from "../types"
import { colors } from "../constants"
import { currency } from "../utils"

const TYPE_COLOR = {
	debit: "#FE7070",
	credit: "#96F394",
}

const Row = styled.TouchableOpacity`
	flex-direction: row;
	justify-content: space-between;
	align-items: center;
	width: 100%;
	margin-bottom: 25px;
`

const LeftView = styled.View`
	flex-direction: row;
	justify-content: flex-start;
	align-items: center;
	height: 100%;
	flex: 2;
	gap: 8px;
`

const RightView = styled.View`
	flex: 1;
	flex-direction: row;
	justify-content: flex-end;
	text-align: right;
`

const Transactions = (props: TransactionProps) => {
	const navigation = useNavigation<Props["navigation"]>()

	return (
		<Row onPress={() => navigation.navigate("Transaction", { ...props })}>
			<LeftView>
				<View style={{}}>
					<RegularText textStyles={{ fontSize: 18, color: colors.secondary, textAlign: "left" }}>
						{props.title}
					</RegularText>
					<View style={{ flexDirection: "row", alignItems: "center", gap: 5 }}>
						<SmallText
							textStyles={{
								fontSize: 10,
								textTransform: "uppercase",
								fontWeight: "600",
								color: TYPE_COLOR[props.type],
							}}>
							{props.type}
						</SmallText>
						<SmallText textStyles={{ fontSize: 10 }}>
							{new Date(props.date).toLocaleDateString()}{" "}
							{new Date(props.date).toTimeString().split(" ")[0]}
						</SmallText>
					</View>
				</View>
			</LeftView>
			<RightView>
				<RegularText textStyles={{ fontWeight: "700", fontSize: 18, color: colors.secondary }}>
					{currency(props.currency, props.amount)}
				</RegularText>
			</RightView>
		</Row>
	)
}

export default Transactions
