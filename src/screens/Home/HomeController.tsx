import { useNavigation } from '@react-navigation/native'
import { HomeScreenNavProp } from '../../routes/types'

const HomeController = () => {

  const navigation = useNavigation<HomeScreenNavProp>()

  const handleGoToForm = () => {
    navigation.navigate('Forms')
  }

  return {handleGoToForm}
}

export default HomeController