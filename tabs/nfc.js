import React, { useState, useEffect } from "react";
import { View, Text, StyleSheet, TouchableOpacity, Alert, ActivityIndicator } from 'react-native';
import NfcManager, { NfcEvents, NfcTech, Ndef } from 'react-native-nfc-manager';
import { SafeAreaView } from "react-native-safe-area-context";

const NFCScreen = ({ navigation }) => {
  const [hasNfc, setHasNFC] = useState(null);
  const [isScanning, setIsScanning] = useState(false);
  const [isWriting, setIsWriting] = useState(false);

  useEffect(() => {
    const checkIsSupported = async () => {
      const deviceIsSupported = await NfcManager.isSupported();
      setHasNFC(deviceIsSupported);
      if (deviceIsSupported) {
        await NfcManager.start();
      }
    };

    checkIsSupported();

    return () => {
      // Clean up NFC listeners and requests on unmount
      NfcManager.setEventListener(NfcEvents.DiscoverTag, null);
      NfcManager.setEventListener(NfcEvents.StateChange, null);
      NfcManager.cancelTechnologyRequest();
    };
  }, []);

  useEffect(() => {
    const handleDiscoverTag = (tag) => {
      console.log('Tag found:', tag);
      setIsScanning(false);
      Alert.alert('Tag detected', `Tag ID: ${tag.id}`);
    };

    NfcManager.setEventListener(NfcEvents.DiscoverTag, handleDiscoverTag);

    return () => {
      NfcManager.setEventListener(NfcEvents.DiscoverTag, null);
    };
  }, []);

  const readTag = async () => {
    if (isScanning || isWriting) return;
    setIsScanning(true);
    try {
      await NfcManager.requestTechnology(NfcTech.Ndef);
      await NfcManager.ndefHandler.getNdefMessage(); // Example of a read operation
    } catch (error) {
      console.warn('Failed to read tag:', error);
      Alert.alert('Error', 'Failed to read tag.');
    } finally {
      try {
        await NfcManager.cancelTechnologyRequest();
      } catch (error) {
        console.error('Failed to cancel technology request:', error);
      }
      setIsScanning(false);
    }
  };

  const writeNFC = async () => {
    if (isScanning || isWriting) return;
    setIsWriting(true);
    try {
      await NfcManager.requestTechnology(NfcTech.Ndef);

      const bytes = Ndef.encodeMessage([Ndef.uriRecord('https://blog.logrocket.com/')]);

      if (bytes) {
        await NfcManager.ndefHandler.writeNdefMessage(bytes);
        Alert.alert('Success', 'Tag written successfully!');
      }
    } catch (ex) {
      console.warn('Failed to write tag:', ex);
      Alert.alert('Error', 'Failed to write tag.');
    } finally {
      try {
        await NfcManager.cancelTechnologyRequest();
      } catch (error) {
        console.error('Failed to cancel technology request:', error);
      }
      setIsWriting(false);
    }
  };

  const cancelReadTag = async () => {
    if (!isScanning) return;
    try {
      await NfcManager.cancelTechnologyRequest();
      setIsScanning(false);
    } catch (error) {
      console.error('Failed to cancel tag read:', error);
    }
  };

  if (hasNfc === null) return null;

  if (!hasNfc) {
    return (
      <View style={styles.sectionContainer}>
        <Text>NFC not supported</Text>
      </View>
    );
  }

  return (
    <SafeAreaView style={styles.mainContainer}>
      <Text>Hello world</Text>
      <TouchableOpacity style={styles.scanButton} onPress={readTag} disabled={isScanning || isWriting}>
        <Text style={styles.scanButtonText}>Scan Tag</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.scanButton} onPress={writeNFC} disabled={isScanning || isWriting}>
        <Text style={styles.scanButtonText}>Write Tag</Text>
      </TouchableOpacity>
      {(isScanning || isWriting) && <ActivityIndicator size="large" color="#0000ff" />}
      <TouchableOpacity style={styles.cancelButton} onPress={cancelReadTag} disabled={!isScanning}>
        <Text style={styles.cancelButtonText}>Cancel Scan</Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'white',
  },
  scanButton: {
    justifyContent: 'center',
    alignItems: 'center',
    borderWidth: 1,
    borderColor: 'green',
    borderRadius: 20,
    backgroundColor: 'green',
    padding: 15,
    marginBottom: 15,
  },
  scanButtonText: {
    fontSize: 15,
    fontWeight: '600',
    color: 'white',
  },
  cancelButton: {
    justifyContent: 'center',
    alignItems: 'center',
    borderWidth: 1,
    borderColor: 'black',
    borderRadius: 20,
    backgroundColor: 'black',
    padding: 15,
  },
  cancelButtonText: {
    fontSize: 15,
    fontWeight: '600',
    color: 'white',
  },
  sectionContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default NFCScreen;
