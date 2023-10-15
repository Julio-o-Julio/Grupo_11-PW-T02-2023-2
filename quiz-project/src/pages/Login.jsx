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
import { loginFirebase } from '../auth/loginFirebase';
import { useForm } from 'react-hook-form';
import validator from 'validator';

const Login = () => {
  const navigate = useNavigate();

  const {
    register,
    handleSubmit,
    formState: { errors }
  } = useForm();

  const onSubmit = async (data) => {
    try {
      const result = await loginFirebase(data.email, data.password);
      if (result) return navigate('/');
    } catch (error) {
      console.error('Erro durante o login:', error);
    }
  };

  return (
    <>
      <Header>Entrar</Header>
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

        <ContentForm>
          <Label>Senha</Label>
          <Input
            className={errors?.password && 'input-error'}
            type="password"
            placeholder="minhasenha123"
            {...register('password', { required: true })}
          />
          {errors?.password?.type == 'required' && (
            <SpanError>A senha é obrigatória!</SpanError>
          )}
        </ContentForm>

        <Link to={'/recoverpassword'} style={{ marginBottom: 16 }}>
          Esqueci a senha
        </Link>

        <Button onClick={() => handleSubmit(onSubmit)()}>Entrar</Button>
      </ContainerForm>
      <span>
        <p>Não tem uma conta?</p>
        <Link to={'/register'}>Clique aqui para cadastrar-se!</Link>
      </span>
    </>
  );
};

export default Login;
