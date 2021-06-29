export interface CFormProps<T> {
  isPending: boolean;
  onSubmit: (values: T) => void;
}
