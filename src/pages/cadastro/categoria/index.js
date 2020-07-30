/* eslint-disable no-shadow */
/* eslint-disable react/button-has-type */
/* eslint-disable react/no-array-index-key */
/* eslint-disable linebreak-style */
import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import PageDefault from '../../../components/PageDefault';
import FormField from '../../../components/FormField';
import Button from '../../../components/Button';

function CadastroCategoria() {
  const [categorias, setCategorias] = useState([]);
  const valoresIniciais = {
    nome: '',
    descricao: '',
    cor: '',
  };
  const [values, setValues] = useState(valoresIniciais);

  function setvalue(chave, valor) {
    /** chave pode ser varivel */
    setValues({
      ...values,
      [chave]: valor, // nome :'valor'
    });
  }

  useEffect(() =>{
    const url ='http://localhost:8080/categorias';
    fetch(url).then(async(respostaDoServidor) => {
      const resposta = await respostaDoServidor.json();
      setCategorias([
        ...resposta,
      ]);
    
    });

    // setTimeout(()=>{
    //   setCategorias([
    //     /** aqui os 3 pontos antes de categoria significa que ele esta
    //      * pegando tudo da antiga lista,
    //      * ele nem sobreescreve */
    //     ...categorias,
        
    //       {
    //         "id": 1,
    //         "nome": "Front End",
    //         "descricao": "Uma categoria doida",
    //         "cor": "#cbd1ff"
    //       }
        
    //   ]);

    // },4*100);
  },[

  ])



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

  return (
    <PageDefault>
      <h1>
        Cadastro de Categoria :
        {values.nome}
      </h1>

      <form onSubmit={function handleSubmit(infEvento) {
        infEvento.preventDefault();
        setCategorias([
          /** aqui os 3 pontos antes de categoria significa que ele esta
           * pegando tudo da antiga lista,
           * ele nem sobreescreve */
          ...categorias,
          values,
        ]);
        setValues(valoresIniciais);
      }}
      >
        <FormField
          label="Nome da Categoria"
          type="text"
          name="nome"
          value={values.nome}
          onChange={HandleChange}
        />
        <FormField
          label="Descriçao"
          type="textarea"
          name="descricao"
          value={values.descricao}
          onChange={HandleChange}
        />

        <FormField
          label="Cor"
          type="color"
          name="cor"
          value={values.cor}
          onChange={HandleChange}
        />
        <Button> Cadastrar</Button>

      {categorias.length === 0  && (<div>Carregando......</div>)}

        <ul>
          {categorias.map((categorias, indice) => (
            <li key={`${categorias.nome} ${indice}`}>
              {categorias.nome}
            </li>
          ))}
        </ul>

      </form>

      <Link to="/">
        Ir para home
      </Link>
    </PageDefault>
  );
}
export default CadastroCategoria;
