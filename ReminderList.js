import React from 'react';
import { View, Text, FlatList, StyleSheet, TouchableOpacity } from 'react-native';

function ReminderList({ reminders, onEdit, onDelete }) {
  const renderReminderItem = ({ item }) => (
    <View style={styles.reminderItem}>
      <Text style={styles.reminderTitle}>Name: {item.title}</Text>
      <Text style={styles.reminderDateTime}>Date: {item.date.toString()}</Text>
      <Text style={styles.reminderDateTime}>Time: {item.time.toString()}</Text>
      <View style={styles.buttonContainer}>
      <TouchableOpacity style={styles.editButton} onPress={() => onEdit(item)}>
          <Text style={styles.buttonText}>Edit</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.deleteButton} onPress={() => onDelete(item)}>
          <Text style={styles.buttonText}>Delete</Text>
        </TouchableOpacity>
      </View>
    </View>
  );

  return (
    <View style={styles.container}>
      <Text style={styles.reminderText}>Reminders:</Text>
      {reminders.length > 0 ? (
        <FlatList
          data={reminders}
          keyExtractor={(item, index) => index.toString()}
          renderItem={renderReminderItem}
        />
      ) : (
        <Text style={styles.emptyText}>No reminders available</Text>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    justifyContent: 'center',
  },
  reminderText: {
    fontSize: 30,
    fontWeight: 'bold',
    marginTop: "30%",
  },
  reminderItem: {
    marginBottom: 20,
    borderBottomWidth: 1,
    borderBottomColor: 'lightgray',
    paddingBottom: 10,
  },
  reminderTitle: {
    fontSize: 16,
  },
  reminderDateTime: {
    fontSize: 14,
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 10,
  },
  editButton: {
    backgroundColor: '#687EFF',
    padding: 10,
    borderRadius: 5,
    marginRight: 10,
  },
  deleteButton: {
    backgroundColor: 'red',
    padding: 10,
    borderRadius: 5,
  },
  buttonText: {
    color: 'white',
    fontSize: 14,
  },
  emptyText: {
    fontSize: 16,
    fontStyle: 'italic',
    marginTop: 20,
  },
});

export default ReminderList;
