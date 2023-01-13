// library imports
import React from 'react';
import { SafeAreaView } from 'react-native';
import { createStackNavigator } from '@react-navigation/stack';
import { useDispatch, useSelector } from 'react-redux';
import { Pressable,Text } from 'react-native';

// user imports
import { logout } from '../redux/actions/auth';

// screens<TouchableOpacity
							
import Home from '../Screens/Home';
import Login from '../Screens/Login';
import Edit from '../Screens/Edit';

// constants
import * as CONSTANTS from '../constants';

// object destructurings
const { HOME, LOGIN, EDIT } = CONSTANTS.screenTitles;

const Stack = createStackNavigator();

function MainStack() {
	const dispatch = useDispatch();
	const isLoggedIn = useSelector((state) => state.auth?.user?.data?.Token);
	return (
		<SafeAreaView style={{ flex: 1 }}>
			<Stack.Navigator>
				{!isLoggedIn ? (
					//   Login screen
					<Stack.Screen
						name={LOGIN}
						component={Login}
						options={{
							headerShown: true,
						}}
					/>
				) : (
					<>
						<Stack.Screen
							name={HOME}
							component={Home}
							options={{
								title:'To Do',
								headerShown: true,
								headerRight: () => (
									<Pressable
										onPress={() => dispatch(logout())}
										style={{
											backgroundColor: 'lightpink',
											borderRadius: 8,
											padding: 10,
											width: 70,
											alignItems: 'center',
											marginRight:20
											//marginTop: -30,
										}}>
											<Text>Logout</Text>
										</Pressable>
								),
							}}
						/>
						<Stack.Screen
							name={EDIT}
							component={Edit}
							options={{
								headerShown: true,
							}}
						/>
					</>
				)}
			</Stack.Navigator>
		</SafeAreaView>
	);
}

// exports
export default MainStack;
