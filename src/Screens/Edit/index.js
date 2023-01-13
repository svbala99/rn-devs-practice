import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { EditTodo } from '../../redux/actions/addnotes';
import { styles } from './style';
import {
	Text,
	View,
	TextInput,
	Button,
	FlatList,
	TouchableOpacity,
	Image,
	Alert,
} from 'react-native';
import { useRoute } from '@react-navigation/native';

const Edit = ({ navigation }) => {
	const route = useRoute();
	const details = route.params.data;
	const [title, setTitle] = useState(details[0]);
	const [todoValue, setTodoValue] = useState(details[1]);
	const dispatch = useDispatch();
	// const data = useSelector((state) => state);
	// const todos = data.addnote.todos;
	const updateTodo = () => {
		dispatch(
			EditTodo({
				title: title,
				description: todoValue,
				index: route.params.index,
			}),
		);
		setTodoValue('');
		setTitle('');
		navigation.navigate('Home');
	};

	return (
		<View style={styles.main}>
			<TextInput
				style={styles.mainInput}
				onChangeText={setTitle}
				placeholder={'Title'}
				value={title}
			/>
			<TextInput
				style={styles.mainInput}
				onChangeText={setTodoValue}
				placeholder={'Description'}
				value={todoValue}
				multiline
				numberOfLines={4}
			/>
			<Button name='increase' title='Update' onPress={updateTodo} />
		</View>
	);
};

export default Edit;
