import {Modal, View, Text, Button, TextInput, TouchableOpacity } from 'react-native'
import {styles } from './styles'
import AntDesignIcon from 'react-native-vector-icons/AntDesign'
import React from 'react'

const ModalAddTask = ({modalAddTaskVisible, taskInput, onHandleCancel, onHandleTask, onHandleChange }) => {
  return (
    <Modal visible={modalAddTaskVisible} animationType='slide' style={styles.modal}>
    <View style={styles.modalContainer}>
      <TouchableOpacity onPress={onHandleCancel} style={styles.close}>
        <Text><AntDesignIcon name="close" size={25} color="#6D7275"/></Text>
      </TouchableOpacity>
        <Text style={styles.title}>Nueva Tarea</Text>
        <TextInput 
            style={styles.input} 
            value={taskInput} 
            placeholder="Ingrese una descripcion"
            onChangeText={onHandleChange}
          />
      </View>
      <View style={styles.modalButtonContainer}>
      <Button disabled={!taskInput} title='Agregar' color='#C20114'  onPress={onHandleTask} />
      </View>
    </Modal>
  )
}

export default ModalAddTask