import { StyleSheet, Text, View, Image, SafeAreaView  } from 'react-native';

export default function Body2() {
  return (
    <SafeAreaView style={styles.container}>
        <View style= {styles.c1}>
            <View style={styles.logoContainer}>
                <Image source={{uri:'https://i.pinimg.com/736x/a3/31/a8/a331a8d0a8ff50827c6cb3437f336a30.jpg'}} style={{width: 40, height: 40,borderRadius:30,}} />
                <Text style={{color:'white', fontWeight:'bold'}}>Prince</Text>
                <Text style={{color:'grey'}}>@theprince . 24h ago</Text>
            </View>
            <View style={styles.textContainer}>
                <Text style={styles.text}>
                Bananas are just nature’s pre-packaged snack. 🍌✨ Mother Earth really said, 'Here, take this on the go.
                </Text>
            </View>
            <View>
            <Image style={styles.image} source={{uri:'https://thumbs.dreamstime.com/z/big-hungry-gorilla-eating-healthy-snack-bananas-breakfast-isolated-white-background-29818927.jpg'}}></Image>
            </View>
        </View>
        
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#000000',
        alignItems: 'center',
        justifyContent: 'center',
        color: 'white',
        marginBottom: 50,
    },
    c1:{
        flexDirection:'column',
        flex: 1,
        justifyContent: 'flex-start',
        
    },
    textContainer:{
        color:'white',
        justifyContent: 'center',
        alignItems: 'flex-start',
        flexDirection: 'row',
        gap: 150,
        marginLeft: '12%',
    },
    text:{
        color: 'white',
    },
    logoContainer:{
        alignItems: 'flex-start',
        flexDirection: 'row',
        gap: 10,
        
    },
    image:{
        width: '75%',
        height: '75%',
        borderRadius: 10,
        marginTop: 10,
        marginLeft: '13%',
    }
});