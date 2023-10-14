import styled from "styled-components/native"
import React from "react"

import { Container, User } from "../components"
import { BENEFICIARIES } from "../constants"
import { colors } from "../constants"

const StyledContainer = styled(Container)`
	background-color: ${colors.white};
	width: 100%;
	padding: 25px;
	flex: 1;
`
const List = styled.FlatList`
	width: 100%;
	flex: auto;
	min-height: 80%;
	padding-horizontal: 25px;
`

const Beneficiaries = () => {
	return (
		<StyledContainer>
			<List
				data={BENEFICIARIES}
				horizontal={false}
				numColumns={3}
				showsVerticalScrollIndicator={false}
				contentContainerStyle={{ alignItems: "flex-start" }}
				keyExtractor={({ id }: any) => id.toString()}
				renderItem={({ item }: any) => <User {...item} />}
			/>
		</StyledContainer>
	)
}

export default Beneficiaries
