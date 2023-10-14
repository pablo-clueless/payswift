import styled from "styled-components/native"
import React from "react"

import { CardSectionProps } from "../types"
import Card from "./Card"

const CardList = styled.FlatList`
	width: 100%;
	flex: 1;
	paddding-left: 25px;
	paddding-bottom: 15px;
`

const CardSection = (props: CardSectionProps) => {
	return (
		<CardList
			data={props.data}
			horizontal
			showsHorizontalScrollIndicator={false}
			contentContainerStyle={{ paddingRight: 25, alignItems: "center", paddingLeft: 10 }}
			keyExtractor={({ id }: any) => id.toString()}
			renderItem={({ item }: any) => <Card {...item} />}
		/>
	)
}

export default CardSection
