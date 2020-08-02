import React,{useState, useEffect} from 'react';
import PageDefault from '../../../components/PageDefault'
import { Link, useHistory} from 'react-router-dom';
import useForm from '../../../hooks/useForms';
import FormField from '../../../components/FormField'
import Button from '../../../components/Button';
import videosRepository from '../../../repositories/videos';
import categoriasRepository from '../../../repositories/categorias';


function CadastroVideo() {

    const history = useHistory();
    const [categorias, setCategorias] = useState([]);
    const CategoryTitles = categorias.map(({titulo}) => titulo );
    const{HandleChange,values} = useForm({
        titulo: '',
        url:'',
        categoria:' ',
    });

    useEffect(() => {
            categoriasRepository
            .getAll()
            .then((categoriasFromServe) => {
                setCategorias(categoriasFromServe);
            });
        },[]);
        console.log(CategoryTitles);
    return(
        <PageDefault>

                <h1> Cadastro de Video </h1>
                <form onSubmit={ (event) => {
                    event.preventDefault();

                    const categoriaEscolhida = categorias.find((categoria) => {
                        return categoria.titulo=== values.categoria;
                    });
                    console.log('categoriaescolhida',categoriaEscolhida);
                   videosRepository.create({
                       titulo: values.titulo,
                       url:values.url,
                       categoriaId:1,
                   }).then( ()=>{

                       history.push('/');
                   });

                }}
                >

                <FormField
                label="Titulo do video"
                type="text"
                name="nome"
                value={values.titulo}
                onChange={HandleChange}
                />
                <FormField
                label="Titulo do video"
                type="text"
                name="nome"
                value={values.url}
                onChange={HandleChange}
                
                
                />
                <FormField
                label="Titulo do video"
                type="text"
                name="nome"
                value={values.categoria}
                onChange={HandleChange}
                suggestions = {CategoryTitles}
                />
                    <Button> Cadastrar</Button>
                </form>
                


                <Link to ="/cadastro/categoria">
                    Cadastro Categoria

                </Link>
        </PageDefault>

    )
}

export default  CadastroVideo;