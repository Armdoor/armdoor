import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import styled from 'styled-components';

const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm('service_o5h682a', 'template_y9byt1q', form.current, '5VLrurHOUpdITKMNn')
      .then(
        (result) => {
          console.log(result.text);
          toast.success("You'll hear back soon. Thanks!", {
            position: 'bottom-center',
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: 'light',
          });
        },
        (error) => {
          console.log(error.text);
          toast.error('Couldnt send the message you bozo!', {
            position: 'bottom-center',
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: 'light',
          });
        }
      );
  };

  return (
    <Container id='contact'>
      <TextArea>
        <h2>Contact Me</h2>
      </TextArea>
      <StyledForm ref={form} onSubmit={sendEmail}>
        <input className='name' type='text' placeholder='Name' name='from_name' />
        <input className='email' type='text' placeholder='Email' name='email_id' />
        <textarea className='msg' placeholder='Message' rows={5} name='message' />
        <button className='subBtn' type='submit' value='Send'>
          Submit
        </button>
      </StyledForm>

      <ToastContainer
        position='bottom-center'
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme='light'
      />
    </Container>
  );
};

export default Contact;

const Container = styled.div`
  height: 100vh;
  width: 100vw;
  overflow: hidden;
  width: 100vw;
  max-width: auto;
  background-image: url('/images/conatctbg.jpg');
  background-size: cover;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-align: center;
`;

const TextArea = styled.div`
  font-size: 2rem;
  font-weight: 600;
  padding-top: 3rem;
  margin-bottom: 1.5rem;
  h2 {
    color: white;
  }
`;

const StyledForm = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-align: center;
  input,
  textarea,
  button {
    margin-bottom: 1rem;
  }
  input.name::placeholder {
    color: #393c41;
    font-weight: 300;
  }
  input.email::placeholder {
    color: #393c41;
    font-weight: 300;
  }
  textarea.msg::placeholder {
    color: #393c41;
    font-weight: 300;
  }

  input,
  textarea,
  button {
    width: 300px;
    padding: 0.5rem;
    color: white;
    border: none;
    border-radius: 0.5rem;
    backdrop-filter: blur(2px);
    background-color: rgba(255, 255, 255, 0.5);
  }

  button {
    width: 100px;
    background: white;
    color: #393c41;
    font-weight: 800;
    font-size: 1rem;
    margin: 1rem 0;
    padding: 0.75rem 1.5rem;
    border: none;
    border-radius: 2rem;
    transition: background-color 0.3s;
    &:hover {
      color: white;
      background-color: #393c41;
    }
  }

`;
