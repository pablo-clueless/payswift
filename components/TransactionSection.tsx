import styled from "styled-components/native"
// import { Entypo } from "@expo/vector-icons"
import React, { useState } from "react"

import { TransactionSectionProps } from "../types"
import { RegularText, SmallText } from "./Text"
import { colors } from "../constants"
import Transactions from "./Transactions"

type Sort = "default" | "date" | "type"

const Background = styled.View`
	width: 100%;
	padding-horizontal: 10px;
	padding-top: 5px;
	flex: 2;
`

const Row = styled.View`
	flex-direction: row;
	justify-content: space-between;
	align-items: center;
	width: 100%;
`

const List = styled.FlatList`
	width: 100%;
`

const TransactionSection = (props: TransactionSectionProps) => {
	const [sort] = useState<Sort>("default")

	const sorted = (value: Sort) => {
		switch (value) {
			case "date":
				return props.data.sort((a, b) => Date.parse(b.date) - Date.parse(a.date))
			case "type":
				return props.data.sort((a, b) => a.type.localeCompare(b.type))
			case "type":
				return props.data.sort((a, b) => a.type.localeCompare(b.type))
			case "default":
				return props.data.sort((a, b) => a.type.localeCompare(b.type))
			default:
				return props.data
		}
	}

	return (
		<Background>
			<Row style={{ marginBottom: 25 }}>
				<RegularText textStyles={{ fontSize: 24, color: colors.primary, fontWeight: "700" }}>
					Transactions
				</RegularText>
				<SmallText textStyles={{ color: colors.secondary }}>Recent</SmallText>
			</Row>
			<List
				data={sorted(sort)}
				showsVerticalScrollIndicator={false}
				contentContainerStyle={{ paddingBottom: 25 }}
				keyExtractor={({ id }: any) => id.toString()}
				renderItem={({ item }: any) => <Transactions {...item} />}
			/>
		</Background>
	)
}

export default TransactionSection
