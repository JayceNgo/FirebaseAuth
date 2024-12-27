import { StyleSheet, Text, View, TextInput, Button, ActivityIndicator } from 'react-native';
import React, { useEffect, useState } from 'react';
import { useNavigation } from '@react-navigation/native';
import { signOut } from 'firebase/auth';
import { doc, onSnapshot, updateDoc } from 'firebase/firestore';
import { auth, db } from '../firebase';

const HomeScreen = () => {
  const navigation = useNavigation();
  const [userData, setUserData] = useState(null);
  const [isEditing, setIsEditing] = useState(false);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const unsubscribe = onSnapshot(doc(db, 'users', auth.currentUser.uid), (docSnap) => {
      if (docSnap.exists()) {
        setUserData(docSnap.data());
        setLoading(false);
      }
    });

    return unsubscribe; // Cleanup listener on unmount
  }, []);

  const handleSignOut = () => {
    signOut(auth)
      .then(() => {
        navigation.replace('SignIn');
      })
      .catch((error) => alert(error.message));
  };

  const handleSave = async () => {
    try {
      const docRef = doc(db, 'users', auth.currentUser.uid);
      await updateDoc(docRef, {
        fullName: userData.fullName,
        phoneNumber: userData.phoneNumber,
      });
      alert('Information updated successfully!');
      setIsEditing(false);
    } catch (error) {
      alert(error.message);
    }
  };

  if (loading) {
    return (
      <View style={styles.container}>
        <ActivityIndicator size="large" color="#0000ff" />
      </View>
    );
  }

  return (
    <View style={styles.container}>
      {isEditing ? (
        <>
          <TextInput
            style={styles.input}
            placeholder="Full Name"
            value={userData.fullName}
            onChangeText={(text) => setUserData({ ...userData, fullName: text })}
          />
          <TextInput
            style={styles.input}
            placeholder="Phone Number"
            value={userData.phoneNumber}
            onChangeText={(text) => setUserData({ ...userData, phoneNumber: text })}
            keyboardType="phone-pad"
          />
          <Button title="Save" onPress={handleSave} />
          <Button title="Cancel" onPress={() => setIsEditing(false)} />
        </>
      ) : (
        <>
          <Text style={styles.text}>Full Name: {userData.fullName}</Text>
          <Text style={styles.text}>Phone Number: {userData.phoneNumber}</Text>
          <Text style={styles.text}>Email: {userData.email}</Text>
          <Button title="Edit Profile" onPress={() => setIsEditing(true)} />
        </>
      )}
      <Button title="Sign Out" onPress={handleSignOut} />
    </View>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    fontSize: 18,
    marginBottom: 10,
  },
  input: {
    borderWidth: 1,
    borderColor: '#ccc',
    padding: 10,
    marginBottom: 10,
    borderRadius: 5,
    width: '80%',
  },
});
