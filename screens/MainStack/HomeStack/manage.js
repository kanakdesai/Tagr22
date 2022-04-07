import { StyleSheet, Text, TextInput, View, FlatList , TouchableOpacity, Modal, Pressable} from 'react-native'
import React, {useState, useEffect} from 'react'
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';
import { auth } from '../../../firebase'
import {doc, updateDoc, getFirestore,collection, query, where , getDocs, FieldValue, arrayUnion} from "firebase/firestore";
import firebase from 'firebase/compat';
import RNPickerSelect from 'react-native-picker-select';
// import firebase from 'firebase/app'


const Manage = () => {
  const [tag , setTag] = useState('')
  const [vehicleNo, setVehicleNo] = useState('');
  const [modalVisible, setModalVisible] = useState(false);
  const [vehicles, setVehicles ] = useState([])
  const [ docId, setDocId] = useState('')
  const db = getFirestore();

  
  const user = collection(db, "userData");
  
 
  const q = query(user, where("userid", "==", firebase.auth().currentUser.uid));
 
    const AddCar= async()=>{
      const vehicleRef = doc(db, "userData", docId);
      await updateDoc(vehicleRef, {
        vehicleNumber: arrayUnion({
          fasTag: vehicleNo, bankId: tag
        })
        
      // setModalVisible(!modalVisible)
    })
    const newVehicles = [...vehicles]
        newVehicles.push({ fasTag: vehicleNo, bankId: tag})
        setVehicles(newVehicles)
  }
    
    
    useEffect(()=>{
    const getData = async()=>{
      
      
    const querySnapshot = await getDocs(q);
    // setDocId(querySnapshot[0])
    //  console.log("dsfs"+JSON.stringify(querySnapshot))
    querySnapshot.forEach((doc) => {
      setDocId(doc.id)
      console.log(doc.id, " => ", doc.data());
      const data = []
      doc.data().vehicleNumber.forEach(element=>{
        data.push({
          bankId: element.bankId,
          fasTag: element.fasTag
        })
      }); setVehicles(data)
      console.log(vehicles)
    });
    }
    getData()
  
  },[])
  

  return (
    <View style={styles.container}>
    <Modal
        animationType="slide"
        transparent={true}
        visible={modalVisible}
        
        onRequestClose={() => {
          Alert.alert("Modal has been closed.");
          setModalVisible(!modalVisible);
        }}
      >
        <View style={styles.centeredView}>
          <View style={styles.modalView}>
            <TextInput  value={vehicleNo}
      onChangeText={text=>setVehicleNo(text)} placeholder='Vehicle Number' style={styles.textInput}>

            </TextInput>
            <View style={styles.textInput}>
            <RNPickerSelect
            key={1}
            placeholderTextColor={'grey'}
            fixAndroidTouchableBug={true}
            // placeholder={'Select FasTag'}
            style={{
                
                    inputIOS:{
                        // color:  'Black',
                        // fontSize: '6%',

                    },
                    inputAndroid:{
                        // color: 'Black',
                        // fontSize: '4%'
                    }
                }}
            onValueChange={(value)=>{setTag(value)}}
            items={[
                { label: 'Paytm Bank FastTag', value: 'Paytm Bank FasTag' },
                { label: 'ICICI Bank FastTag', value: 'ICICI Bank FasTag' },
                { label: 'Airtel Payemnts Bank FastTag', value: 'Airtel Payemnts Bank FastTag' },
                { label: 'Allahabad Bank FastTag', value: 'Allahabad Bank FastTag' },
                { label: 'HDFC Bank FastTag', value: 'HDFC Bank FastTag' },
                { label: 'IDBI Bank FastTag', value: 'IDBI Bank FastTag' },
                { label: 'Other ', value: 'Other' },
            ]}
        />
        </View>
        
        <TouchableOpacity onPress={()=>AddCar()} style={styles.buttonStyle}>
              <Text>Add</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() =>{ setModalVisible(false)}} style={styles.buttonStyle2}>
          <Text>Close</Text>
      </TouchableOpacity>
          </View>
        </View>
      </Modal>

    <View style={{flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center'}}>
      <Text style={styles.title}>Manage</Text>
      <TouchableOpacity onPress={() => setModalVisible(true)} style={styles.buttonStyle}>
          <Text>Add</Text>
      </TouchableOpacity>
      
    </View>
     <FlatList keyExtractor={(item, index)=> index.toString()} data={vehicles} renderItem={({item})=>(
                    <View style={styles.cardStyle}>
                        
                    <View style={{flexDirection:'column'}}>
                        <Text style={styles.cardText}>Bank: {item.bankId.toUpperCase()}</Text>
                        <Text style={styles.cardText}>Vehicle no: {item.fasTag.toUpperCase()}</Text>
                       
                    </View>
                    
                    </View>
            )}>

     </FlatList>
    </View>
  )
}

export default Manage

const styles = StyleSheet.create({
  container:{
    flex: 1,
    backgroundColor: '#252525',
    paddingHorizontal: wp('10%'),
    paddingTop: hp('10%')
  },
  title:{
    fontSize: hp('3.5%'),
    color: 'white'
  },
  cardStyle:{
    width: '100%',
    marginTop: hp('5%'),
    height: hp('10%'),
    backgroundColor: 'white',
    borderRadius: 10,
    alignItems: 'center',
    justifyContent: 'center'
  },
  buttonStyle:{
    backgroundColor: 'orange',
    width: wp('20%'),
    height: hp('4%'),
    borderRadius: 10,
    alignItems: 'center',
    justifyContent: 'center'

  },
  modalView: {
    margin: 20,
    backgroundColor: "white",
    borderRadius: 20,
    paddingTop: hp('5%'),
    paddingHorizontal: wp('5%'),
    width: '80%',
    height: hp('50%'),
    alignItems: "center",
    shadowColor: "orange",
    shadowOffset: {
      width: 2,
      height: 2
    },
    backgroundColor: 'grey',
    shadowOpacity: 0.5,
    shadowRadius: 4,
    elevation: 5
  },
  modalText: {
    marginBottom: 15,
    textAlign: "center"
  },
  centeredView: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    width: '100%',
    height: hp('30%')
  },
  textInput:{
    width: '100%',
    height: hp('5%'),
    backgroundColor: 'white',
    borderRadius: 10,
    paddingLeft: wp('2.5%'),
    marginBottom: hp('2.5%'),
    justifyContent: 'center',
  },
  buttonStyle2:{
    backgroundColor: 'orange',
    width: wp('20%'),
    height: hp('4%'),
    borderRadius: 10,
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: hp('3%')
  },
})