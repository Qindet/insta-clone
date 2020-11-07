import React from 'react';
import {View, Text, StyleSheet, Image,ScrollView} from 'react-native';
import {Stories} from '../components/stories';
import {Feed} from '../components/feed';

export const FeedScreen = () => {

    return (
        <ScrollView>
            <Stories />
            <Feed />
        </ScrollView>
    );
};

const styles = StyleSheet.create({});
