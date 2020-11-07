import React, {useState} from 'react'
import {View, Text, StyleSheet, Image,TouchableOpacity} from 'react-native'
import { Icon,Content,Button,ActionSheet,Root } from 'native-base'

import { useNavigation } from '@react-navigation/native';
import {SetButton} from '../ui/set-button';
import {Story} from './story';
export const FeedItem = () => {


    const navigation = useNavigation()
    return (

        <View style={styles.container}>
            <View style={styles.feedItemTop}>

                <View style={styles.feedItemUser}>

                    <Story width={30} height={30} />
                    <TouchableOpacity
                        onPress={() => navigation.navigate('Home/feed/profile')}
                    >
                    <Text style={styles.feedItemUserName}>User1</Text>
                    </TouchableOpacity>
                </View>

                {/*<Icon style={{marginRight:20}} type="FontAwesome" name="ellipsis-v" />*/}
                <View>
                   <SetButton />
                </View>

            </View>
            <Image style={styles.mainImage} source={require('../img/logo.png')}/>
            <View style={styles.feedItemPanel}>

            </View>
            <View style={styles.feedItemBottom}>
                <Text>Liked by gregmar and other</Text>
                <Text>nickname post text</Text>
                <Text>View all 5 comments</Text>
            </View>
        </View>


    );
};

const styles = StyleSheet.create({
    container: {
        borderColor: '#000',
        borderWidth: 1,
      backgroundColor: '#fff',
        margin: 10,
        marginTop: 0


    },
    feedItemTop: {
        justifyContent: 'space-between',
        flexDirection:'row',
        alignItems: 'center',
        paddingHorizontal: 10,
        paddingVertical: 10
    },
    feedItemUser: {
        flexDirection:'row',
        alignItems: 'center'
    },
    feedItemUserImg: {
        width: 30,
        height: 30,
        borderRadius: 20

    },
    feedItemUserName: {

    },
    mainImage: {
        height: 400,
        width: '100%'
    },
    feedItemPanel: {

    },
    feedItemBottom: {

    },

});
