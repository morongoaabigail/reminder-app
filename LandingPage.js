import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { Card, Image } from 'react-native-elements';
import { Ionicons } from '@expo/vector-icons';

const LandingPage = () => {
  const navigation = useNavigation();

  const handleGetStarted = () => {
    navigation.navigate('ReminderForm');
  };

  return (
    <View style={styles.container}>
      <Text style={{top:130, marginLeft:80, color:"#687EFF", fontWeight:"800", fontSize:25 }}>Birthday reminder</Text>
      <View style={styles.overlay}>
        <Card containerStyle={styles.card}>
          <Image
            source={require('./assets/reminder.png')}
            style={styles.image}
          />
        
        </Card>
        
         
          <TouchableOpacity
            style={styles.getStartedButton}
            onPress={handleGetStarted}
          >
           <Ionicons name="add-circle" size={50} color="#687EFF"  />
          </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
  },
  overlay: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  card: {
    width: '90%',
    marginTop:100,
    borderRadius: 16,
      backgroundColor: 'white',
      
  },
  image: {
    width: '100%',
    height: 200,
    borderRadius:16,
    
  },
  welcomeText: {
    color:'red',
    fontSize: 24,
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 20,
  },
  getStartedButton: {
    backgroundColor: 'transparent',
    borderWidth:1,
    borderColor:'#687EFF',
    paddingLeft: 2,
    borderRadius: 30,
    marginTop:"50%",
    marginLeft:"66%"
  },
  buttonText: {
    color: '#687EFF',
    fontSize: 14,
  },
});

export default LandingPage;
