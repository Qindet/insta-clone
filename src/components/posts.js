import React from 'react';
import {View, Text, StyleSheet,ScrollView} from 'react-native'
import {Container} from 'native-base'
import {PostItem} from './post-item';

export const Posts = ({i}) => {

    return (

            <Container style={styles.container}>
                {Array(i).fill('').map(i=><PostItem />)}

            </Container>



    );
};

const styles = StyleSheet.create({

    container: {
        flexDirection: 'row',
        flexWrap: 'wrap',
        justifyContent: 'center'
    }
});
