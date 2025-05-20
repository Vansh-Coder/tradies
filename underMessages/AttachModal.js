import React, {useState, useEffect} from 'react';
import { View, Text, StyleSheet, Modal, TouchableWithoutFeedback, TouchableOpacity, Alert } from 'react-native';
import { MaterialIcons, AntDesign, Ionicons } from '@expo/vector-icons';
import * as DocumentPicker from 'expo-document-picker';
import * as ImagePicker from 'expo-image-picker';

const AttachModal = ({ visible, onClose, onImagePick, onDocumentPick }) => {

  const handlePressOutside = () => {
    onClose();
  };

  const [hasCameraPermission, setHasCameraPermission] = useState(null);
  const [hasCameraRollPermission, setHasCameraRollPermission] = useState(null);

  useEffect(() => {
    const requestPermissions = async () => {
      const cameraStatus = await ImagePicker.requestCameraPermissionsAsync();
      setHasCameraPermission(cameraStatus.status === 'granted');

      const cameraRollStatus = await ImagePicker.requestMediaLibraryPermissionsAsync();
      setHasCameraRollPermission(cameraRollStatus.status === 'granted');
    };

    requestPermissions();
  }, []);

  const handlePhotos = async () => {
    if (!hasCameraRollPermission) {
      Alert.alert('Permission required', 'We need your permission to access your photos.');
      return;
    }

    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.Images,
      allowsEditing: true,
      aspect: [4, 3],
      quality: 1,
    });

    if (!result.canceled) {
      const image = result.assets[0];
      onImagePick(image);
    } else {
      Alert.alert('Error selecting image');
    }
    onClose();
  }

  const handleCamera = async () => {
    if (!hasCameraPermission) {
      Alert.alert('Permission required', 'We need your permission to use your camera.');
      return;
    }

    let result = await ImagePicker.launchCameraAsync({
      allowsEditing: true,
      aspect: [4, 3],
      quality: 1,
    });

    if (!result.canceled) {
      const image = result.assets[0];
      onImagePick(image);
    } else {
      Alert.alert('Error capturing image');
    }
    onClose();
  };

  const handleDocuments = async () => {
    try {
      const result = await DocumentPicker.getDocumentAsync({});
      if (!result.canceled && result.assets && result.assets.length > 0) {
        const document = result.assets[0];
        onDocumentPick(document);
      } else {
        Alert.alert('Error!');
      }
    } catch (error) {
      Alert.alert('Error picking document:', error);
    }
    onClose();
  };

  return (
    <Modal
      transparent={true}
      animationType="slide"
      visible={visible}
      onRequestClose={onClose}
    >
      <TouchableWithoutFeedback onPress={handlePressOutside}>
        <View style={styles.modalOverlay} />
      </TouchableWithoutFeedback>

      <TouchableWithoutFeedback onPress={() => {}}>
        <View style={styles.modalContent}>
          
          <View style={ styles.modalTitleContainer }>
            <Text style={ styles.modalTitleText }>Add Media</Text>
          </View>

          <TouchableOpacity onPress={handlePhotos} style={ styles.optionsContainer }>
            <View style={ styles.iconContainer }>
              <MaterialIcons name="photo-library" size={24} color="black" />
            </View>
            <View style={ styles.optionsTextContainer }>
              <Text style={ styles.optionsText }>Photos</Text>
            </View>
          </TouchableOpacity>

          <View style={ styles.optionsDivider }></View>

          <TouchableOpacity onPress={handleCamera} style={ styles.optionsContainer }>
            <View style={ styles.iconContainer }>
              <AntDesign name="camerao" size={24} color="black" />
            </View>
            <View style={ styles.optionsTextContainer }>
              <Text style={ styles.optionsText }>Camera</Text>
            </View>
          </TouchableOpacity>

          <View style={ styles.optionsDivider }></View>

          <TouchableOpacity onPress={handleDocuments} style={ styles.optionsContainer }>
            <View style={ styles.iconContainer }>
              <Ionicons name="document-outline" size={24} color="black" />
            </View>
            <View style={ styles.optionsTextContainer }>
              <Text style={ styles.optionsText }>Documents</Text>
            </View>
          </TouchableOpacity>

        </View>
      </TouchableWithoutFeedback>
    </Modal>
  );
};

const styles = StyleSheet.create({
  modalOverlay: {
    flex: 1,
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
  },
  modalContent: {
    position: 'absolute',
    bottom: 0,
    width: '100%',
    backgroundColor: 'white',
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    padding: 20,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: -2 },
    shadowOpacity: 0.25,
    shadowRadius: 4,
  },
  modalTitleContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 20
  },
  modalTitleText: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  optionsContainer: {
    flexDirection: 'row',
    padding: 20
  },
  iconContainer: {
    justifyContent: 'center',
    alignItems: 'center'
  },
  optionsTextContainer: {
    justifyContent: 'center',
    paddingLeft: 10
  },
  optionsText: {
    fontSize: 16,
    fontWeight: '600'
  },
  optionsDivider: {
    height: 2,
    backgroundColor: '#fff',
    elevation: 3,
    shadowOffset: { width: 1, height: 1 },
    shadowColor: '#333',
    shadowOpacity: 0.1,
    shadowRadius: 2,
  }
});

export default AttachModal;
