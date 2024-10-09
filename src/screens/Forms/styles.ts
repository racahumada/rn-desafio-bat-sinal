import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: {
    flex: 1, 
    gap: 15
  },
  containerInputs: {
    gap: 12,
    paddingHorizontal: 32
  },
  buttonSubmit: {
    backgroundColor: '#333',
    borderRadius: 12,
    marginHorizontal: 32,
    paddingVertical: 12,
    alignItems: 'center',
    justifyContent: 'center'
  },
  textSubmit: {
    color: '#fff',
    fontSize: 22,
    fontWeight: 700
  }
})