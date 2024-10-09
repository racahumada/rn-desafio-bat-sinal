import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: {
    flex: 1, 
    alignItems: 'center',
    justifyContent: 'center',
    gap: 40
  },
  image: {
    height: 250,
    resizeMode: 'contain'
  }, 
  button: {
    borderRadius: 8,
    paddingVertical: 8,
    paddingHorizontal: 12,
    backgroundColor: '#333',
  },
  textButton: {
    color: '#fff'

  }
})