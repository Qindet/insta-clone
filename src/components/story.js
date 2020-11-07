import React from 'react';
import {View, Text, StyleSheet, Image,ScrollView} from 'react-native';
import {TouchableNativeFeedback} from "react-native-gesture-handler";
import {Thumbnail} from "native-base";


export const Story = ({width,height}) => {

    return (
        // <View style={{borderRadius: 50, backgroundColor: 'red', width,height}}>
        //
        //     </View>

            <View style={styles.scrollContent} >
                <TouchableNativeFeedback key={'fdsfdsf3'} onPress={()=>console.log(1)}>
                <View  style={{
                    borderColor: 'pink', borderWidth: 2,
                    width, height, borderRadius: 35,
                    justifyContent: 'center', alignItems: 'center'
                }}>
                    <Thumbnail source={{uri:'../img/logo.png'}} />
                </View>
                {/*<Text style={styles.scrollTextView} numberOfLines={1}>{'fsdfsd'}</Text>*/}
                </TouchableNativeFeedback>
            </View>

    );
};

const styles = StyleSheet.create({
    container: {
        borderRadius: 20
    },
    scrollContent: {
        justifyContent: 'space-evenly',
        marginRight: 10,
        alignItems: 'center',
        alignSelf: 'center'
    },

    scrollTextView: { fontSize: 10 },
});
