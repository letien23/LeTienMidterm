import {
  ActivityIndicator,
  Dimensions,
  FlatList,
  RefreshControl,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  Image
} from 'react-native';
import React, {useState} from 'react';

const SCREEN_WIDTH = Dimensions.get('screen').width;
const SCREEN_HEIGHT = Dimensions.get('screen').height;

const INITIAL_DATA = [
  {
    id:1,
    name: "ATM MB",
    location: "206 Đ. Trần Phú, Phước Ninh, Hải Châu, Đà Nẵng 555700, Vietnam",
    phonenumber: "972096486",
    img: "https://cdn.vietnambiz.vn/2019/10/5/atm-15702840092031074619967.png",

    latitude: 16.05539312118984, 
    longitude:108.24141645970782,
  },
  {
    id:2,
    name: "ATM Viettinbank",
    location: "45-47 An Thượng 2, Bắc Mỹ An, Ngũ Hành Sơn, Đà Nẵng 550000, Vietnam",
    phonenumber: "934916911",
    img: "http://hanoimoi.com.vn/Uploads/ngohuong/2015/1/2/ATM.jpg",
    latitude: 16.051248315313657,
    longitude:  108.23796177454513,
  },
  {
    id:3,
    name: "ATM ACB",
    location: "103 Nguyễn Văn Thoại, An Hải Đông, Sơn Trà, Đà Nẵng 550000, Vietnam",
    phonenumber: "905661186",
    img: "https://nld.mediacdn.vn/291774122806476800/2022/5/28/11-anh-chot-1129-5-16537439335721605008833.jpg",
    latitude: 16.055666406556522,
    longitude: 108.24375738634727,
  },
  {
    id:4,
    name: "ATM Techcombank",
    location: "90 Châu Thị Vĩnh Tế, Bắc Mỹ Phú, Ngũ Hành Sơn, Đà Nẵng 000052, Vietnam",
    phonenumber: "903551460",
    img: "https://media-cdn-v2.laodong.vn/Storage/NewsPortal/2020/1/20/779813/Kcn-Quang-Minh---Atm.jpg",
    latitude: 16.056201330549026, 
    longitude: 108.24471885062779,
  },
  {
    id:5,
    name: "ATM Seabank",
    location: "35 An Thượng 26, Bắc Mỹ Phú, Ngũ Hành Sơn, Đà Nẵng 550000, Việt Nam",
    phonenumber: "962068987",
    img: "https://timo.vn/wp-content/uploads/mini-bank.jpg",
 
    latitude: 16.059590852116973,
    longitude:  108.23514648529094,
  },
];


const Home = ({navigation}) => {
  const [data, setData] = useState(INITIAL_DATA);

  const renderItem = ({item}) => {
    return (
      <TouchableOpacity
        onPress={() => {
          navigation.navigate('ListATM', {headerTitle: 'Product 2'});
        }}
        style={styles.item}>
        <Text>{item?.name}</Text>
        <Text></Text>
        <Image source={{ uri: item?.img }} style={styles.image} />
      </TouchableOpacity>
    );
  };

  const renderHeader = () => {
    return (
      <View style={styles.headerContainer}>
        <Text>List ATM</Text>
      </View>
    );
  };

  const renderEmpty = () => {
    return (
      <View style={styles.emptyContainer}>
        <Text>Empty</Text>
      </View>
    );
  };

  const renderFooter = () => {
    return (
      <View>
        <ActivityIndicator size={'large'} color="red" />
      </View>
    );
  };

  return (
    <View style={styles.container}>
      <FlatList
        ListHeaderComponent={renderHeader}
        ListFooterComponent={renderFooter}
        ListEmptyComponent={renderEmpty}
        stickyHeaderIndices={[0]}
        keyExtractor={item => item.id}
        data={data}
        renderItem={renderItem}
        showsVerticalScrollIndicator={false}
        refreshControl={
          <RefreshControl
            refreshing={false}
            onRefresh={() => {
              setData(INITIAL_DATA);
            }}
          />
        }
        // onEndReached={onLoadMore}
      />
    </View>
  );
};

export default Home;

const styles = StyleSheet.create({
  item: {
    backgroundColor: 'white',
    width: SCREEN_WIDTH,
    height: 100,
    borderWidth: 1,
    marginTop: 5,
  },
  image: {
    width:50,
    height: 50,
  },
  container: {alignItems: 'center', justifyContent: 'center', flex: 1},
  emptyContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    height: SCREEN_HEIGHT,
    width: SCREEN_WIDTH,
    backgroundColor: 'pink',
  },
  headerContainer: {height: 44, backgroundColor: 'skyblue'},
});
