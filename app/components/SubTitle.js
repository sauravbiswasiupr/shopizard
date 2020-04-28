import React from 'react';
import { StyleSheet, Text } from 'react-native';

import { lighterWhite } from '../utils/Colors';

const SubTitle = ({ subtitle }) => (
	<Text style={[styles.titleText, { color: lighterWhite }]}>
		{subtitle}
	</Text>
);

const styles = StyleSheet.create({
	titleText: {
		fontSize: 15,
		fontWeight: '100'
	}
});

export default SubTitle;