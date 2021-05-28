import React, { useState, useEffect, useRef } from "react";
import { Feather } from "@expo/vector-icons";
import { useNavigation, useRoute } from "@react-navigation/native";
import { View, FlatList, Image, Text, TouchableOpacity} from "react-native";
import DropDownPicker from 'react-native-dropdown-picker'
import logoImg from "../../assets/logo.png";
import styles from "./style";
import api from "../../services/api";
import style from "./style";
import { AntDesign } from '@expo/vector-icons'; 

export default function Incidents() {
  const [Incidents, setIncidents] = useState(null);
  const [total,setTotal] = useState(0)
  const [page, setPage] = useState(1)
  const [loading, setLoading]= useState(false)


  const [open, setOpen] = useState(false);
  const [value, setValue] = useState('nenhum');
  const [items, setItems] = useState([
    {label: 'Casan', value: 'casan'},
    {label: 'Celesc', value: 'celesc'},
    {label: 'Comcap', value: 'Comcap'},
    {label: 'Nenhum', value: 'nenhum'},
  ]);
  
  
  const route = useRoute()
  const incidentEdited = route.params
  const flatListRef = useRef(null)
  const navigation = useNavigation();

  function navigateToDetail(incident) {
    navigation.navigate("Detail",{ incident });
  }

  async function loadIncidents(value,isFirst) {
    if(loading && !isFirst){
      return
    }
    if(total>0 && Incidents.length === total){
      return
    }
    setLoading(true)
    const response = await api.get(`/incidents${value === 'nenhum' ?"" : '/' +value}`,{
      params: {page: isFirst ? 1 : page}
    });
    isFirst ? setIncidents(response.data) : setIncidents([...Incidents,...response.data]);
    setTotal(response.data[0].count)
    setPage(isFirst ? 2 : page+1)
    setLoading(false)
  }
  function veryfyType(type){
    switch (type) {
      case 'nenhum':
        return 'Nenhuma empresa responsável';
      case 'celesc':
        return 'Celesc';
      case 'casan':
        return 'Casan';
      case 'comcap':
        return 'Comcap';
      default:
        return 'Nenhuma empresa responsável'
    }
  }

  useEffect(() => {
    loadIncidents('nenhum',true);
  }, []);

  
  function teste(value){
      loadIncidents(value,true)
      flatListRef.current.scrollToOffset({animated: true, offset: 0})
  }
  function veryfyTypeLoad(){
    if(value === 'celesc'){
      loadIncidents(value,false)
      return
    }
    if(value === 'comcap'){
      loadIncidents(value,false)
      return
    }
    if(value === 'casan'){
      loadIncidents(value,false)
      return
    }else{
      loadIncidents(value,false)
    }
  }
  function verifySituation(situation){
    switch (situation) {
      case 'pendente':
        return 'Pendente';
      case 'andamento':
        return 'Em andamento';
      case 'concluido':
        return 'Concluído';
      default:
        return 'Pendente'
    }
  }

  return (
    <View style={styles.container}>
      <View style={styles.header}>
          <Image source={logoImg} style={styles.logo}/>
        <Text style={styles.headerText}>
          total de <Text style={styles.headerTextBold}> {total} sugestões.</Text>
        </Text>
      </View>
      <Text style={styles.title}>Bem-Vindo!</Text>
      <Text style={styles.description}>Escolha um cidadão para resolver o problema e ajudar sua cidade</Text>
      <View style={{marginTop:20}}>
      <Text style={styles.dropDownText}>Filtrar por: </Text>
      <DropDownPicker
      open={open}
      value={value}
      items={items}
      setOpen={setOpen}
      setValue={setValue}
      setItems={setItems}
      style={{
        borderWidth:0
      }}
      zIndex={999000}
      onChangeValue={teste}
    />
    </View>
      {Incidents ? <FlatList
        legacyImplementation
        ref={flatListRef}
        style={styles.incidentList}
        data={Incidents}
        keyExtractor={incident => String(incident.id)}
        showsVerticalScrollIndicator={false}
        onEndReached={veryfyTypeLoad}
        onEndReachedThreshold={0.2}
        renderItem={({ item: incident }) => (
          <View style={styles.incidentList}>
            <View style={incident.situation === 'concluido' ? styles.incidentCompleted : styles.incident}>
              <View style={style.completedIcon}>
                <View >
                  <Text style={styles.incidentProperty}>Titulo:</Text>
                  <Text style={styles.incidentValue}>{incident.title}</Text>
                </View>
                {incident.situation === 'concluido' &&<AntDesign name="checkcircleo" size={24} color="#58AF9C" />}
              </View>
              <Text style={styles.incidentProperty}>Descrição:</Text>
              <Text style={styles.incidentValue}>{incident.description.length<150 
                                                  ?incident.description
                                                  : incident.description.substr(0,150) +'...'}</Text>
              <Text style={styles.incidentProperty}>Empresa responsavel: </Text>
              <Text style={styles.incidentValue}>{veryfyType(incident.type)}</Text>
              <Text style={styles.incidentProperty}>Situação:</Text>
              <Text style={styles.incidentValue}>{verifySituation(incident.situation)}</Text>

              <TouchableOpacity
                style={styles.detailButton}
                onPress={()=>navigateToDetail(incident)}
              >
                <Text style={styles.detailButtonText}>Ver mais detalhes</Text>
                <Feather name="arrow-right" size={16} color="#58AF9C" />
              </TouchableOpacity>
            </View>
          </View>
        )}
      />: <>
      <View style={styles.incidentListLoading}>
            <View style={styles.incident}>
              <Text style={styles.incidentProperty}>Titulo:</Text>
              <Text style={styles.loading}></Text>
              <Text style={styles.incidentProperty}>Descrição:</Text>
              <Text style={styles.loading}></Text>
              <Text style={styles.loading}></Text>
              <Text style={styles.loading}></Text>
              <Text style={styles.incidentProperty}>Empresa responsavel: </Text>
              <Text style={styles.loading}></Text>
              <Text style={styles.incidentProperty}>Situação:</Text>
              <Text style={styles.loading}></Text>

              <TouchableOpacity
                style={styles.detailButton}
                onPress={()=>navigateToDetail(incident)}
              >
                <Text style={styles.detailButtonText}>Ver mais detalhes</Text>
                <Feather name="arrow-right" size={16} color="#58AF9C" />
              </TouchableOpacity>
            </View>
          </View>
      <View style={styles.incidentList}>
            <View style={styles.incident}>
              <Text style={styles.incidentProperty}>Titulo:</Text>
              <Text style={styles.loading}></Text>
              <Text style={styles.incidentProperty}>Descrição:</Text>
              <Text style={styles.loadingDesCripiton}></Text>
              <Text style={styles.incidentProperty}>Empresa responsavel: </Text>
              <Text style={styles.loading}></Text>
              <Text style={styles.incidentProperty}>Situação:</Text>
              <Text style={styles.loading}></Text>

              <TouchableOpacity
                style={styles.detailButton}
                onPress={()=>navigateToDetail(incident)}
              >
                <Text style={styles.detailButtonText}>Ver mais detalhes</Text>
                <Feather name="arrow-right" size={16} color="#58AF9C" />
              </TouchableOpacity>
            </View>
          </View>
          </>}
    </View>
  );
}
