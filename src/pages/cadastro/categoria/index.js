
import React,{useState} from 'react';
import { Link } from 'react-router-dom';
import PageDefault from '../../../components/PageDefault';
import FormField from '../../../components/FormField';
import { Buttons } from '../../../components/FormField/styles';


function CadastroCategoria() {

    
    const[categorias,setCategorias] = useState([]);
    const valoresIniciais = {
      nome:'',
      descricao:'',
      cor:''
    }
    const[ values, setValues] = useState(valoresIniciais)

    function setvalue(chave,valor) {
      /**chave pode ser varivel */
      setValues({
        ...values,
        [chave] :valor,//nome :'valor'
      })
    }
    function HandleChange(infEvento){
      /*Aqui estamos usando o setCategoria para editar o valor de nome da categoria, e usamos o ".target.value"Logo
      para pegar onde que foi o alvo da mudança e mostrar na tela*/
      // setvalues(infEvento.target.value);
      const name = infEvento.target.getAttribute('name')
      const {  value }  = infEvento.target;
          setvalue (
            name,
            value
          );
      
    }

  return (
    <PageDefault>
      <h1>Cadastro de Categoria : {values.nome}</h1>

      <form onSubmit={function handleSubmit(infEvento){
        infEvento.preventDefault();
        setCategorias([
          /**aqui os 3 pontos antes de categoria significa que ele esta pegando tudo da antiga lista, ele nem sobreescreve */
          ...categorias,
          values
        ]);
        setValues(valoresIniciais)
        
      }}>
          <FormField
              label="Nome da Categoria"
              type ="text"
              name = "nome"
              value ={values.nome}
              onChange ={HandleChange}
          />
           <FormField
              label="Descriçao"
              type ="text"
              name="descricao"
              value ={values.descricao}
              onChange ={HandleChange}
          />
                
            <FormField
              label="Cor"
              type ="color"
              name="cor"
              value ={values.cor}
              onChange ={HandleChange}
          />
            
        <button>
          Cadastrar
        </button>

        <ul>
          {categorias.map((categorias,indice) => {
              return(
                <li key ={  `${categorias} ${indice}` }>
                  {categorias.nome}
                </li>
              )
          })}
        </ul>
        
      </form>


      <Link to="/">
        Ir para home
      </Link>
    </PageDefault>
  )
}

export default CadastroCategoria;