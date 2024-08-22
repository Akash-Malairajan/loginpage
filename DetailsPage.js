import React from 'react';
import { View, Text, StyleSheet, SafeAreaView, ScrollView } from 'react-native';

const DetailsPage = ({ route }) => {
  const { firstName, lastName, email, phone } = route.params;

  return (
    <SafeAreaView style={styles.safeArea}>
      <ScrollView contentContainerStyle={styles.scrollViewContent}>
        <View style={styles.container}>
          <Text style={styles.title}>Your Details</Text>
          <View style={styles.detailsContainer}>
            <Text style={styles.detail}>First Name: <Text style={styles.value}>{firstName}</Text></Text>
            <Text style={styles.detail}>Last Name: <Text style={styles.value}>{lastName}</Text></Text>
            <Text style={styles.detail}>Email: <Text style={styles.value}>{email}</Text></Text>
            <Text style={styles.detail}>Phone: <Text style={styles.value}>{phone}</Text></Text>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: '#e6f2ff',
  },
  scrollViewContent: {
    flexGrow: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
  },
  container: {
    width: '100%',
    maxWidth: 600,
    backgroundColor: '#ffffff',
    borderRadius: 10,
    padding: 20,
    elevation: 5,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 5,
  },
  title: {
    fontSize: 30,
    fontWeight: 'bold',
    marginBottom: 20,
    color: '#003366',
    textAlign: 'center',
  },
  detailsContainer: {
    width: '100%',
  },
  detail: {
    fontSize: 18,
    marginBottom: 15,
    color: '#003366',
    lineHeight: 24,
  },
  value: {
    fontWeight: 'bold',
    color: '#004080',
  },
});

export default DetailsPage;
