import { useNavigation } from "@react-navigation/native";
import React from "react";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";

const Title = ({ title }: any) => {
    const navigation = useNavigation();
    return (
        <View style = {stypes.container}>
            <View>
                <TouchableOpacity onPress={() => navigation.goBack()}>
                    <Text>
                        Back
                    </Text>
                </TouchableOpacity>
            </View>
            <View>
                <Text style = {stypes.title}>
                    { title }
                </Text>
            </View>
        </View>
    );
}

const stypes = StyleSheet.create({
    container:{
        marginHorizontal: 10,
        flexDirection: 'row',
        justifyContent: 'flex-start',
        alignItems: 'center'
    },
    title:{
        marginHorizontal: 10,
        color: 'black',
        fontSize: 18,
    }
})
export default Title;