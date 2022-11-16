import React, { useState } from 'react'
import { TouchableOpacity, Text, View } from 'react-native'
import {styles} from './styles'
import FontAwesomeIcon from 'react-native-vector-icons/FontAwesome';
import AntDesignIcon from 'react-native-vector-icons/AntDesign'
const TaskItem = ({ item, onHandleErase}) => {
  const [completed, setCompleted] = useState(false)

  return (

    <View  style={styles.listItemContainer}>
       <TouchableOpacity onPress={()=>setCompleted(!completed)} style={styles.checkIcon}> 
        <Text>{completed ? <FontAwesomeIcon name="check-circle-o" size={33} color="#6D7275" /> : <FontAwesomeIcon name="circle-o" size={33} color="#6D7275" /> }</Text> 
      </TouchableOpacity> 
      <Text style={styles.listItem}>{item.value}</Text>
      <TouchableOpacity onPress={() => onHandleErase(item)}>
        <Text><AntDesignIcon name="closecircleo" size={30} color="#6D7275"/></Text>
      </TouchableOpacity>
    </View>
  
  )
}

export default TaskItem