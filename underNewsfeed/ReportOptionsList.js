import React, { useState } from 'react';
import { View, Text, StyleSheet, Modal, TouchableWithoutFeedback, TouchableOpacity } from 'react-native';
import CheckBox from 'expo-checkbox';
import Toast from 'react-native-root-toast';

const ReportOptionsList = ({ visible, onClose }) => {

  const handlePressOutside = () => {
    onClose();
  };

  const [checkedOptions, setCheckedOptions] = useState({
    option1: false,
    option2: false,
    option3: false,
    option4: false,
    option5: false,
    option6: false,
    option7: false,
    option8: false,
    option9: false
  });

  const handleCheckboxChange = (option) => {
    setCheckedOptions((prev) => ({
      ...prev,
      [option]: !prev[option],
    }));
  };

  const handleReportButton = () => {
    if (Object.values(checkedOptions).includes(true)) {
      // Reporting logic here
      Toast.show('Reported! Thank you.', {
        duration: Toast.durations.SHORT,
        position: Toast.positions.BOTTOM - 75,
        shadow: true,
        animation: true,
        hideOnPress: true,
        delay: 0,
      });
      onClose();
    }
  }

  const isButtonDisabled = !Object.values(checkedOptions).includes(true);

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
            <Text style={ styles.modalTitleText }>Report</Text>
          </View>

          <View style={ styles.modalDescriptionContainer }>
            <Text style={ styles.modalDescriptionText }>Please select at least one problem</Text>
          </View>

          <TouchableOpacity onPress={() => handleCheckboxChange('option1')} style={styles.checkboxContainer}>
            <Text style={styles.optionText}>Nudity</Text>
            <CheckBox
              value={checkedOptions.option1}
              onValueChange={() => handleCheckboxChange('option1')}
              color="black"
            />
          </TouchableOpacity>

          <TouchableOpacity onPress={() => handleCheckboxChange('option2')} style={styles.checkboxContainer}>
            <Text style={styles.optionText}>Violence</Text>
            <CheckBox
              value={checkedOptions.option2}
              onValueChange={() => handleCheckboxChange('option2')}
              color="black"
            />
          </TouchableOpacity>

          <TouchableOpacity onPress={() => handleCheckboxChange('option3')} style={styles.checkboxContainer}>
            <Text style={styles.optionText}>Harassment</Text>
            <CheckBox
              value={checkedOptions.option3}
              onValueChange={() => handleCheckboxChange('option3')}
              color="black"
            />
          </TouchableOpacity>

          <TouchableOpacity onPress={() => handleCheckboxChange('option4')} style={styles.checkboxContainer}>
            <Text style={styles.optionText}>Suicide / Self-injury</Text>
            <CheckBox
              value={checkedOptions.option4}
              onValueChange={() => handleCheckboxChange('option4')}
              color="black"
            />
          </TouchableOpacity>

          <TouchableOpacity onPress={() => handleCheckboxChange('option5')} style={styles.checkboxContainer}>
            <Text style={styles.optionText}>Spam</Text>
            <CheckBox
              value={checkedOptions.option5}
              onValueChange={() => handleCheckboxChange('option5')}
              color="black"
            />
          </TouchableOpacity>

          <TouchableOpacity onPress={() => handleCheckboxChange('option6')} style={styles.checkboxContainer}>
            <Text style={styles.optionText}>Unauthorized Sales</Text>
            <CheckBox
              value={checkedOptions.option6}
              onValueChange={() => handleCheckboxChange('option6')}
              color="black"
            />
          </TouchableOpacity>

          <TouchableOpacity onPress={() => handleCheckboxChange('option7')} style={styles.checkboxContainer}>
            <Text style={styles.optionText}>Hate speech</Text>
            <CheckBox
              value={checkedOptions.option7}
              onValueChange={() => handleCheckboxChange('option7')}
              color="black"
            />
          </TouchableOpacity>

          <TouchableOpacity onPress={() => handleCheckboxChange('option8')} style={styles.checkboxContainer}>
            <Text style={styles.optionText}>Terrorism</Text>
            <CheckBox
              value={checkedOptions.option8}
              onValueChange={() => handleCheckboxChange('option8')}
              color="black"
            />
          </TouchableOpacity>

          <TouchableOpacity onPress={() => handleCheckboxChange('option9')} style={styles.checkboxContainer}>
            <Text style={styles.optionText}>Gross content</Text>
            <CheckBox
              value={checkedOptions.option9}
              onValueChange={() => handleCheckboxChange('option9')}
              color="black"
            />
          </TouchableOpacity>

          <TouchableOpacity
            style={[ styles.reportButton, { backgroundColor: isButtonDisabled ? '#d3d3d3' : 'black' } ]} 
            onPress={handleReportButton}
            disabled={isButtonDisabled}
          >
            <Text style={styles.reportButtonText}>Report</Text>
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
    height: '75%',
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
    fontSize: 23,
    fontWeight: 'bold',
  },
  modalDescriptionContainer: {
    justifyContent: 'center',
    marginBottom: 25
  },
  modalDescriptionText: {
    fontSize: 17,
    fontWeight: '500'
  },
  checkboxContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 20,
  },
  optionText: {
    fontSize: 16,
    flex: 1,
  },
  reportButton: {
    paddingVertical: 15,
    borderRadius: 20,
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 20,
  },
  reportButtonText: {
    fontSize: 18,
    fontWeight: '600',
    color: 'white'
  },
});

export default ReportOptionsList;
