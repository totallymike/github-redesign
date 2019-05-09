import React from 'react';
import { Container } from '../../components/Container';

export interface RepoProps {
  owner: string;
  repository: string;
}

export const Repo: React.FunctionComponent<RepoProps> = ({ owner, repository }) => {
  return (
    <Container large>Hey. You're at {owner} / {repository}</Container>
  );
}
