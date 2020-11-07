import React, {useState} from 'react';
import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';
import {Container, Header, Tab, Tabs,TabHeading,Icon} from 'native-base';
import {Posts} from './posts';

export const ProfileTabs = () => {

    const [active,setActive] = useState(0)

    return (
        <>
            <Container>

                <Tabs initialPage={active}  onChangeTab={({i})=>setActive(i)}>
                    <Tab heading={ <TabHeading
                        style={styles.tab}
                    >
                        <Icon type="FontAwesome" name="th"  style={
                            active===0?{color:'#000'}:{color:'gainsboro'}
                        }/>
                        </TabHeading>}>
                       <Posts i={10}/>
                    </Tab>
                    <Tab heading={ <TabHeading style={styles.tab}>
                        <Icon type="FontAwesome" name="user"  style={
                            active===1?{color:'#000'}:{color:'gainsboro'}
                        }/></TabHeading>}>
                        <Posts i={20}/>
                    </Tab>

                </Tabs>
            </Container>
        </>
    );
};

const styles = StyleSheet.create({
    icon: {
        color: '#000'
    },
    tab: {
        backgroundColor: '#fff',

    }
});
