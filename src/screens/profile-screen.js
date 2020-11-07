import React from 'react';
import {View, Text, StyleSheet, TouchableOpacity,ScrollView} from 'react-native';
import {Tab, Tabs, TabHeading, Icon,Header,Container} from 'native-base';
import {Story} from '../components/story';
import {MainButton} from '../ui/main-button';
import {Stories} from '../components/stories';
import {HomeScreen} from './home-screen';
import {Feed} from '../components/feed';
import {ProfileTabs} from '../components/profile-tabs';


export const ProfileScreen = () => {

    return (
        <ScrollView>
        <View style={styles.profileInfo}>
            <View style={styles.profileTop}>
                <Story />
                <View style={styles.profileInfoButtons}>
                    <TouchableOpacity style={styles.profileInfoItem}>
                        <Text>321</Text>
                        <Text>Публикации</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.profileInfoItem}>
                        <Text>321</Text>
                        <Text>Публикации</Text>
                    </TouchableOpacity>
                    <TouchableOpacity>
                        <Text>321</Text>
                        <Text>Публикации</Text>
                    </TouchableOpacity>
                </View>

            </View>

            <View style={styles.profileButtons}>
                <MainButton>
                    Подписаться
                </MainButton>
                <MainButton>
                    Подписаться
                </MainButton>
            </View>
            <Stories />


        </View>

                <ProfileTabs />



        </ScrollView>
    );
};

const styles = StyleSheet.create({
    profileInfo: {
      padding: 20,
        backgroundColor: '#fff'
    },
    profileTop: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginLeft:5
    },
    profileInfoButtons: {
        flexDirection: 'row'
    },
    profileButtons: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginTop: 20

    },
    profileInfoItem: {
        marginRight:20
    }
});
