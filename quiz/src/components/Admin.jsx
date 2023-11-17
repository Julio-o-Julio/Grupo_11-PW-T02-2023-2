import useForm from '../hooks/useForm';
import { createQuestion } from '../services/api';
import Input from './Input';

const Admin = () => {
  const category = useForm();
  const questionId = useForm();
  const question = useForm();
  const description = useForm(false);
  const response1 = useForm();
  const response2 = useForm();
  const response3 = useForm();
  const response4 = useForm();
  const responseIdCorrect = useForm();

  const handleSubmit = async (event) => {
    event.preventDefault();

    await createQuestion(
      category.value,
      questionId.value,
      question.value,
      description.value,
      response1.value,
      response2.value,
      response3.value,
      response4.value,
      responseIdCorrect.value
    );
  };

  return (
    <form style={{ marginTop: '-4rem' }} onSubmit={handleSubmit}>
      <Input label="category" type="text" {...category} />
      <Input label="questionId" type="number" {...questionId} />
      <Input label="question" type="text" {...question} />
      <Input label="description" type="text" {...description} />
      <Input label="response1" type="text" {...response1} />
      <Input label="response2" type="text" {...response2} />
      <Input label="response3" type="text" {...response3} />
      <Input label="response4" type="text" {...response4} />
      <Input label="responseIdCorrect" type="number" {...responseIdCorrect} />

      <button style={{ marginTop: '1rem' }}>Enviar</button>
    </form>
  );
};

export default Admin;
