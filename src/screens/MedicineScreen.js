import React, {useState, useEffect} from 'react';
import {Text, View, StatusBar,FlatList, Image} from 'react-native';
import Style from '../Styles';
import SearchBar from "../components/SearchBar";
import useMedicineSearchContext from "../context/useMedicineSearchContext";
import Separator from "../components/Separator";
import {BotttomNavigatorWithoutBorder} from "../components/BottomNavigator";
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { Fontisto } from '@expo/vector-icons';

const MedicineScreen = props => {
    const [searchQuery, onChangeSearchQuery] = useState('');
    const [medicineResult, fetchMedicineResult] = useMedicineSearchContext();

    const executeFetchMedicine = (searchQuery) => {
        fetchMedicineResult(searchQuery);
    }
    const titleCase = string => {
        var sentence = string.toLowerCase().split(" ");
        for(var i = 0; i< sentence.length; i++){
            sentence[i] = sentence[i][0].toUpperCase() + sentence[i].slice(1);
        }
        sentence.join(" ")
        return sentence;
    }

    return(
        <View style = {Style.background}>
            <StatusBar  barStyle="light-content" backgroundColor="transparent" translucent={true} />
            <View style = {{marginTop: 45}}>
                <SearchBar onPressBack = {() => props.navigation.goBack(null)} query = {searchQuery} onChangeQuery = {onChangeSearchQuery} onSearchPress = {() => executeFetchMedicine(searchQuery)} />
                <Separator />
                {medicineResult ? (
                    <View style = {{marginLeft: 15, marginBottom: 190}}><FlatList
                    data={medicineResult.results}
                    renderItem={({item}) => {
                        return <View style = {{flexDirection: 'row', alignItems: 'center'}}>
                            <MaterialCommunityIcons name="pill" size={17} color='rgb(3, 184, 234)' />
                            <Text style = {{color: 'white', marginVertical:5, flex: 1, marginLeft: 7, lineHeight: 20, fontSize: 18}}>{titleCase(item.term)}</Text>
                        </View>
                    }}
                    /></View>) :
                (<Fontisto name="pills" size={24} color="black" />)}
            </View>
            <View style={{ position: 'absolute', left: 0, right: 0, bottom: 0 }}>
                <View style = {{flexDirection: 'row'}}>
                    <BotttomNavigatorWithoutBorder callBack = {() => console.log('Pressed')} symbolName = 'logout' text = "Logout" />
                    <BotttomNavigatorWithoutBorder callBack = {() => console.log('Pressed')} symbolName = 'search1' text = "Medicine" />
                    <BotttomNavigatorWithoutBorder callBack = {() => console.log('Pressed')} symbolName = 'search1' text = "Doctor" />
                </View>
            </View>
        </View>
    )
}

MedicineScreen.navigationOptions = () => {
    return{
        headerShown: false
    };
}

export default MedicineScreen;