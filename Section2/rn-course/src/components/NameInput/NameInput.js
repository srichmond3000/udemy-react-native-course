import React from 'react';
import { View, TextInput, Button, StyleSheet } from 'react-native';

const NameInput = (props) => (
  <View style={styles.inputContainer}>
    <TextInput
      style={styles.placeInput}
      placeholder="An awesome place"
      value={props.placeName}
      onChangeText={props.placeNameChangedHander}
    />
    <Button
      title="Add"
      style={styles.placeButton}
      onPress={props.placeSubmitHandler}
    />
  </View>
);

const styles = StyleSheet.create({
  inputContainer: {
    width: "100%",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center"
  },
  placeInput: {
    width: "70%"
  },
  placeButton: {
    width: "30%"
  }
});

export default NameInput;