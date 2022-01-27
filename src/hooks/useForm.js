import { useState } from 'react'

export const useForm = ( formValues = {} ) => {
   
     const [formState, setFormState] = useState(formValues);

     const reset = () => {
       setFormState(formValues);
     }

     const handleInputName = ({target}) => {
        setFormState({
         ...formState,
         [target.name]: target.value
        })
     }

     return [
        formState,
        handleInputName,
        reset
     ]


}
