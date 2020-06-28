import styled from 'styled-components';
import { shade } from 'polished';

export const Title = styled.h1`
  font-size: 3rem;
  color: #3a3a3a;
  max-width: 450px;
  line-height: 3.5rem;
  margin-top: 5rem;
`;

export const Form = styled.form`
  margin-top: 2.5rem;
  display: flex;

  input {
    flex: 1;
    height: 70px;
    padding: 0 1.5rem;
    border: 0;
    border-radius: 5px 0 0 5px;
    color: #3a3a3a;

    &::placeholder {
      color: #a8a8b3;
    }
  }

  button {
    width: 210px;
    height: 70px;
    background-color: #498fff;
    border-radius: 0 5px 5px 0;
    border: 0;
    transition: background-color 0.2s;

    &:hover {
      background: ${shade(0.2, '#498fff')};
    }

    svg {
      color: #fff;
    }
  }
`;

export const Repositories = styled.div`
  margin-top: 5rem;

  a {
    display: flex;
    align-items: center;
    background: #fff;
    border-radius: 5px;
    width: 100%;
    padding: 1.5rem;
    text-decoration: none;
    transition: box-shadow 0.4s;

    & + a {
      margin-top: 1rem;
    }

    &:hover {
      box-shadow: 0px 0px 5px 2px rgba(158, 158, 158, 1);
    }

    img {
      width: 64px;
      height: auto;
      border-radius: 50%;
    }

    div {
      margin-left: 1rem;

      strong {
        font-size: 1.25rem;
        color: #3d3d4d;
      }

      P {
        font-size: 1.125rem;
        color: #a8a8b3;
        margin-top: 4px;
      }
    }

    svg {
      margin-left: auto;
      color: #cbcbd6;
    }
  }
`;
