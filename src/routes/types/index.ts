import { StackNavigationProp } from "@react-navigation/stack"

export type StackParamsList = {
  Home: undefined,
  Forms: undefined
}

export type HomeScreenNavProp = StackNavigationProp<StackParamsList, 'Home'>