import { useEffect, useMemo, useState } from "react";

export const useForm = ( initialForm = {} ) => {

    const [formState, setFormState] = useState( initialForm );
    const [buttonDisable, setButtonDisable] = useState(true);

    const onInputChange = ({ target }) => {
        const { name, value } = target;
        setFormState({
            ...formState,
            [name]: value
        })
    }

    const onResetForm = () => {
        setFormState( initialForm )
    }

    const { email, name, affair } = formState;
    

    useMemo(() => {
        
        if ( email && name && affair ) {
          setButtonDisable(false)
        }
        else {
          setButtonDisable(true)
        }
      }, [ email, name, affair ])

  return {
        ...formState,
        formState,
        onInputChange,
        onResetForm,
        buttonDisable
  }
}