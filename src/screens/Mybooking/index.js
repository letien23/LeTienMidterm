import { useState } from 'react';
import { Button, ScrollView, Image, StyleSheet, View, Text, TouchableOpacity, TextInput } from 'react-native';
import MapView, { Marker, PROVIDER_GOOGLE } from 'react-native-maps';
import Icon from 'react-native-vector-icons/FontAwesome';

const list = [
  {
    name: "ATM MB",
    location: "206 Đ. Trần Phú, Phước Ninh, Hải Châu, Đà Nẵng 555700, Vietnam",
    phonenumber: "972096486",
    img: "https://cdn.vietnambiz.vn/2019/10/5/atm-15702840092031074619967.png",

    latitude: 16.05539312118984, 
    longitude:108.24141645970782,
  },
  {
    name: "ATM Viettinbank",
    location: "45-47 An Thượng 2, Bắc Mỹ An, Ngũ Hành Sơn, Đà Nẵng 550000, Vietnam",
    phonenumber: "934916911",
    img: "http://hanoimoi.com.vn/Uploads/ngohuong/2015/1/2/ATM.jpg",
    latitude: 16.051248315313657,
    longitude:  108.23796177454513,
  },
  {
    name: "ATM ACB",
    location: "103 Nguyễn Văn Thoại, An Hải Đông, Sơn Trà, Đà Nẵng 550000, Vietnam",
    phonenumber: "905661186",
    img: "https://nld.mediacdn.vn/291774122806476800/2022/5/28/11-anh-chot-1129-5-16537439335721605008833.jpg",
    latitude: 16.055666406556522,
    longitude: 108.24375738634727,
  },
  {
    name: "ATM Techcombank",
    location: "90 Châu Thị Vĩnh Tế, Bắc Mỹ Phú, Ngũ Hành Sơn, Đà Nẵng 000052, Vietnam",
    phonenumber: "903551460",
    img: "https://media-cdn-v2.laodong.vn/Storage/NewsPortal/2020/1/20/779813/Kcn-Quang-Minh---Atm.jpg",
    latitude: 16.056201330549026, 
    longitude: 108.24471885062779,
  },
  {
    name: "ATM Seabank",
    location: "35 An Thượng 26, Bắc Mỹ Phú, Ngũ Hành Sơn, Đà Nẵng 550000, Việt Nam",
    phonenumber: "962068987",
    img: "https://timo.vn/wp-content/uploads/mini-bank.jpg",
 
    latitude: 16.059590852116973,
    longitude:  108.23514648529094,
  },
  
]



function Map() {
  const [location, setLocation] = useState({
    latitude: 16.06089,
    longitude: 108.24079,
  })

  const markers = list.map((restaurant) => {
    if (restaurant.latitude != location.latitude) {
      return (
        <Marker coordinate={{
          latitude: restaurant.latitude,
          longitude: restaurant.longitude,
        }}>
          <Image style={styles.icon} source={require('../../asset/img/restaurant.png')} />
        </Marker>
      )
    } else {
      return (
        <Marker coordinate={location}>
          <Image style={styles.icon} source={require('../../asset/img/restaurant1.png')} />
        </Marker>
      )
    }
  
  }
  )

  const restaurants = list.map((restaurant) => {
    return(
      <TouchableOpacity style={styles.restaurant}
        onPressIn={newLocation => setLocation({
          latitude: restaurant.latitude,
          longitude: restaurant.longitude,
        })}
      >
        <View style={{width:300,}}>
          <Image source={{ uri: restaurant.img }} style={styles.img} />
          <Text style={styles.name}>{restaurant.name}</Text>
          <Text style={styles.location}><Icon name="location-arrow" size={20} color="#1E90FF"/>     {restaurant.location}</Text>
          
        </View>
      </TouchableOpacity>
    )
   
  }
  )

  return (
    <View>
      <View style={styles.container}>
        <MapView
          provider={PROVIDER_GOOGLE}
          style={styles.map}
          region={{
            latitude: 16.06089,
            longitude: 108.24079,
            latitudeDelta: 0.05,
            longitudeDelta: 0.05,
          }}
        >

          <Marker coordinate={{
            latitude: 16.060959,
            longitude: 108.240774,
          }} >
          </Marker>
          {markers}
        </MapView>
      </View>
      <View style={{top:450}}>
        <ScrollView horizontal={true} showsHorizontalScrollIndicator={false} >
          {restaurants}
        </ScrollView>
      </View>
    </View>
  )
};

const styles = StyleSheet.create({
  container: {
    ...StyleSheet.absoluteFillObject,
    height: 800,
    width: 400,
    justifyContent: 'flex-end',
    alignItems: 'center',
  },
  map: {
    ...StyleSheet.absoluteFillObject,
  },
  icon: {
    width: 35,
    height: 35,
  },
  seach:{
    backgroundColor:"white",
    height: 50,
    flexDirection: "row",
    flexWrap: "wrap",
  },
  restaurant: {
    backgroundColor: "white",
    height: 270,
    padding: 20,
    marginRight: 10,
    marginLeft: 10,
    borderRadius: 10,
  },
  img: {
    width: 300,
    height: 150
  },
  name: {
    color: "black",
    fontSize: 20,
    fontWeight: "600",
    marginTop: 5,

  },
  location: {
    color:"black",
    fontSize: 15,
    marginTop: 5,
  },
  option: {
    backgroundColor: "white",
    padding: 10,
    marginLeft:20,
    borderRadius:10
  }
});

export default Map;

