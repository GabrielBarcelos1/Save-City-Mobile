import { StyleSheet } from 'react-native'
import Constants from 'expo-constants'

export default StyleSheet.create(
    {
        container: {
            flex: 1,
            paddingHorizontal: 24,
            paddingTop: Constants.statusBarHeight + 20
        },
        logo:{
            maxWidth:70,
            maxHeight:70,
        },
        header: {
            flexDirection: 'row',
            justifyContent: 'space-between',
            alignItems: 'center'

        },
        headerText: {
            fontSize: 15,
            color: '#737380'
        },
        headerTextBold: {
            fontWeight: 'bold'
        },
        title: {
            fontSize: 30,
            marginBottom: 16,
            marginTop: 48,
            color: '#000',
            fontWeight: 'bold'
        },
        description: {
            fontSize: 16,
            lineHeight: 24,
            color: '#737380'

        },
        incidentList: {
            marginTop: 15,
        },
        incidentListLoading: {
            marginTop: 25,
        },
        incident: {
            padding: 24,
            borderRadius: 8,
            backgroundColor: '#fff',
            marginBottom: 16,
        },
        incident: {
            padding: 24,
            borderRadius: 8,
            backgroundColor: '#fff',
            marginBottom: 16,
        },
        incidentCompleted: {
            padding: 24,
            borderRadius: 8,
            backgroundColor: '#e8fff9',
            marginBottom: 16,
        },
        incidentProperty: {
            fontSize: 14,
            color: '#41414d',
            fontWeight: 'bold'
        },
        incidentPropertyCompleted: {
            fontSize: 14,
            color: '#2e826e',
            fontWeight: 'bold'
        },
        dropDownText: {
            fontSize: 14,
            color: '#41414d',
            fontWeight: 'bold',
            marginBottom: 10
        },
        incidentValue: { 
            marginTop:8,
            fontSize: 15,
            marginBottom:24,
            color: '#737380'
        },
        incidentValueCompleted: { 
            marginTop:8,
            fontSize: 15,
            marginBottom:24,
            color: '#58AF9C'
        },
        detailButton:{
            flexDirection: 'row',
            justifyContent: 'space-between',
            alignItems : 'center'
        },
        detailButtonText:{
            color: '#58AF9C',
            fontSize: 15,
            fontWeight: 'bold',

        },
        detailButtonTextCompleted:{
            color: '#000',
            fontSize: 15,
            fontWeight: 'bold',

        },
        filter:{
            color: '#737380',
            fontSize: 15,
            fontWeight: 'bold',
            marginEnd:-20,
            backgroundColor: "#000"
        },
        loading:{
            width: "80%",
            height: 15,
            backgroundColor: "#DCDCDC",
            marginVertical: 10,
            marginHorizontal: 'auto',
        },
        loadingDesCripiton:{
            width: "80%",
            height: 30,
            backgroundColor: "#DCDCDC",
            marginVertical: 10,
            marginHorizontal: 'auto',
        },
        completedIcon: {
            display: "flex",
            justifyContent: 'space-between',
            flexDirection: "row",
            flex: 1,
        }
    })