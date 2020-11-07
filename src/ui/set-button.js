import React,{useState} from 'react'
import {View, Text, StyleSheet, TouchableOpacity} from 'react-native'
import {ActionSheet, Content, Icon,Root} from 'native-base'
let BUTTONS = ["Option 0", "Option 1", "Option 2", "Delete", "Cancel"]
let DESTRUCTIVE_INDEX = 3
let CANCEL_INDEX = 4

export const SetButton = () => {
    const [clicked,setClicked] = useState({clicked:{}})

    return (
        <Root>
            <View>
                <Content padder>
                    <TouchableOpacity
                        style={styles.ellipseIcon}
                        onPress={() =>
                            ActionSheet.show(
                                {
                                    options: BUTTONS,
                                    cancelButtonIndex: CANCEL_INDEX,
                                    destructiveButtonIndex: DESTRUCTIVE_INDEX,
                                    title: "Testing ActionSheet"
                                },
                                buttonIndex => {
                                    setClicked({ clicked: BUTTONS[buttonIndex] });
                                }
                            )}
                    >

                        <Icon type="FontAwesome" name="ellipsis-v" />


                    </TouchableOpacity>
                </Content>
            </View>
        </Root>
    );
};

const styles = StyleSheet.create({
    ellipseIcon: {
        width: 30,
        height: 30,

        justifyContent: 'center',
        alignItems: 'center'
    }
});
