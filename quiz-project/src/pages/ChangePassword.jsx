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

const ChangePassword = () => {
  const navigate = useNavigate();

  const {
    register,
    handleSubmit,
    watch,
    formState: { errors }
  } = useForm();

  const watchPassword = watch('password');

  const handleReturn = () => {
    return navigate(-1);
  };

  const onSubmit = async (/* data */) => {
    try {
      const result = await true;
      if (result) return navigate('/');
    } catch (error) {
      console.error(
        'Erro durante a alteração de senha:',
        error
      );
    }
  };

  return (
    <>
      <Header>Alterar senha</Header>
      <ContainerForm>
        <ContentForm>
          <Label>Nova Senha</Label>
          <Input
            type="password"
            placeholder="minhasenha123"
            {...register('password', {
              required: true,
              minLength: 8
            })}
          />
          {errors?.password?.type == 'required' && (
            <SpanError>A senha é obrigatória!</SpanError>
          )}
          {errors?.password?.type == 'minLength' && (
            <SpanError>Digite uma senha com pelo menos 8 digitos!</SpanError>
          )}
        </ContentForm>

        <ContentForm>
          <Label>Repita a nova senha</Label>
          <Input
            type="password"
            placeholder="minhasenha123"
            {...register('passwordRepet', {
              required: true,
              validate: (value) => value == watchPassword
            })}
          />
          {errors?.passwordRepet?.type == 'required' && (
            <SpanError>Repitir a senha é obrigatório!</SpanError>
          )}
          {errors?.passwordRepet?.type == 'validate' && (
            <SpanError>As senhas precisam ser iguais!</SpanError>
          )}
        </ContentForm>

        <Button onClick={() => handleSubmit(onSubmit)()}>Alterar senha</Button>
      </ContainerForm>
      <ButtonDarkTheme onClick={handleReturn}>Voltar</ButtonDarkTheme>
    </>
  );
};

export default ChangePassword;
