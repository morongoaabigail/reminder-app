import React, { useState } from 'react';
import { View, Text, TextInput, Button, FlatList, TouchableOpacity } from 'react-native';

const BirthdayReminder = () => {
  const [name, setName] = useState('');
  const [date, setDate] = useState('');
  const [birthdays, setBirthdays] = useState([]);
  const [editingIndex, setEditingIndex] = useState(null);

  const addBirthday = () => {
    if (name && date) {
      if (editingIndex !== null) {
        // If editing an existing birthday
        const updatedBirthdays = [...birthdays];
        updatedBirthdays[editingIndex] = { name, date };
        setBirthdays(updatedBirthdays);
        setEditingIndex(null);
      } else {
        // If adding a new birthday
        setBirthdays([...birthdays, { name, date }]);
      }
      setName('');
      setDate('');
    }
  };

  const editBirthday = (index) => {
    const birthdayToEdit = birthdays[index];
    setName(birthdayToEdit.name);
    setDate(birthdayToEdit.date);
    setEditingIndex(index);
  };

  const deleteBirthday = (index) => {
    const updatedBirthdays = [...birthdays];
    updatedBirthdays.splice(index, 1);
    setBirthdays(updatedBirthdays);
  };

  return (
    <View>
      <Text style={{ fontSize: 24, fontWeight: 'bold', textAlign: 'center' }}>
        Birthday Reminder
      </Text>
      <TextInput
        placeholder="Name"
        value={name}
        onChangeText={(text) => setName(text)}
        style={{ borderWidth: 1, margin: 10, padding: 10 }}
      />
      <TextInput
        placeholder="Date (MM/DD)"
        value={date}
        onChangeText={(text) => setDate(text)}
        style={{ borderWidth: 1, margin: 10, padding: 10 }}
      />
      <Button title={editingIndex !== null ? 'Update Birthday' : 'Add Birthday'} onPress={addBirthday} />
      <FlatList
        data={birthdays}
        keyExtractor={(item, index) => index.toString()}
        renderItem={({ item, index }) => (
          <View style={{ margin: 10, flexDirection: 'row', alignItems: 'center' }}>
            <Text>{item.name}</Text>
            <Text>{item.date}</Text>
            <TouchableOpacity onPress={() => editBirthday(index)}>
              <Text style={{ color: 'blue', marginLeft: 10 }}>Edit</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => deleteBirthday(index)}>
              <Text style={{ color: 'red', marginLeft: 10 }}>Delete</Text>
            </TouchableOpacity>
          </View>
        )}
      />
    </View>
  );
};

export default BirthdayReminder;
