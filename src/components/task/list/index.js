import React from 'react'
import { FlatList } from 'react-native'

const ItemList = ({taskList, renderItem}) => {
  return (
    <FlatList 
    style={{ marginHorizontal: 20}}
    data={taskList}
     renderItem={renderItem} 
    keyExtractor={item => item.id}
  />
  )
}

export default ItemList