import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: {
    gap: 5,
  },
  input: {
    borderRadius: 8,
    borderWidth: 2,
    borderColor: '#333',
    paddingHorizontal: 5,
    paddingVertical: 6,
    verticalAlign: 'top',
    alignContent: 'flex-start'
  },
  error: {
    height: 20
  }
})