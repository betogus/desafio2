import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  close: {
    position: "absolute",
    right: 20,
    top: 0
  },
  title:{
    fontSize: 30
  },
  
    modalContainer: {
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 50,
        paddingVertical: 20,    
      },
      modalTitle: {
        fontSize: 18,
        fontWeight: 'bold',
        marginBottom: 10,
      },
      modalDetailContainer: {
        paddingVertical: 20,
      },
      modalDetailText: {
        fontSize: 14,
        color: '#212121',
      },
      selectedTask: {
        fontSize: 14,
        color: '#212121',
        fontWeight: 'bold',
        paddingVertical: 20,
      },
      modalButtonContainer: {
        paddingHorizontal: "30%"
      },
      inputContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginHorizontal: 20,
        marginVertical: 40,
      },
      input: {
        marginVertical: 10,
        width: '80%',
        borderBottomWidth: 1,
        borderBottomColor: '#9A848F',
        fontSize: 18
      }
    })