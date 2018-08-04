import React from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
} from 'react-360';

/* ======================================================================
// Default view that includes a visual interface.
====================================================================== */
export default class ReactVirtualRealityPlayground extends React.Component {
  render() {
    return (
      <View style={styles.panel}>
        <View style={styles.greetingBox}>
          <Text style={styles.greeting}>
            Welcome to React VR Playground!
          </Text>
        </View>
      </View>
    );
  }
};

/* ======================================================================
// Styling for default view.
====================================================================== */
const styles = StyleSheet.create({
  panel: {
    width: 1000,
    height: 600,
    backgroundColor: 'rgba(76, 16, 136, 0.4)',
    justifyContent: 'center',
    alignItems: 'center',
  },
  greetingBox: {
    padding: 20,
    backgroundColor: 'rgba(76, 16, 136, 1)',
    borderColor: '#000',
    borderWidth: 2,
  },
  greeting: {
    fontSize: 30,
  },
});

AppRegistry.registerComponent('ReactVirtualRealityPlayground', () => ReactVirtualRealityPlayground);
