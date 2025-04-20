import React, { useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, ScrollView } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';

const FilterScreen = ({ navigation }) => {
  const [filters, setFilters] = useState({
    category: {
      eggs: true,
      noodlesPasta: false,
      chipsCrisps: false,
      fastFood: false,
    },
    brand: {
      individualCollection: false,
      cocola: true,
      ifad: false,
      kaziFarmas: false,
    },
  });

  const handleCategoryChange = (category) => {
    setFilters({
      ...filters,
      category: {
        ...filters.category,
        [category]: !filters.category[category],
      },
    });
  };

  const handleBrandChange = (brand) => {
    setFilters({
      ...filters,
      brand: {
        ...filters.brand,
        [brand]: !filters.brand[brand],
      },
    });
  };

  const applyFilters = () => {
    navigation.goBack();
  };

  const CustomCheckbox = ({ isChecked, onPress }) => (
    <TouchableOpacity onPress={onPress} style={styles.checkboxContainer}>
      {isChecked ? (
        <Icon name="check-box" size={24} color="#53B175" />
      ) : (
        <Icon name="check-box-outline-blank" size={24} color="#666" />
      )}
    </TouchableOpacity>
  );

  return (
    <View style={styles.container}>
        <TouchableOpacity style={styles.backButton} onPress={applyFilters}>
        <Icon name="close" size={24} color="#000" />
      </TouchableOpacity>
      <Text style={styles.title}>Filters</Text>
      <ScrollView style={styles.scrollView}>
        <Text style={styles.sectionTitle}>Categories</Text>
        {Object.keys(filters.category).map((key) => (
          <View style={styles.filterItem} key={key}>
            <CustomCheckbox
              isChecked={filters.category[key]}
              onPress={() => handleCategoryChange(key)}
            />
            <Text style={styles.filterText}>{key.charAt(0).toUpperCase() + key.slice(1).replace(/([A-Z])/g, ' $1')}</Text>
          </View>
        ))}

        <Text style={styles.sectionTitle}>Brand</Text>
        {Object.keys(filters.brand).map((key) => (
          <View style={styles.filterItem} key={key}>
            <CustomCheckbox
              isChecked={filters.brand[key]}
              onPress={() => handleBrandChange(key)}
            />
            <Text style={styles.filterText}>{key.charAt(0).toUpperCase() + key.slice(1).replace(/([A-Z])/g, ' ')}</Text>
          </View>
        ))}
      
      <TouchableOpacity style={styles.applyButton} onPress={applyFilters}>
        <Text style={styles.applyButtonText}>Apply Filter</Text>
      </TouchableOpacity>
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  backButton: {
    position: 'absolute',
    top: 58,
    left: 20,
    padding: 10,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
    textAlign: 'center',
    marginTop: 60,
  },
  scrollView: {
    flex: 1,
    backgroundColor: '#f2f3f2',
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
    padding: 20,
  },
  sectionTitle: {
    marginVertical: 20,
    fontSize: 18,
    fontWeight: 'bold',
  },
  filterItem: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 15,
  },
  filterText: {
    fontSize: 16,
    marginLeft: 10,
  },
  checkboxContainer: {
    width: 24,
    height: 24,
    justifyContent: 'center',
    alignItems: 'center',
  },
  applyButton: {
    backgroundColor: '#53B175',
    padding: 15,
    borderRadius: 10,
    alignItems: 'center',
    marginTop: 230,
  },
  applyButtonText: {
    color: '#fff',
    fontSize: 18,
    fontWeight: 'bold',
  },
});

export default FilterScreen;