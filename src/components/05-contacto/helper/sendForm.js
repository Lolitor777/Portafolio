import emailjs from 'emailjs-com';


export const sendForm = (form) => {

    emailjs
        .sendForm(
            "carvajal_57685",
            "portafolio_57685",
            form,
            "qhy-E0_1OS4HbxYIO"
        )
        .then(
            () => {
                alert("¡El mensaje se ha enviado con éxito!");
                
            },
            (error) => {
                alert("FAILED...", error);
            }
        );
};
