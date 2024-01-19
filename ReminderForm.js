import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity , ScrollView} from 'react-native';
import DateTimePicker from 'react-native-modal-datetime-picker';
import { useNavigation } from '@react-navigation/native';

function ReminderForm({ reminders, setReminders }) {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [isDatePickerVisible, setDatePickerVisible] = useState(false);
  const [isTimePickerVisible, setTimePickerVisible] = useState(false);
  const [selectedDate, setSelectedDate] = useState('');
  const [selectedTime, setSelectedTime] = useState('');
  const navigation = useNavigation();

  const showDatePicker = () => setDatePickerVisible(true);
  const hideDatePicker = () => setDatePickerVisible(false);
  const showTimePicker = () => setTimePickerVisible(true);
  const hideTimePicker = () => setTimePickerVisible(false);

  const handleDatePicked = (date) => {
    setSelectedDate(date);
    hideDatePicker();
  };

  const handleTimePicked = (time) => {
    setSelectedTime(time);
    hideTimePicker();
  };

  const formatDate = (date) => {
    const options = { year: 'numeric', month: 'long', day: 'numeric' };
    return date.toLocaleDateString(undefined, options);
  };

  const formatTime = (time) => {
    return time.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
  };

  const saveReminder = () => {
    if (title && selectedDate && selectedTime) {
      const newReminder = {
        title,
        description,
        date: formatDate(selectedDate),
        time: formatTime(selectedTime),
      };
      setReminders([...reminders, newReminder]);

      setTitle('');
      setDescription('');
      setSelectedDate('');
      setSelectedTime('');

      navigation.navigate('ReminderList');
    }
  };

  const cancelReminder = () => {
    navigation.navigate('LandingPage'); 
  };

  return (
    <ScrollView style={{marginTop:200}}>


   
        <View style={styles.modalContainer}>
    <Text style={{paddingBottom:10, fontWeight: 'bold', fontSize:30}}>Set a New Reminder</Text>
      <TextInput
        style={styles.input}
        placeholder="Name"
        value={title}
        onChangeText={(text) => setTitle(text)}
      />
      

      <View style={styles.dateTimeContainer}>
        <View style={styles.datePickerContainer}>
          <TouchableOpacity style={styles.button} onPress={showDatePicker}>
            <Text style={styles.buttonText1}>Select Date</Text>
          </TouchableOpacity>
          <Text style={styles.label}>Reminder Date:</Text>
          <Text style={styles.dateText}>{selectedDate ? formatDate(selectedDate) : ''}</Text>
        </View>

        <View style={styles.timePickerContainer}>
          <TouchableOpacity style={styles.button} onPress={showTimePicker}>
            <Text style={styles.buttonText1}>Select Time</Text>
          </TouchableOpacity>
          <Text style={styles.label}>Reminer Time:</Text>
          <Text style={styles.timeText}>{selectedTime ? formatTime(selectedTime) : ''}</Text>
        </View>
      </View>

      <View style={styles.buttonContainer}>
        <TouchableOpacity style={styles.saveButton} onPress={saveReminder}>
          <Text style={styles.buttonText}>Save Event</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.cancelButton} onPress={cancelReminder}>
          <Text style={styles.buttonText}>Cancel</Text>
        </TouchableOpacity>
      </View>

      <DateTimePicker
        isVisible={isDatePickerVisible}
        onConfirm={handleDatePicked}
        onCancel={hideDatePicker}
        mode="date"
      />
      <DateTimePicker
        isVisible={isTimePickerVisible}
        onConfirm={handleTimePicked}
        onCancel={hideTimePicker}
        mode="time"
      />
    </View>
    </ScrollView>
  );
}

const styles = {
  modalContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',

  },
  input: {
    width: '80%',
    fontSize: 18,
    borderWidth: 1,
    borderColor: 'gray',
    borderRadius: 5,
    padding: 8,
    marginBottom: 10,
  },

  dateTimeContainer: {
    flexDirection: 'column',
    
    
  },
  datePickerContainer: {
    width: '50%',
    alignItems: 'center',
  },
  timePickerContainer: {
    width: '50%',
    alignItems: 'center',
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '80%',
    margin: 10,
  },
 saveButton: {
    width: '39%',
    backgroundColor: '#687EFF',
    padding: 10,
    margin: 5,
    alignItems: 'center',
  },
  cancelButton: {
    width: '39%',
    backgroundColor: '#b8bcbf',
  
    padding: 10,
    margin: 5,
    alignItems: 'center',
  },
  button: {
    backgroundColor: '#b8bcbf',
    marginRight:200,
    padding: 10,
    margin: 5,
    borderRadius: 10,
    
    width:'60%',
  },

    buttonText1: {
    color: 'black',
    fontSize: 16,
    
  },
  buttonText: {
    color: 'white',
    fontSize: 16,
    
  },


  label: {
    fontSize: 16,
    fontWeight: 'bold',
    marginLeft: "250%",
    width:400,
    bottom:40,
  },
  dateText: {
    fontSize: 14,
    marginLeft: "145%",
    width:200,
    bottom:35,
  },
  timeText: {
    fontSize: 14,
    marginLeft: "145%",
    width:200,
    bottom:35,
  },
};

export default ReminderForm;
