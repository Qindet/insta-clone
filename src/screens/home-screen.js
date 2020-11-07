import React from 'react'
import {View, Text, StyleSheet,Image,TouchableOpacity} from 'react-native'
import { createStackNavigator } from '@react-navigation/stack'
import {FeedScreen} from './feed-screen'
import { Icon } from 'native-base'
import {ProfileScreen} from './profile-screen';
import {SetButton} from '../ui/set-button';
const Stack = createStackNavigator()

export const HomeScreen = () => {

    return (
        <>
                <Stack.Navigator initialRouteName='Home/feed'>
                    <Stack.Screen
                        options={{ headerTitle: props =>
                                <View style={styles.container}>
                                    <Image style={styles.logo} source={require('../img/logo.png')}/>
                                </View>,
                        headerLeft: props =>
                            <TouchableOpacity>
                            <Icon style={{marginLeft:20}} type="FontAwesome" name="camera" />
                            </TouchableOpacity>,
                        headerRight: props =>
                            <TouchableOpacity>
                            <Icon style={{marginRight:20}} type="FontAwesome" name="paper-plane" />
                            </TouchableOpacity>}}
                        name="Home/feed" component={FeedScreen} />
                    <Stack.Screen
                        options={{ headerTitle: props => <Text style={{textAlign:'center'}}>User1</Text>,

                        headerRight: props => <SetButton />,
                            headerRightContainerStyle: {
                                paddingTop: 5,
                                paddingRight: 5
                            }
                       }}


                        name="Home/feed/profile" component={ProfileScreen} />
                </Stack.Navigator>

        </>
    );
};

const styles = StyleSheet.create({
    container: {
      alignItems: 'center'
    },
    logo: {
        width: 40,
        height: 40
    }
});
