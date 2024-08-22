import React, { useState, useCallback } from 'react';
import { View, Text, TextInput, Alert, StyleSheet, ScrollView, TouchableOpacity } from 'react-native';
import { useFocusEffect } from '@react-navigation/native';

const LoginPage = ({ navigation }) => {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');

  const [firstNameError, setFirstNameError] = useState('');
  const [lastNameError, setLastNameError] = useState('');
  const [emailError, setEmailError] = useState('');
  const [phoneError, setPhoneError] = useState('');

  const validateName = (name) => /^[a-zA-Z\s]+$/.test(name);
  const validateEmail = (email) => /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/.test(email);
  const validatePhone = (phone) => /^[0-9]{10}$/.test(phone);

  const handleFirstNameChange = (text) => {
    setFirstNameError(validateName(text) ? '' : 'Invalid input: Only letters and spaces are allowed.');
    setFirstName(text);
  };

  const handleLastNameChange = (text) => {
    setLastNameError(validateName(text) ? '' : 'Invalid input: Only letters and spaces are allowed.');
    setLastName(text);
  };

  const handleEmailChange = (text) => {
    setEmailError(validateEmail(text) ? '' : 'Invalid email address.');
    setEmail(text);
  };

  const handlePhoneChange = (text) => {
    setPhoneError(validatePhone(text) ? '' : 'Invalid phone number: Must be 10 digits.');
    setPhone(text);
  };

  const handleLogin = () => {
    if (!firstNameError && !lastNameError && !emailError && !phoneError && firstName && lastName && email && phone) {
      navigation.navigate('Details', { firstName, lastName, email, phone });
    } else {
      Alert.alert('Error', 'Please fill out all fields correctly.');
    }
  };

  useFocusEffect(
    useCallback(() => {
      setFirstName('');
      setLastName('');
      setEmail('');
      setPhone('');
      setFirstNameError('');
      setLastNameError('');
      setEmailError('');
      setPhoneError('');
    }, [])
  );

  return (
    <ScrollView contentContainerStyle={styles.container} keyboardShouldPersistTaps="handled">
      <Text style={styles.title}>Login</Text>

      <Text style={styles.label}>First Name:</Text>
      <TextInput
        style={styles.input}
        value={firstName}
        onChangeText={handleFirstNameChange}
        placeholder="Enter your first name"
        placeholderTextColor="#999"
        selectionColor="#000"
      />
      {firstNameError ? <Text style={styles.errorText}>{firstNameError}</Text> : null}

      <Text style={styles.label}>Last Name:</Text>
      <TextInput
        style={styles.input}
        value={lastName}
        onChangeText={handleLastNameChange}
        placeholder="Enter your last name"
        placeholderTextColor="#999"
        selectionColor="#000"
      />
      {lastNameError ? <Text style={styles.errorText}>{lastNameError}</Text> : null}

      <Text style={styles.label}>Email:</Text>
      <TextInput
        style={styles.input}
        value={email}
        onChangeText={handleEmailChange}
        placeholder="Enter your email"
        placeholderTextColor="#999"
        keyboardType="email-address"
        selectionColor="#000"
      />
      {emailError ? <Text style={styles.errorText}>{emailError}</Text> : null}

      <Text style={styles.label}>Phone Number:</Text>
      <TextInput
        style={styles.input}
        value={phone}
        onChangeText={handlePhoneChange}
        placeholder="Enter your phone number"
        placeholderTextColor="#999"
        keyboardType="phone-pad"
        selectionColor="#000"
      />
      {phoneError ? <Text style={styles.errorText}>{phoneError}</Text> : null}

      <TouchableOpacity style={styles.button} onPress={handleLogin}>
        <Text style={styles.buttonText}>Login to proceed</Text>
      </TouchableOpacity>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    justifyContent: 'center',
    padding: 20,
    backgroundColor: '#e6f2ff',
  },
  title: {
    fontSize: 28,
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 40,
    color: '#004080',
  },
  label: {
    fontSize: 16,
    fontWeight: 'bold',
    marginBottom: 8,
    color: '#003366',
  },
  input: {
    height: 40,
    borderColor: '#66b3ff',
    borderWidth: 1,
    borderRadius: 10,
    marginBottom: 20,
    paddingHorizontal: 10,
    backgroundColor: '#cce6ff',
  },
  errorText: {
    color: 'red',
    marginBottom: 20,
    fontSize: 14,
  },
  button: {
    height: 50,
    backgroundColor: '#0073e6',
    borderRadius: 10,
    justifyContent: 'center',
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 3,
    marginBottom: 20,
  },
  buttonText: {
    color: '#fff',
    fontSize: 18,
    fontWeight: 'bold',
  },
});

export default LoginPage;
