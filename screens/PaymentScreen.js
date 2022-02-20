import React, {useState} from 'react';
import styles from "../assets/Style";
import { Text, View, ScrollView,Button,TextInput } from 'react-native';
import { PRODUCTS,CART } from "../data/dummy-data";
import { validate } from "uuid";
import ShoppingCartScreen from './ShoppingCartScreen';
export default function PaymentScreen({ route,navigation }) {
const[firstName,setFirstName]=useState(null);
const[lastName,setLastName]=useState(null);
const[email,setEmail]=useState(null);
const[phone,setPhone]=useState(null);
const[country,setCountry]=useState(null);
const[city,setCity]=useState(null);
const[street,setStreet]=useState(null);
const[houseNum,setHouseNum]=useState(null);
const[fullName,setFullName]=useState(null);
const[id,setId]=useState(null);
const[cardNumber,setCardNumber]=useState(null);
const[cvv,setCvv]=useState(null);
const[validity,setValidity]=useState(null);

const ValidText = (txt) =>{
    txt.forEach(char => {
        if(char<'A'||char>'z'||char>'Z'&&char<'a'){
            return false;
        }   
    });
    return true;
}

const ValidCreditNumber = (num) =>{
    if(num.length()>16){
        return false;
    }
    num.forEach(char => {
        if(char<'0'||char>'9'){
            return false;
        }   
    });
    return true;
}
const ValidId = (num) =>{
    if(num.length()!=9){
        return false;
    }
    num.forEach(char => {
        if(char<'0'||char>'9'){
            return false;
        }   
    });
    return true;
}
const ValidCVV = (num) =>{
    if(num.length()!=3){
        return false;
    }
    num.forEach(char => {
        if(char<'0'||char>'9'){
            return false;
        }   
    });
    return true;
}
const ValidHouseNum = (num) =>{
    if(num.length()>5){
        return false;
    }
    num.forEach(char => {
        if(char<'0'||char>'9'){
            return false;
        }   
    });
    return true;
}
const ValidPhone = (num) =>{
    if(num.length()!=10){
        return false;
    }
    num.forEach(char => {
        if(char<'0'||char>'9'){
            return false;
        }   
    });
    return true;
}
const ValidMail = (mail) =>{
    var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(email);
}

const ValidValidity = (mail) =>{
    
}

const CheckValid = () => {
    if(firstName==null||lastName==null||
        email==null||phone==null||country==null||
        city==null||street==null||houseNum==null||
        id==null||cardNumber==null||cvv==null||validity==null){
            alert("All fields must be filled in!");
        }
    else{
        navigation.navigate("Thanks");
        // if(ValidText(firstName)&&ValidText(lastName)&&ValidText(fullName)&&ValidText(country)&&ValidText(city)
        // &&ValidText(street)&&ValidCreditNumber(cardNumber)&&ValidCVV(cvv)&&ValidHouseNum(houseNum)&&
        // ValidId(id)&&ValidPhone(phone)&&ValidMail(email)){
        //     navigation.navigate("Thanks")
        // }
        // else{
        //     alert("not valid")
        // }
     }
    
}


  return (
    <View style={styles.form} >
        <ScrollView >
      <Text style={styles.title}>Payment:</Text>
      <Text>First name:<TextInput onChangeText={(txt)=>setFirstName(txt)} style={styles.input}/> <Text> Last name: <TextInput onChangeText={(txt)=>setLastName(txt)} style={styles.input}/></Text></Text>
      <Text> Email: <TextInput onChangeText={(txt)=>setEmail(txt)} style={styles.input}/><Text> Phone number: <TextInput onChangeText={(txt)=>setPhone(txt)} style={styles.input}/></Text></Text>
      <Text> Country: <TextInput onChangeText={(txt)=>setCountry(txt)} style={styles.input}/> <Text> City: <TextInput onChangeText={(txt)=>setCity(txt)} style={styles.input}/></Text> <Text> Address: <TextInput onChangeText={(txt)=>setStreet(txt)} placeholder="Street" style={styles.input}/><TextInput onChangeText={(txt)=>setHouseNum(txt)} placeholder="house number" style={styles.input}/></Text> </Text>
      <Text style={styles.title}>Credit details:</Text>
      <Text>Full name:<TextInput onChangeText={(txt)=>setFullName(txt)} value={firstName+" "+lastName} style={styles.input}/> <Text> ID: <TextInput onChangeText={(txt)=>setId(txt)} style={styles.input}/></Text></Text>
      <Text>Card number<TextInput onChangeText={(txt)=>setCardNumber(txt)} style={styles.input}/> <Text> Validity: <TextInput onChangeText={(txt)=>setValidity(txt)} style={styles.input}/></Text> CVV: <TextInput onChangeText={(txt)=>setCvv(txt)} style={styles.input}/></Text>
      <Button onPress={()=>CheckValid()} title="Pay"/>
      </ScrollView>
    </View>
    
  );
}


