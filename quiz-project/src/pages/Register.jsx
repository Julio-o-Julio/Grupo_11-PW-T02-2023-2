import { Link, useNavigate } from 'react-router-dom';
import {
  Button,
  ContainerForm,
  ContentForm,
  Input,
  Label,
  SpanError
} from '../styles/index';
import Header from '../components/Header';
import { registerFirebase } from '../auth/registerFirebase';
import { useForm } from 'react-hook-form';
import validator from 'validator';

const Register = () => {
  const navigate = useNavigate();

  const {
    register,
    handleSubmit,
    watch,
    formState: { errors }
  } = useForm();

  const watchPassword = watch('password');

  const onSubmit = async (data) => {
    try {
      const result = await registerFirebase(data.email, data.password);
      if (result) {
        return navigate('/');
      }
    } catch (error) {
      console.error('Erro durante o cadastro:', error);
    }
  };

  return (
    <>
      <Header>Cadastro</Header>
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

        <ContentForm>
          <Label>Senha</Label>
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
          <Label>Repita a senha</Label>
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

        <Button onClick={() => handleSubmit(onSubmit)()}>Registrar</Button>
      </ContainerForm>
      <span>
        <p>Já tem uma conta?</p>
        <Link to={'/login'}>Clique aqui para entrar</Link>
      </span>
    </>
  );
};

export default Register;
