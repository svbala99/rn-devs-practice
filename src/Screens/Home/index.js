import React, { useState } from 'react';
//import { Pressable, StyleSheet, Text, View } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import { AddTodo, RemoveTodo, EditTodo } from '../../redux/actions/addnotes';
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

const Home = ({ navigation }) => {
	const [title, setTitle] = useState('');
	const [todoValue, setTodoValue] = useState('');
	const [index, setIndex] = useState();
	const dispatch = useDispatch();

	const data = useSelector((state) => state);
	const todos = data.addnote.todos;
	//console.log(todos);
	const addTodo = () => {
		dispatch(AddTodo({ title: title, description: todoValue }));
		setTodoValue('');
		setTitle('');
	};
	const removeTodo = (item) => {
		const todoIndex = todos.indexOf(item);
		if (todoIndex > -1) {
			Alert.alert('Alert Message', 'Are you sure to delete this To-Do', [
				{ text: 'NO', style: 'cancel' },
				{ text: 'YES', onPress: () => dispatch(RemoveTodo(item)) },
			]);
		} else {
			alert(`${todoValue} is not in the Todo List`);
		}
	};

	const renderTodoList = () => {
		return (
			<FlatList
				data={todos}
				renderItem={({ item }) => (
					<View style={styles.todoView}>
						<View style={styles.todoList}>
							<Text>
								Title:{item[0]}
								{'\n'}
							</Text>
							<Text>Description:{item[1]}</Text>
						</View>
						<TouchableOpacity
							style={styles.removeTodo}
							onPress={() => removeTodo(item)}>
							<Image
								style={{ height: 20, width: 20 }}
								source={require('/home/divum/Documents/ReactNative/rn-devs-practice/src/assets/DeleteSymbol.png')}></Image>
						</TouchableOpacity>
						<TouchableOpacity
							style={styles.removeTodo}
							onPress={() =>
								navigation.navigate('Edit', {
									data: item,
									index: todos.indexOf(item),
								})
							}>
							<Image
								style={{ height: 20, width: 20, margin: 10 }}
								source={require('/home/divum/Documents/ReactNative/rn-devs-practice/src/assets/EditSymbol.png')}></Image>
						</TouchableOpacity>
					</View>
				)}
			/>
		);
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
			<Button name='increase' title='Add Todo' onPress={addTodo} />

			<Text
				style={{
					alignSelf: 'stretch',
					paddingLeft: 20,
					paddingTop: 30,
					fontSize: 25,
					color: 'black',
				}}>
				List of Todos :
			</Text>
			{renderTodoList()}
		</View>
	);	
};

export default Home;
