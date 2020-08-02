import{ useState } from 'react';


function useForm(valoresIniciais){
    const [values, setValues] = useState(valoresIniciais);
    function setvalue(chave, valor) {
      /** chave pode ser varivel */
      setValues({
        ...values,
        [chave]: valor, // nome :'valor'
      });
    }
  
    function HandleChange(infEvento) {
      /* Aqui estamos usando o setCategoria para editar o valor de nome da categoria,
        e usamos o ".target.value"Logo
        para pegar onde que foi o alvo da mudança e mostrar na tela */
      // setvalues(infEvento.target.value);
      const name = infEvento.target.getAttribute('name');
      const { value } = infEvento.target;
      setvalue(
        name,
        value,
      );
    }
  
    function clearForm(){
      setValues(valoresIniciais);
    }
  
    return{
      values,
      HandleChange,
      clearForm,
    };
  
  }
  export default useForm;