  import React, { useState } from 'react';
  import { StyleSheet } from 'react-native';
  import { Dropdown } from 'react-native-element-dropdown';

  const data = [
    { label: 'None', value: '0'},
    { label: 'Sound 1', value: '1' },
    { label: 'Sound 2', value: '2' },
    { label: 'Sound 3', value: '3' },
    { label: 'Sound 4', value: '4' },
    { label: 'Sound 5', value: '5' },
    { label: 'Sound 6', value: '6' },
    { label: 'Sound 7', value: '7' },
    { label: 'Sound 8', value: '8' },
  ];

  const SoundDropdown = () => {
    const [value, setValue] = useState(null);

    return (
      <Dropdown
        style={styles.dropdown}
        containerStyle={styles.container}
        placeholderStyle={styles.placeholderStyle}
        selectedTextStyle={styles.selectedTextStyle}
        inputSearchStyle={styles.inputSearchStyle}
        iconStyle={styles.iconStyle}
        data={data}
        value={value}
        maxHeight={300}
        labelField="label"
        valueField="value"
        placeholder="Select item"
        onChange={item => {
          setValue(item.value);
        }}
      />
    );
  };

  export default SoundDropdown;

  const styles = StyleSheet.create({
    container:{

    },
    dropdown: {
      height: 50,
      width: 100,
      alignSelf:'flex-end',
      justifyContent:'center'
    },
    icon: {
    },
    placeholderStyle: {
      fontSize: 14,
      color:'#51443B',
      fontFamily:'Roboto',
      fontWeight:'400',
      lineHeight:16,
      letterSpacing:0.40,
      alignSelf:'center'
    },
    selectedTextStyle: {
      fontSize: 14,
      color:'#51443B',
      fontFamily:'Roboto',
      fontWeight:'400',
      lineHeight:16,
      letterSpacing:0.40,
      alignSelf:'center'
    },
    iconStyle: {

    },

  });