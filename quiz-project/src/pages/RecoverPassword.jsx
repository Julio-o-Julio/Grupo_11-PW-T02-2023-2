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

const RecoverPassword = () => {
  const navigate = useNavigate();

  const {
    register,
    handleSubmit,
    formState: { errors }
  } = useForm();

  const handleReturn = () => {
    return navigate(-1);
  };

  const onSubmit = async (/* data */) => {
    try {
      const result = await true;
      if (result) return navigate('/verification');
    } catch (error) {
      console.error('Erro durante a recuperação de senha:', error);
    }
  };

  return (
    <>
      <Header>Recuperação de senha</Header>
      <ContainerForm>
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

        <p style={{ marginBottom: 16 }}>Enviaremos um código para seu e-mail</p>

        <Button onClick={() => handleSubmit(onSubmit)()}>Enviar</Button>
      </ContainerForm>
      <ButtonDarkTheme onClick={handleReturn}>Voltar</ButtonDarkTheme>
    </>
  );
};

export default RecoverPassword;
