import React from 'react';
import {Text, View, TouchableOpacity, StatusBar, StyleSheet} from 'react-native';
import Style from '../Styles';
import { Table, TableWrapper, Row, Rows, Col, Cols, Cell } from 'react-native-table-component';

const MedStockScreen = props =>{
    const state = {
        tableHead: ['Head', 'Head2', 'Head3', 'Head4'],
        tableData: [
          ['1', '2', '3', '4'],
          ['a', 'b', 'c', 'd'],
          ['1', '2', '3', '456\n789'],
          ['a', 'b', 'c', 'd']
        ]
      }
    
    return(
        <View style = {{...Style.background}}>
            <StatusBar  barStyle="light-content" backgroundColor="transparent" translucent={true} />
            <View style = {{marginTop: 45, marginHorizontal: 15}}>
            <Text style={{...Style.heading}}>
                Medicines available
            </Text>
            <Table borderStyle={{borderWidth: 2, borderColor: 'rgb(3, 184, 234)'}}>
            <Row data={state.tableHead} style={medstyles.HTextStyle} />
            <Rows data={state.tableData} />
            </Table>
            </View>
        </View>
    )
}
const medstyles=StyleSheet.create({
    HTextStyle:{
        fontSize:30,
        color:'rgb(3, 184, 234)'
    }
});

MedStockScreen.navigationOptions = () => {
    return{
        headerShown: false
    };
}

export default MedStockScreen;