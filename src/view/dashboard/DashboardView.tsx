import React from 'react';
import { Title, Form, Repositories } from './styles';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch, faChevronRight } from '@fortawesome/free-solid-svg-icons';

export function DashboardView() {
  return (
    <>
      <Title>Explore repositórios no Github</Title>
      <Form action="">
        <input type="text" placeholder="Digite o nome do repositório" />
        <button type="submit">
          <FontAwesomeIcon icon={faSearch} size="lg" />
        </button>
      </Form>

      <Repositories>
        <a href="/">
          <img
            src="https://api.adorable.io/avatars/64/abott@adorable.png"
            alt="user-name"
          />
          <div>
            <strong>title</strong>
            <p>description</p>
          </div>
          <FontAwesomeIcon icon={faChevronRight} />
        </a>
      </Repositories>
    </>
  );
}
