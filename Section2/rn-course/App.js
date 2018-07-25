import React from 'react';
import { StyleSheet, View } from 'react-native';

import List from './src/components/List/List';
import NameInput from './src/components/NameInput/NameInput';

export default class App extends React.Component {
  state = {
    placeName: '',
    places: []
  };

  placeNameChangedHander = (value) => {
    this.setState({ placeName: value });
  };

  placeSubmitHandler = () => {
    if (this.state.placeName.trim() === '') {
      return;
    }

    this.setState(prevState => {
      return {
        places: prevState.places.concat(prevState.placeName)
      };
    });
  };

  render() {
    return (
      <View style={styles.container}>
        <NameInput
          placeName={this.state.placeName}
          placeNameChangedHander={this.placeNameChangedHander}
          placeSubmitHandler={this.placeSubmitHandler}
        />
        <List places={this.state.places} />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 26,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'flex-start',
  },
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
