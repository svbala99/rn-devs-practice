// library imports
import React from 'react';
import { Pressable, StyleSheet, Text, View } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';

// user imports
import { logout } from '../../redux/actions/auth';
import { addCountRequest, subCountRequest } from '../../redux/actions/count';

/**
 * @function Home
 * @returns {JSX}
 */
function Home() {
	const dispatch = useDispatch();
	const countFromRedux = useSelector((state) => state.count.value);

	const styles = StyleSheet.create({
		container: {
			flex: 1,
			backgroundColor: '#DCDCDC',
		},
		logoutBtnContainer: {
			alignItems: 'flex-end',
			alignSelf: 'auto',
			marginTop: 18,
			marginRight: 18,
		},
		logoutBtn: {
			backgroundColor: 'lightpink',
			padding: 8,
			borderRadius: 8,
		},
		remainingScreen: {
			flexDirection: 'row',
			padding: 32,
			width: '100%',
			justifyContent: 'space-around',
			alignItems: 'center',
			flex: 1,
		},
		actionBtn: {
			backgroundColor: 'lightblue',
			borderRadius: 32,
			width: 64,
			height: 64,
			alignItems: 'center',
			justifyContent: 'center',
		},
		buttonText: {
			fontSize: 32,
			color: 'black',
		},
		countNumber: {
			color: 'black',
			fontWeight: 'bold',
			fontSize: 48,
		},
	});

	return (
		<View style={styles.container}>
			{/* logout btn container */}
			<View style={styles.logoutBtnContainer}>
				{/* logout btn */}
				<Pressable onPress={() => dispatch(logout())} style={styles.logoutBtn}>
					<Text>Logout</Text>
				</Pressable>
			</View>

			{/* remaioning part of screen */}
			<View style={styles.remainingScreen}>
				{/* Plus btn */}
				<Pressable
					onPress={() => {
						dispatch(addCountRequest());
					}}
					style={styles.actionBtn}>
					<Text style={styles.buttonText}>+</Text>
				</Pressable>

				{/* Count text */}
				<Text style={styles.countNumber}>{countFromRedux}</Text>

				{/* Minus btn */}
				<Pressable
					onPress={() => {
						dispatch(subCountRequest());
					}}
					style={styles.actionBtn}>
					<Text style={styles.buttonText}>-</Text>
				</Pressable>
			</View>
		</View>
	);
}

// exports
export default Home;
