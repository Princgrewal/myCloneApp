import { StyleSheet, Text, View, Image, SafeAreaView  } from 'react-native';

export default function Body1() {
  return (
    <SafeAreaView style={styles.container}>
        <View style= {styles.c1}>
            <View style={styles.logoContainer}>
                <Image source={{uri:'https://i.pinimg.com/736x/a3/31/a8/a331a8d0a8ff50827c6cb3437f336a30.jpg'}} style={{width: 40, height: 40,borderRadius:30,}} />
                <Text style={{color:'white', fontWeight:'bold'}}>Noor</Text>
                <Text style={{color:'grey'}}>@noor3333 . 22h ago</Text>
            </View>
            <View style={styles.textContainer}>
                <Text style={styles.text}>
                    Ice cream at the beach hits different—partly because half of it melts before you can eat it. 🍦🌊
                </Text>
            </View>
            <View>
            <Image style={styles.image} source={{uri:'https://th.bing.com/th/id/R.cfc294cd123160834101935550a02e80?rik=ldpcQ%2bHmOOdgWQ&riu=http%3a%2f%2fwww.eclectech.co.uk%2fb3ta%2fsummergorilla-wallpaper.jpg&ehk=TrQW0xZn%2bRSGtocZbxX%2f3%2bv0wLXOXUJGJyPKz4mxOYg%3d&risl=&pid=ImgRaw&r=0'}}></Image>
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