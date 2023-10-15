import { useNavigate } from 'react-router-dom';
import {
  Button,
  ButtonDarkTheme,
  ContainerForm,
  ContentForm,
  Input,
  Label,
  SpanError
} from '../styles/index';
import Header from '../components/Header';
import { useForm } from 'react-hook-form';
import validator from 'validator';

const ChangeData = () => {
  const navigate = useNavigate();

  const {
    register,
    handleSubmit,
    formState: { errors }
  } = useForm();

  const handleChangePassword = () => {
    return navigate('/changepassword');
  };

  const handleReturn = () => {
    return navigate(-1);
  };

  const onSubmit = async (/* data */) => {
    try {
      const result = await true;
      if (result) return navigate('/');
    } catch (error) {
      console.error('Erro durante a alteração de dados:', error);
    }
  };

  return (
    <>
      <Header>Alterar dados</Header>
      <ContainerForm>
        <ContentForm>
          <Label>Nome</Label>
          <Input
            type="text"
            placeholder="Meu Nome"
            {...register('name', {
              required: true
            })}
          />
          {errors?.name?.type == 'required' && (
            <SpanError>O nome é obrigatório!</SpanError>
          )}
        </ContentForm>
        <ContentForm>
          <Label>E-mail</Label>
          <Input
            type="email"
            placeholder="meuemail@gmail.com"
            {...register('email', {
              required: true,
              validate: (value) => validator.isEmail(value)
            })}
          />
          {errors?.email?.type == 'required' && (
            <SpanError>O e-mail é obrigatório!</SpanError>
          )}
          {errors?.email?.type == 'validate' && (
            <SpanError>E-mail inválido!</SpanError>
          )}
        </ContentForm>

        <Button style={{marginBottom: 16}} onClick={handleChangePassword}>Alterar senha</Button>
        <Button onClick={() => handleSubmit(onSubmit)()}>Salvar</Button>
      </ContainerForm>
      <ButtonDarkTheme onClick={handleReturn}>Voltar</ButtonDarkTheme>
    </>
  );
};

export default ChangeData;
