import React, { useState } from 'react';
import { View, Text } from 'react-native';
import styles from './styles'; 

export default function Tarefas({ navigation }) {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Lista de Tarefas</Text>
    </View>
  );
}