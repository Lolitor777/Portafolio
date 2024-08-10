import { useRef } from "react";
import { useForm } from "../hooks/useForm";
import { sendForm } from "../helper/sendForm";
import { useNavigate } from "react-router-dom";


const inputValue = {
  name: '',
  email: '',
  affair: ''
}

export const ContactForm = () => {

  const { name, email, affair, onInputChange, onResetForm, buttonDisable } = useForm(inputValue);
  
  const navigate = useNavigate()
  const form = useRef()


  const handleSubmit = (e) => {
    e.preventDefault();

    sendForm( form.current );  
    onResetForm();

    setTimeout(() => {
      navigate('/', {
        replace: true
      })
    }, 2000);

  }


  return (
    <form
      ref={ form }
      onSubmit={handleSubmit}
      className="bg-white py-[1.5em] sm:py-[3em] px-[1em] sm:px-[2em] w-full max-w-[600px] text-center rounded-lg shadow-md shadow-[#b7b5b5] absolute top-[50%] translate-y-[-50%]"
    >
      <h2 className="font-titillium text-[1.8rem] lg:text-[2.3rem] mb-[1em]">Formulario de contacto</h2>

      <div className="flex flex-col sm:flex-row gap-[.5em] mb-[.5em]">
        <input
          type="text"
          placeholder="Nombre"
          className="input-form-contact sm:flex-1"
          name="name"
          value={name}
          onChange={onInputChange}
          required
        />

        <input
          type="email"
          placeholder="Correo electrónico"
          className="input-form-contact sm:flex-1"
          name="email"
          value={email}
          onChange={onInputChange}
          required
        />
      </div>

      <textarea
        placeholder="Asunto"
        maxLength='150px'
        className="input-form-contact text-area"
        name="affair"
        value={affair}
        onChange={onInputChange}
        required
      />

      <div className="flex justify-between sm:flex-col sm:items-center sm:gap-3 mt-[1.5em] w-full" >
        <button
          type="submit"
          disabled={buttonDisable}
          className={`transition-all  px-[1em] py-[.2em] rounded-full shadow-md text-[1.2rem] sm:w-[200px] ${buttonDisable ? 'bg-[#19974e] text-[#414342]' : 'bg-green active:bg-[#2ecc707b] lg:hover:bg-[#2ecc707b] text-gray'}`}
        >
          Enviar
        </button>

        <button 
        onClick={ onResetForm }
        className="bg-yellow px-[1em] py-[.2em] rounded-full shadow-md text-[1.2rem] active:bg-[#f1c40f85] lg:hover:bg-[#f1c40f85] transition-all sm:w-[200px]">
          Limpiar
        </button>
      </div>

    </form>
  )
}
