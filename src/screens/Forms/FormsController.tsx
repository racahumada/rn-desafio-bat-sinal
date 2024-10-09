import { FormState } from './types'
import { useForm } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup'
import * as yup from 'yup'

const schemaValidation =  yup
  .object({
    name: yup.string().required('Campo Obrigatório!'),
    phone: yup.string().required('Campo Obrigatório!'),
    address: yup.string().required('Campo Obrigatório!'),
    observation: yup.string().required('Campo Obrigatório!')
  })

const FormsController = () => {

  const { control, handleSubmit, formState: { errors } } = useForm<FormState>({
    defaultValues: {
      name: '',
      phone: '',
      address: '',
      observation: ''
    },
    resolver: yupResolver(schemaValidation)
  })

  const onSubmit = handleSubmit((data) => {
    console.log('Dados Enviados:', data)
  })

  return { control, onSubmit, errors }
}

export default FormsController