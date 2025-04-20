import React, { useState } from 'react';
 import {
   View,
   Text,
   FlatList,
   Image,
   StyleSheet,
   TouchableOpacity,
   TextInput,
 } from 'react-native';
 import Icon from 'react-native-vector-icons/MaterialIcons';
 import products from './data';
 
 
 const SearchResultsScreen = ({ navigation }) => {
   const [searchTerm, setSearchTerm] = useState('');
 
   // Lọc dữ liệu dựa trên từ khóa tìm kiếm
   const filteredProducts = products.filter(product =>
    product.name.toLowerCase().includes(searchTerm.toLowerCase())
  );
 
   const handleFilterPress = () => {
     // Điều hướng đến FilterScreen
     navigation.navigate('Filter');
   };
 
   const renderItem = ({ item }) => (
     <View style={styles.itemContainer}>
       <Image source={item.image} style={styles.itemImage} />
       <Text style={styles.itemName}>{item.name}</Text>
       <Text style={styles.itemWeight}>{item.weight}</Text>
       {item.price > 0 && (
         <Text style={styles.itemPrice}>${item.price.toFixed(2)}</Text>
       )}
       <TouchableOpacity style={styles.addButton}>
         <Text style={styles.addButtonText}>+</Text>
       </TouchableOpacity>
     </View>
   );
 
   return (
     <View style={styles.container}>
       {/* Tìm kiếm */}
       <View style={styles.searchContainer}>
         <TextInput
           style={styles.searchInput}
           placeholder="Search"
           value={searchTerm}
           onChangeText={setSearchTerm}
         />
         <TouchableOpacity onPress={handleFilterPress} style={styles.filterIcon}>
           <Icon name="filter-list" size={24} color="#666" />
         </TouchableOpacity>
       </View>
 
       {/* Danh sách sản phẩm */}
       <FlatList
         data={filteredProducts}
         renderItem={renderItem}
         keyExtractor={(item) => item.id}
         numColumns={2}
         columnWrapperStyle={styles.row}
       />
     </View>
   );
 };
 
 const styles = StyleSheet.create({
   container: {
     flex: 1,
     padding: 10,
     backgroundColor: '#fff',
   },
   searchContainer: {
     marginTop:30,
     flexDirection: 'row',
     alignItems: 'center',
     backgroundColor: '#F2F3F2',
     borderRadius: 10,
     margin: 10,
     paddingHorizontal: 10,
   },
   searchInput: {
     flex: 1,
     height: 50,
     fontSize: 16,
     color: '#000',
   },
   filterIcon: {
     padding: 10,
   },
   row: {
     justifyContent: 'space-between',
   },
   itemContainer: {
     flex: 1,
     margin: 5,
     padding: 10,
     backgroundColor: '#f9f9f9',
     borderRadius: 10,
     alignItems: 'center',
   },
   itemImage: {
     width: 100,
     height: 100,
     resizeMode: 'contain',
   },
   itemName: {
     fontSize: 16,
     fontWeight: 'bold',
     marginTop: 5,
   },
   itemWeight: {
     fontSize: 14,
     color: '#666',
   },
   itemPrice: {
     fontSize: 16,
     color: '#53B175',
     marginTop: 5,
   },
   addButton: {
     backgroundColor: '#53B175',
     borderRadius: 5,
     padding: 5,
     marginTop: 5,
   },
   addButtonText: {
     margin: 5,
     color: '#fff',
     fontSize: 18,
   },
 });
 
 export default SearchResultsScreen;