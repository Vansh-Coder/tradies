import React, { useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Alert,
  TextInput,
  TouchableWithoutFeedback,
  Keyboard,
  Platform,
} from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";

const EditAccountScreen = ({ navigation }) => {
  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [number, setNumber] = useState("");
  const [birthDate, setBirthDate] = useState(new Date());

  const onDateChange = (event, selectedDate) => {
    if (selectedDate !== undefined) {
      setBirthDate(selectedDate);
    }
  };

  return (
    <TouchableWithoutFeedback
      onPress={() => {
        Keyboard.dismiss();
      }}
    >
      <View style={styles.mainContainer}>
        <View style={styles.accountDetailsContainer}>
          <View style={styles.nameTitleContainer}>
            <Text style={styles.nameTitleText}>Full Name</Text>
          </View>
          <View style={styles.nameFieldContainer}>
            <TextInput
              style={styles.nameField}
              placeholder="Full Name"
              onChangeText={setFullName}
              value={fullName}
            />
          </View>
          <View style={styles.emailTitleContainer}>
            <Text style={styles.emailTitleText}>University Email</Text>
          </View>
          <View style={styles.emailFieldContainer}>
            <TextInput
              style={styles.emailField}
              placeholder="University Email"
              onChangeText={setEmail}
              value={email}
            />
          </View>
          <View style={styles.contactTitleContainer}>
            <Text style={styles.contactTitleText}>Contact No.</Text>
          </View>
          <View style={styles.contactFieldOuterContainer}>
            <View style={styles.contactFieldInnerContainer}>
              <Text style={styles.countryCodeText}>+1</Text>
              <TextInput
                style={styles.contactField}
                placeholder="Contact No."
                onChangeText={setNumber}
                value={number}
              />
            </View>
          </View>
          <View style={styles.DOBTitleContainer}>
            <Text style={styles.DOBTitleText}>Birth Date</Text>
          </View>
          <View style={styles.DOBFieldContainer}>
            <TouchableOpacity style={styles.DOBField} onPress={() => {}}>
              <View style={styles.calendarIconContainer}>
                <MaterialCommunityIcons
                  name="calendar"
                  size={24}
                  color="black"
                />
              </View>
              <View>
                <Text>Date Time Picker!</Text>
              </View>
            </TouchableOpacity>
          </View>
        </View>
        <View style={styles.saveButtonContainer}>
          <TouchableOpacity
            onPress={() => Alert.alert("Save button pressed")}
            style={styles.saveButton}
          >
            <Text style={styles.saveButtonText}>Save</Text>
          </TouchableOpacity>
        </View>
      </View>
    </TouchableWithoutFeedback>
  );
};

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    flexDirection: "column",
    paddingTop: 20,
    paddingHorizontal: 15,
    backgroundColor: "white",
  },
  accountDetailsContainer: {
    flex: 1,
    //backgroundColor: 'pink'
  },
  nameTitleContainer: {
    marginBottom: 10,
    //backgroundColor: 'grey'
  },
  nameTitleText: {
    fontSize: 17,
    fontWeight: "500",
    //backgroundColor: 'yellow'
  },
  nameFieldContainer: {
    marginBottom: 15,
    //backgroundColor: 'orange'
  },
  nameField: {
    fontSize: 16,
    borderWidth: 1,
    borderColor: "grey",
    borderRadius: 10,
    padding: 10,
    //backgroundColor: 'cyan'
  },
  emailTitleContainer: {
    marginBottom: 10,
    //backgroundColor: 'grey'
  },
  emailTitleText: {
    fontSize: 17,
    fontWeight: "500",
    //backgroundColor: 'yellow'
  },
  emailFieldContainer: {
    marginBottom: 15,
    //backgroundColor: 'orange'
  },
  emailField: {
    fontSize: 16,
    borderWidth: 1,
    borderColor: "grey",
    borderRadius: 10,
    padding: 10,
    //backgroundColor: 'cyan'
  },
  contactTitleContainer: {
    marginBottom: 10,
    //backgroundColor: 'grey'
  },
  contactTitleText: {
    fontSize: 17,
    fontWeight: "500",
    //backgroundColor: 'yellow'
  },
  contactFieldOuterContainer: {
    marginBottom: 15,
    //backgroundColor: 'orange'
  },
  contactFieldInnerContainer: {
    flexDirection: "row",
    borderWidth: 1,
    borderColor: "grey",
    borderRadius: 10,
    padding: 10,
    alignItems: "center",
    //backgroundColor: 'cyan'
  },
  countryCodeText: {
    fontSize: 16,
    //backgroundColor: 'grey'
  },
  contactField: {
    flex: 1,
    fontSize: 16,
    borderWidth: 1,
    borderColor: "white",
    paddingLeft: 5,
    //backgroundColor: 'pink'
  },
  DOBTitleContainer: {
    marginBottom: 10,
    //backgroundColor: 'yellow'
  },
  DOBTitleText: {
    fontSize: 17,
    fontWeight: "500",
    //backgroundColor: 'orange'
  },
  DOBFieldContainer: {
    marginBottom: 15,
    //backgroundColor: 'yellow'
  },
  DOBField: {
    borderWidth: 1,
    borderColor: "grey",
    borderRadius: 10,
    padding: 10,
    //backgroundColor: 'pink',
    flexDirection: "row",
  },
  calendarIconContainer: {
    justifyContent: "center",
    alignItems: "center",
  },
  saveButtonContainer: {
    flex: 1,
    justifyContent: "center",
    //backgroundColor: 'grey'
  },
  saveButton: {
    borderWidth: 1,
    borderColor: "#E3E5E5",
    borderRadius: 20,
    justifyContent: "center",
    alignItems: "center",
    paddingVertical: 10,
    backgroundColor: "#E3E5E5",
  },
  saveButtonText: {
    fontSize: 17,
    fontWeight: "500",
    //backgroundColor: 'green'
  },
});

export default EditAccountScreen;
