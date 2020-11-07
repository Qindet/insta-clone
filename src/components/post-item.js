import React from 'react';
import {View, Text, StyleSheet, TouchableOpacity, Image} from 'react-native';

export const PostItem = () => {

    return (
        <View >
            <TouchableOpacity>
                <Image style={styles.image}  source={require('../img/logo.png')}/>

            </TouchableOpacity>
        </View>

    );
};

const styles = StyleSheet.create({
    image: {
        minWidth: 130,
        height: 130,

    }
});
