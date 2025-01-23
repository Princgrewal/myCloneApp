import { StyleSheet, Text, View, Image, SafeAreaView, LogBox, TouchableOpacity } from 'react-native';
import Foundation from '@expo/vector-icons/Foundation';
import EvilIcons from '@expo/vector-icons/EvilIcons';
import Ionicons from '@expo/vector-icons/Ionicons';
import Feather from '@expo/vector-icons/Feather';

export default function NavBar() {
    return (
        <SafeAreaView style={styles.container}>
            <View style={styles.logoContainer}>
                <Foundation name="home" size={33} color="white" />
                <EvilIcons name="search" size={40} color="white" />
                <Ionicons name="people" size={33} color="white" />
                <Ionicons name="notifications" size={28} color="white" />
                <Feather name="mail" size={28} color="white" />
            </View>
        </SafeAreaView>

    )
}
const styles = StyleSheet.create({
    logoContainer: {
        justifyContent: 'flex-start',
        alignItems: 'flex-end',
        gap: 45,
        flex: 1,
        width: '100%',
        height: '100%',
        marginBottom: 18,
        marginLeft: '10%',
        marginRight: '10%',
        flexDirection: 'row',
    },
    container: {
        flex: 1,
        backgroundColor: 'black',
        alignItems: 'center',
        justifyContent: 'center',
        color: 'white',
    },
});
