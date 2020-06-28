import React, { useState, FormEvent } from 'react';
import { Title, Form, Repositories } from './styles';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch, faChevronRight } from '@fortawesome/free-solid-svg-icons';
import api from '../../services/api';

interface Repository {
  id: string;
  full_name: string;
  description: string;
  owner: {
    login: string;
    avatar_url: string;
  };
  html_url: string;
}

export function DashboardView() {
  const [newRepo, setNewRepo] = useState('');
  const [repositories, setRepositories] = useState<Repository[]>([]);

  const handleAddRepository = async (
    event: FormEvent<HTMLFormElement>,
  ): Promise<void> => {
    event.preventDefault();
    const response = await api.get<Repository>(`repos/${newRepo}`);
    setRepositories([...repositories, response?.data]);
  };

  return (
    <>
      <Title>Explore repositórios no Github</Title>
      <Form onSubmit={handleAddRepository}>
        <input
          type="text"
          placeholder="octocat/Hello-World"
          value={newRepo}
          onChange={(e) => setNewRepo(e.target.value)}
        />
        <button type="submit">
          <FontAwesomeIcon icon={faSearch} size="lg" />
        </button>
      </Form>

      <Repositories>
        {repositories.map((repository) => (
          <a href={repository.html_url} key={repository.id} target="blank">
            <img
              src={repository.owner.avatar_url}
              alt={repository.owner.login}
            />
            <div>
              <strong>{repository.full_name}</strong>
              <p>{repository.description}</p>
            </div>
            <FontAwesomeIcon icon={faChevronRight} />
          </a>
        ))}
      </Repositories>
    </>
  );
}
