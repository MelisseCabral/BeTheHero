import { StyleSheet } from 'react-native';
import Constants from 'expo-constants';

export default StyleSheet.create({
    container: {
        flex: 1,
        paddingHorizontal: 24,
        paddingTop: Constants.statusBarHeight + 20,
    },

    header: {
        flexDirection: 'row',
        justifyContent: "space-between",
        alignItems: 'center'
    },

    headerText : {
        fontSize: 15,
        color: '#737380'
    },
    headerTextBold : {
        fontWeight: 'bold'
    },
    incident: {
        padding: 24,
        borderRadius: 8,
        backgroundColor: "#FFF",
        marginBottom: 16,
        marginTop: 48
    },
    incidentProperty : {
        fontSize: 14,
        color : '#41414d',
        fontWeight: "bold"
    },
    incidentValue: {
        marginTop : 8,
        fontSize: 15,
        marginBottom: 24,
        color: '#737380'
    },
    contactBox: {
        padding: 24,
        borderRadius: 8,
        backgroundColor: "#FFF",
        marginBottom: 16
    },
    heroTitle: {
        fontWeight: 'bold',
        fontSize: 20,
        color: '#13131a',
        marginTop: 16
    },
    heroDescription : {
        fontSize: 15,
        color: '#737380',
        marginTop: 16
    },
    actions : {
        marginTop: 16,
        flexDirection: 'row',
        justifyContent: 'space-between'
    },
    action : {
        backgroundColor: '#e02041',
        borderRadius: 8,
        height: 58,
        width: '48 %',
        justifyContent: 'center',
        alignItems: 'center'
    }, 
    actionText : {
        color: '#FFF',
        fontSize: 15,
        fontWeight: 'bold'
    }
});