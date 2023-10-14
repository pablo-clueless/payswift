import { useNavigation } from "@react-navigation/native"
import BottomSheet from "@gorhom/bottom-sheet"
import React, { useMemo, useRef } from "react"
import styled from "styled-components/native"

import { RegularText, SmallText } from "./Text"
import { OptionsSectionProps } from "../types"
import type { Props } from "../screens/Home"
import { colors } from "../constants"
import User from "./User"

const SectionBackground = styled.View`
	width: 100%;
	padding-top: 15px;
	background-color: #fff;
`

const Row = styled.View`
	flex-direction: row;
	justify-content: space-between;
	align-items: center;
	width: 100%;
	padding-horizontal: 25px;
	margin-bottom: 25px;
`

const List = styled.FlatList`
	width: 100%;
	flex: auto;
	min-height: 80%;
	padding-horizontal: 25px;
`

const TextButton = styled.TouchableOpacity``

const OptionsSection = (props: OptionsSectionProps) => {
	const navigation = useNavigation<Props["navigation"]>()
	const ref = useRef<BottomSheet>(null)

	const snapPoints = useMemo(() => ["5%", "25%", "50%", "65%"], [])

	return (
		<BottomSheet ref={ref} index={2} snapPoints={snapPoints}>
			<SectionBackground>
				<Row>
					<RegularText textStyles={{ fontSize: 18, color: colors.primary }}>Send money to</RegularText>
					<TextButton onPress={() => navigation.navigate("AddBeneficiary")}>
						<SmallText textStyles={{ fontWeight: "700" }}>+ Add</SmallText>
					</TextButton>
				</Row>
				<List
					data={props.data}
					horizontal={false}
					numColumns={3}
					showsVerticalScrollIndicator={false}
					contentContainerStyle={{ alignItems: "flex-start" }}
					keyExtractor={({ id }: any) => id.toString()}
					renderItem={({ item }: any) => <User {...item} />}
				/>
			</SectionBackground>
		</BottomSheet>
	)
}

export default OptionsSection
