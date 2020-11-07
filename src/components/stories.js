import React from 'react';
import { ScrollView, View, Text } from 'react-native';
import { Thumbnail } from 'native-base';
import { TouchableNativeFeedback } from 'react-native-gesture-handler';
import {Story} from './story';

export const Stories = () => {

        return (

            <View style={styles.swiperView}>
                <ScrollView
                    horizontal
                    showsHorizontalScrollIndicator={false}
                    showsVerticalScrollIndicator={false}
                    contentContainerStyle={styles.storiesContainer}
                >
                          <Story width={65} height={65} />
                    <Story width={65} height={65} />
                    <Story width={65} height={65} />
                    <Story width={65} height={65} />
                    <Story width={65} height={65} />
                    <Story width={65} height={65} />
                    <Story width={65} height={65} />
                    <Story width={65} height={65} />
                    <Story width={65} height={65} />


                </ScrollView>

            </View>
        )
}



const styles = {
    swiperView: {
        backgroundColor:'white',
        paddingVertical:15
    },
    storiesContainer: { paddingEnd: 7, paddingStart: 7, alignItems: 'center' },

    scrollContent: {
        justifyContent: 'space-evenly',
        width: 75,
        alignItems: 'center',
        alignSelf: 'center'
    },
    scrollImageView: { marginHorizontal: 5, borderColor: 'pink', borderWidth: 2, marginTop: 7, width: 65, height: 65, borderRadius: 35, justifyContent: 'center', alignItems: 'center' },
    scrollTextView: { fontSize: 10 },




}

