import React, { useState, useEffect } from "react";
import {
  View,
  Text,
  StyleSheet,
  TextInput,
  TouchableOpacity,
  ScrollView,
  TouchableWithoutFeedback,
  Keyboard,
  Alert,
} from "react-native";
import { MaterialCommunityIcons, Ionicons } from "@expo/vector-icons";
import EditImageCard from "../cards/EditImageCard";
import * as ImagePicker from "expo-image-picker";

const AddGroupScreen = ({ navigation }) => {
  const [imageAdded, setImageAdded] = useState(false);
  const [imageUri, setImageUri] = useState("");
  const [hasCameraRollPermission, setHasCameraRollPermission] = useState(null);

  useEffect(() => {
    const requestPermissions = async () => {
      const cameraRollStatus =
        await ImagePicker.requestMediaLibraryPermissionsAsync();
      setHasCameraRollPermission(cameraRollStatus.status === "granted");
    };

    requestPermissions();
  }, []);

  const handleAddImage = async () => {
    if (!hasCameraRollPermission) {
      Alert.alert(
        "Permission required",
        "We need your permission to access your photos."
      );
      return;
    }

    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.Images,
      allowsEditing: true,
      aspect: [1, 1],
      quality: 1,
    });

    if (!result.canceled) {
      const image = result.assets[0];
      setImageUri(image.uri);
      setImageAdded(true);
    } else {
      Alert.alert("Error selecting image");
    }
  };

  const [nameInput, setNameInput] = useState("");
  const [descriptionInput, setDescriptionInput] = useState("");

  const [eventDate, setEventDate] = useState(new Date());

  const onDateChange = (event, eventDate) => {
    if (eventDate !== undefined) {
      setEventDate(eventDate);
    }
  };

  const [eventTime, setEventTime] = useState(new Date());

  const onTimeChange = (event, eventTime) => {
    if (eventTime !== undefined) {
      setEventTime(eventTime);
    }
  };

  const handleEditOrganizers = () => {
    navigation.navigate("EditOrganizers");
  };

  const handleEditMembers = () => {
    navigation.navigate("EditMembers");
  };

  return (
    <View style={styles.mainContainer}>
      <TouchableWithoutFeedback
        onPress={() => {
          Keyboard.dismiss();
        }}
      >
        <ScrollView
          style={styles.scrollContainer}
          showsVerticalScrollIndicator={false}
        >
          <View
            style={[
              styles.editImageContainer,
              !imageAdded && styles.editImageContainerOffset,
            ]}
          >
            {imageAdded ? (
              <EditImageCard
                imageUrl={imageUri}
                id={1}
                onRemoveImage={handleAddImage}
                imageContainerOffset={styles.editImage}
              />
            ) : (
              <TouchableOpacity
                onPress={handleAddImage}
                style={styles.addImageButton}
              >
                <Text style={styles.addImageButtonText}>Add Group Image</Text>
              </TouchableOpacity>
            )}
          </View>
          <View style={styles.nameTitleContainer}>
            <Text style={styles.nameTitleText}>Group Name</Text>
          </View>
          <View style={styles.nameFieldContainer}>
            <TextInput
              style={styles.nameField}
              value={nameInput}
              onChangeText={setNameInput}
              placeholder="Group Name..."
            />
          </View>
          <View style={styles.descriptionTitleContainer}>
            <Text style={styles.descriptionTitleText}>Description</Text>
          </View>
          <View style={styles.descriptionFieldContainer}>
            <TextInput
              style={styles.descriptionField}
              value={descriptionInput}
              onChangeText={setDescriptionInput}
              placeholder="Group Description..."
            />
          </View>
          <View style={styles.dateTitleContainer}>
            <Text style={styles.dateTitleText}>Date</Text>
          </View>
          <View style={styles.dateFieldContainer}>
            <View style={styles.dateIconContainer}>
              <MaterialCommunityIcons name="calendar" size={24} color="black" />
            </View>
            <View style={styles.datePickerContainer}>
              <Text>Date Time Picker</Text>
            </View>
          </View>
          <View style={styles.timeTitleContainer}>
            <Text style={styles.timeTitleText}>Time</Text>
          </View>
          <View style={styles.timeFieldContainer}>
            <View style={styles.timeIconContainer}>
              <MaterialCommunityIcons
                name="clock-time-three-outline"
                size={24}
                color="black"
              />
            </View>
            <View style={styles.timePickerContainer}>
              <Text>Date Time Picker</Text>
            </View>
          </View>
          <View style={styles.locationTitleContainer}>
            <Text style={styles.locationTitleText}>Location</Text>
          </View>
          <View style={styles.locationFieldContainer}>
            <View style={styles.locationIconContainer}>
              <Ionicons name="location-outline" size={25} color="black" />
            </View>
            <View style={styles.locationField}>
              <Text style={styles.locationFieldText}>Tempe, AZ</Text>
            </View>
          </View>
          <View style={styles.organizersAndMembersContainer}>
            <View style={styles.editOrganizersButtonContainer}>
              <TouchableOpacity
                onPress={handleEditOrganizers}
                style={styles.editOrganizersButton}
              >
                <View style={styles.editOrganizersTextContainer}>
                  <Text style={styles.editOrganizersText}>Edit Organizers</Text>
                </View>
                <View style={styles.editOrganizersIconContainer}>
                  <MaterialCommunityIcons
                    name="account-edit"
                    size={24}
                    color="black"
                  />
                </View>
              </TouchableOpacity>
            </View>
            <View style={styles.editMembersButtonContainer}>
              <TouchableOpacity
                onPress={handleEditMembers}
                style={styles.editMembersButton}
              >
                <View style={styles.editMembersTextContainer}>
                  <Text style={styles.editMembersText}>Edit Members</Text>
                </View>
                <View style={styles.editMembersIconContainer}>
                  <MaterialCommunityIcons
                    name="account-edit"
                    size={24}
                    color="black"
                  />
                </View>
              </TouchableOpacity>
            </View>
          </View>
        </ScrollView>
      </TouchableWithoutFeedback>
    </View>
  );
};

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    backgroundColor: "white",
  },
  scrollContainer: {
    flex: 1,
    backgroundColor: "white",
    paddingHorizontal: 10,
  },
  editImageContainer: {
    width: "100%",
    height: 200,
    backgroundColor: "#e5e4e2",
    borderRadius: 20,
    marginVertical: 10,
  },
  editImageContainerOffset: {
    justifyContent: "center",
    alignItems: "center",
  },
  addImageButton: {
    justifyContent: "center",
    alignItems: "center",
    borderWidth: 1,
    borderColor: "grey",
    borderRadius: 20,
    backgroundColor: "grey",
    paddingVertical: 10,
    paddingHorizontal: 20,
  },
  addImageButtonText: {
    fontSize: 15,
    fontWeight: "600",
    color: "white",
  },
  editImage: {
    width: "100%",
    height: 200,
  },
  nameTitleContainer: {
    justifyContent: "center",
    marginBottom: 10,
  },
  nameTitleText: {
    fontSize: 15,
    fontWeight: "600",
  },
  nameFieldContainer: {
    marginBottom: 15,
  },
  nameField: {
    borderWidth: 1,
    borderColor: "black",
    borderRadius: 10,
    padding: 10,
  },
  descriptionTitleContainer: {
    justifyContent: "center",
    marginBottom: 10,
  },
  descriptionTitleText: {
    fontSize: 15,
    fontWeight: "600",
  },
  descriptionFieldContainer: {
    marginBottom: 15,
  },
  descriptionField: {
    borderWidth: 1,
    borderColor: "black",
    borderRadius: 10,
    padding: 10,
  },
  dateTitleContainer: {
    justifyContent: "center",
    marginBottom: 10,
  },
  dateTitleText: {
    fontSize: 15,
    fontWeight: "600",
  },
  dateFieldContainer: {
    flexDirection: "row",
    borderWidth: 1,
    borderColor: "black",
    borderRadius: 10,
    padding: 10,
    marginBottom: 15,
  },
  dateIconContainer: {
    justifyContent: "center",
    alignItems: "center",
  },
  datePickerContainer: {
    flex: 1,
  },
  timeTitleContainer: {
    justifyContent: "center",
    marginBottom: 10,
  },
  timeTitleText: {
    fontSize: 15,
    fontWeight: "600",
  },
  timeFieldContainer: {
    flexDirection: "row",
    borderWidth: 1,
    borderColor: "black",
    borderRadius: 10,
    padding: 10,
    marginBottom: 15,
  },
  timeIconContainer: {
    justifyContent: "center",
    alignItems: "center",
  },
  timePickerContainer: {
    flex: 1,
  },
  locationTitleContainer: {
    justifyContent: "center",
    marginBottom: 10,
  },
  locationTitleText: {
    fontSize: 15,
    fontWeight: "600",
  },
  locationFieldContainer: {
    flexDirection: "row",
    borderWidth: 1,
    borderColor: "black",
    borderRadius: 10,
    padding: 10,
    marginBottom: 20,
  },
  locationIconContainer: {
    justifyContent: "center",
    alignItems: "center",
  },
  locationField: {
    flex: 1,
    justifyContent: "center",
  },
  locationFieldText: {
    fontSize: 15,
    fontWeight: "500",
    paddingLeft: 10,
  },
  organizersAndMembersContainer: {
    flexDirection: "row",
    marginBottom: 20,
  },
  editOrganizersButtonContainer: {
    flex: 1,
    justifyContent: "center",
    paddingLeft: 3,
    paddingRight: 7,
  },
  editOrganizersButton: {
    flexDirection: "row",
    justifyContent: "center",
    paddingVertical: 10,
    borderWidth: 1,
    borderColor: "white",
    borderRadius: 10,
    backgroundColor: "white",
    elevation: 2,
    shadowOffset: { width: 0.5, height: 0.5 },
    shadowColor: "#333",
    shadowOpacity: 0.3,
    shadowRadius: 2,
  },
  editOrganizersTextContainer: {
    justifyContent: "center",
    alignItems: "center",
    marginRight: 5,
  },
  editOrganizersText: {
    fontSize: 17,
    fontWeight: "600",
  },
  editOrganizersIconContainer: {
    justifyContent: "center",
    alignItems: "center",
  },
  editMembersButtonContainer: {
    flex: 1,
    justifyContent: "center",
    paddingLeft: 7,
    paddingRight: 3,
  },
  editMembersButton: {
    flexDirection: "row",
    justifyContent: "center",
    paddingVertical: 10,
    borderWidth: 1,
    borderColor: "white",
    borderRadius: 10,
    backgroundColor: "white",
    elevation: 2,
    shadowOffset: { width: 0.5, height: 0.5 },
    shadowColor: "#333",
    shadowOpacity: 0.3,
    shadowRadius: 2,
  },
  editMembersTextContainer: {
    justifyContent: "center",
    alignItems: "center",
    marginRight: 5,
  },
  editMembersText: {
    fontSize: 17,
    fontWeight: "600",
  },
  editMembersIconContainer: {
    justifyContent: "center",
    alignItems: "center",
  },
});

export default AddGroupScreen;
