import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View,Image, SafeAreaView,Dimensions } from 'react-native';
import FontAwesome6 from '@expo/vector-icons/FontAwesome6';

export default function Header1() {
    return (
        <SafeAreaView style={styles.container}>
            <View style={styles.c1}>
                <View style={styles.logoContainer}>
                <Image source={{uri:'https://i.pinimg.com/736x/a3/31/a8/a331a8d0a8ff50827c6cb3437f336a30.jpg'}} style={{width: 40, height: 40,borderRadius:30,}} />
                    <FontAwesome6 style={styles.logo} name="x-twitter" size={30} color="white"/>
                    <Text style={styles.border}>Upgrade</Text>
                </View>
                <View style={styles.text}>
                    <Text style={styles.text}>For You</Text>
                    <Text style={styles.text}>Following</Text>
                </View>
                <Text style={{color:'grey', alignSelf:'center'}}>_________________________________________________</Text>
            </View> 
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#000000',
        alignItems: 'center',
        justifyContent: 'center',
        color: 'white',
    },
    logo:{
        marginLeft: 30,
    },
    logoContainer:{
        justifyContent: 'center',
        alignItems: 'flex-start',
        flexDirection: 'row',
        gap: 100,
        marginLeft: '10%',
        marginRight: '10%',
    },
    border: {
        borderWidth: 1,
        borderColor: 'white',
        padding: 10,
        color: 'white',
        borderRadius: 28,   
    },
    text:{
        color:'white',
        justifyContent: 'center',
        alignItems: 'flex-start',
        flexDirection: 'row',
        gap: 150,
        marginTop: 20,
    },
    c1:{
        flexDirection:'column',
        flex: 1,

    }
});