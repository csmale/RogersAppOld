import { StyleSheet, View, TextInput, Text } from "react-native";
import { useState } from 'react';

export default function Password(props) {
    return (
        <View style={styles.container}>
            <View style={{ alignItems: 'left' }}>
                <Text style={styles.label}>{props.label}</Text>
            </View>
            <TextInput style={styles.input}
                placeholder={props.placeholder}
                value={props.value}
                inputMode={props.inputMode}
                secureTextEntry={true}
                onChangeText={props.onChangeText}
            />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#fff',
        alignItems: 'left',
        justifyContent: 'left',
        width: '50%',
        marginTop: 8
    },
    input: {
        fontSize: 14,
        fontWeight: "light",
        width: "100%",
        borderBottomWidth : 1.0
    },
    label: {
        fontSize: 16,
        fontWeight: "bold"
    }
});
