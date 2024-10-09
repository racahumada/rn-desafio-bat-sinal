import { Control, FieldError, FieldValues, FormState } from 'react-hook-form';
import { TextInputProps } from 'react-native'

export type InputProps = TextInputProps & {
  control: Control<FormState>;
  name: string;
  label?: string | null;
  errorMessage: FieldError | undefined,
  height?: number | null;
} 