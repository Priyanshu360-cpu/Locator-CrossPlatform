import {TextInput} from 'react-native';
import React, { Component }  from 'react';
import styles from './styles';
const UselessTextInput = (props) => {
  return (
    <TextInput
      {...props}
      editable
      placeholder={'Enter Emergency Number'}
      placeholderTextColor="#202020"
      maxLength={40}
    />
  );
}
const Placeholder = ()=>{
const [value, onChangeText] = React.useState('');
return(<UselessTextInput
                        singleline
                        numberOfLines={1}
                        te
                        onChangeText={text => onChangeText(text)}
                        value={value}
                        style={styles.nametag}
                      />)

}
export default Placeholder;