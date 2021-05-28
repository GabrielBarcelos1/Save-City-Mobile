import { StyleSheet } from 'react-native'
import Constants from 'expo-constants'

export default StyleSheet.create({
    container:{
        flex: 1,
        paddingHorizontal: 24,
        paddingTop: Constants.statusBarHeight +20
    },
    logo:{
        maxWidth:70,
        maxHeight:70,
    },
    header:{
        flexDirection:'row',
        justifyContent: 'space-between',
        alignItems: 'center',
    },
    incident: {
        padding: 24,
        borderRadius: 8,
        backgroundColor: '#fff',
        marginBottom: 16,
        marginTop: 48
    },
    incidentProperty: {
        fontSize: 14,
        color: '#41414d',
        fontWeight: 'bold',
        marginTop: 24
    },
    incidentValue: { 
        marginTop:8,
        fontSize: 15,
        
        color: '#737380'
    },
    contactBox:{
        padding: 24,
        borderRadius: 8,
        backgroundColor: '#fff',
        marginBottom: 100,
    },
    herotitle:{
        fontWeight:'bold',
        fontSize:20,
        color: '#13131a',
        lineHeight:30,
    },
    heroDescription:{
        fontSize: 15,
        color: '#737380',
        marginTop: 16,
    },
    actions:{
        marginTop:16,
        flexDirection: 'row',
        justifyContent: 'space-between'
    },
    action: {
        backgroundColor: "#58AF9C",
        borderRadius: 8,
        height: 50,
        width: '48%',
        justifyContent: 'center',
        alignItems: 'center',
    },
    actionText:{
        color: '#fff',
        fontSize: 15,
        fontWeight: 'bold'
    },
    incidentSubView:{
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
    },
    dropDownText: {
        fontSize: 14,
        color: '#41414d',
        fontWeight: 'bold',
        marginBottom: 10
    }
    
})