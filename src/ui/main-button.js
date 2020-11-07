import React from 'react';
import {View, Text, StyleSheet, Image,TouchableOpacity} from 'react-native';


export const MainButton = ({children}) => {

    return (
        <TouchableOpacity style={{flexGrow: 1}}>
            <View style={styles.main}>
                <Text style={styles.text}>{children}</Text>
            </View>
        </TouchableOpacity>

    );
};

const styles = StyleSheet.create({
    main: {
        borderRadius: 5,
        borderColor: '#000',
        borderWidth: 1,
        padding: 5,
        margin: 5,


    },
    text: {
        fontSize: 12
    }
});
