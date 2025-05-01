
import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { MotiView } from 'moti';

export default function HeroSection() {
  return (
    <View style={styles.container}>
      <MotiView
        from={{ opacity: 0, translateY: -50 }}
        animate={{ opacity: 1, translateY: 0 }}
        transition={{ type: 'timing', duration: 1000 }}
      >
        <Text style={styles.title}>Revolutionizing Brands</Text>
      </MotiView>
      <MotiView
        from={{ opacity: 0, translateY: 50 }}
        animate={{ opacity: 1, translateY: 0 }}
        transition={{ type: 'timing', duration: 1000, delay: 500 }}
      >
        <Text style={styles.subtitle}>Through Design and Motion</Text>
      </MotiView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    marginTop: 100,
    paddingHorizontal: 20,
  },
  title: {
    fontSize: 36,
    fontWeight: 'bold',
    color: 'white',
  },
  subtitle: {
    fontSize: 18,
    color: '#aaa',
    marginTop: 10,
  },
});
