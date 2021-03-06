import React from 'react';

import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottoms-tab';

// Screens
import SignIn from './components/auth';
import Diary from './components/diary';
import News from './components/news';

const AuthStack = createStackNavigator();
const MainScreenTab = createBottomTabNavigator();

/*
    Stack Navigator
        - Stack Screen A

    Stack Navigator
        - Tab Navigator
            - Tab Screen B
            - Tab Screen C
*/

const isLoggedIn = true;

const AppTabComponent = () => {
    return (
        <MainScreenTab.Navigator>
            <MainScreenTab.Screen name="Diary" component={Diary} />
            <MainScreenTab.Screen name="News" component={News} />
        </MainScreenTab.Navigator>
    )
}

export const RootNavigator = () => {
    return (
        <AuthStack.Navigator>
            {isLoggedIn ? (
                <AuthStack.Screen name="Main" component={AppTabComponent} />
            ) : (
                <AuthStack.Screen name="SignIn" component={SignIn} />
            )

            }
        </AuthStack.Navigator>
    )
}