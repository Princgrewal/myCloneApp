import { Text, TouchableOpacity, StyleSheet } from 'react-native';

export default function AlertFunction() {
    return (
        <TouchableOpacity style={styles.alert} onPress={() => alert('Alert Button pressed')}>
            <Text style={{ color: 'white', fontSize: 20, alignSelf: 'center' }}>Alert</Text>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    alert: {
        marginTop: 0,
        backgroundColor: "#23a0e8",
        padding: 7,
        borderRadius: 10,
        width: 100,
    }
})