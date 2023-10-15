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
/* import validator from 'validator';
import { verifyPasswordResetCode } from 'firebase/auth'; */

const CodeVerification = () => {
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
      if (result) return navigate('/changepassword');
    } catch (error) {
      console.error('Erro durante a validação do código de recuperação de senha:', error);
    }
  };

  return (
    <>
      <Header>Verificação de identidade</Header>
      <ContainerForm>
        <ContentForm>
          <Label>Código de verificação</Label>
          <Input
            type="text"
            {...register('code', {
              required: true,
              validate: (/* value */) => true/* verifyPasswordResetCode(value) */
            })}
          />
          {errors?.code?.type == 'required' && (
            <SpanError>Um código é obrigatório!</SpanError>
          )}
          {errors?.code?.type == 'validate' && (
            <SpanError>Código inválido!</SpanError>
          )}
        </ContentForm>

        <Button onClick={() => handleSubmit(onSubmit)()}>Verificar</Button>
      </ContainerForm>
      <ButtonDarkTheme onClick={handleReturn}>Voltar</ButtonDarkTheme>
    </>
  );
};

export default CodeVerification;
