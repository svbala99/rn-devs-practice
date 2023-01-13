import { StyleSheet, Dimensions } from 'react-native';

let width = Dimensions.get('window').width;

const style = {
	main: {
		flex: 1,
		alignItems: 'center',
		backgroundColor: 'white',
	},
	mainInput: {
		borderWidth: 1,
		//height: 55,
		width: width * 0.9,
		padding: 10,
		margin: 10,
		//alignItems: 'center',
		borderRadius: 9,
	},
	todoList: {
		color: 'black',
		borderWidth: 2,
		borderRadius: 10,
		width: 300,
		//height: 40,
	},
	todoView: {
		height: 'auto',
		alignItems: 'center',
		flexDirection: 'row',
		margin: 10,
		padding: 5,
	},
	removeTodo: {
		//backgroundColor: 'cyan',
		borderRadius: 4,
		alignItems: 'center',
		margin: 4,
	},
};
export const styles = StyleSheet.create(style);
