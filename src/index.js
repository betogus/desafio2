import { Text, View, Button, TouchableOpacity} from 'react-native';
 import { useState } from 'react';
import { TaskItem, ItemList, ModalAddTask } from './components/index'; 
import {styles} from './styles'

export default function App() {
   const [taskInput, setTaskInput] = useState('');
  const [taskList, setTaskList] = useState([]);
  const [modalAddTaskVisible, setModalAddTaskVisible] = useState(false)
  
  const onHandleTask = () => {
    setTaskList((prevTaskList) => [...prevTaskList, {id: Math.random().toString(), value: taskInput}]);
    setTaskInput('');
    setModalAddTaskVisible(!modalAddTaskVisible)
  }

  const onHandleErase = (item) => {
    setTaskList((prevTaskList) => prevTaskList.filter((task) => task.id !== item.id))
  }

  const renderItem = ({item}) => (
   <TaskItem 
   item={item} 
   onHandleErase={onHandleErase}
   />
 
  )

 

  const onHandleCancel = () => setModalAddTaskVisible(!modalAddTaskVisible);
  
  const onHandleChange = text => setTaskInput(text) 

  return (
    <View style={styles.container}>
      
      <TouchableOpacity onPress={()=>setModalAddTaskVisible(!modalAddTaskVisible)} style={styles.button}> 
        <Text style={{fontSize: 20, color: "#ffffff"}}>Agrega una nueva tarea</Text>
      </TouchableOpacity>
  
      <View style={styles.listContainer}>
      <Text style={styles.listTitle}>Lista de tareas:</Text>
      </View> 
      <ItemList taskList={taskList} 
      renderItem={renderItem}
     
      
      /> 
      
        <ModalAddTask 
     modalAddTaskVisible={modalAddTaskVisible} 
     taskInput={taskInput}
      onHandleCancel={onHandleCancel}
      onHandleChange={onHandleChange} 
      onHandleTask={onHandleTask}
      /> 
    </View>
  );
}