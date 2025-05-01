
import React from 'react';
import { SafeAreaView, ScrollView, StatusBar, StyleSheet } from 'react-native';
import HeroSection from './components/HeroSection';

export default function App() {
  return (
    <SafeAreaView style={styles.container}>
      <StatusBar barStyle="light-content" />
      <ScrollView contentContainerStyle={styles.scrollContent}>
        <HeroSection />
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#000',
  },
  scrollContent: {
    paddingBottom: 60,
  },
});
