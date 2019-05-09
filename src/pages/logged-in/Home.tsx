import React from 'react';
import { Option, Vector } from 'prelude-ts';
import { Link } from 'react-router5';
import { ReposComponent } from '../../generated/graphql';
import { Container } from '../../components/Container';

export const Home = () => {
  return (
    <ReposComponent variables={{first: 10}}>
      {({ data, loading, error }) => {
        if (loading) {
          return (
            <p>Loading</p>
          )
        }
        if (error) {
          return (
            <p>
              I dunno some kinda error figure it out yourself.
            </p>
          );
        }

        if (!data) {
          return <p>What's up why no data?</p>;
        }

        const {
          viewer: {
            repositories: {
              edges
            }
          }
        } = data;

        if (!edges) {
          return <p>Aw jeez why aren't there any repos?</p>
        }

        const repos = Vector
          .ofIterable(edges)
          .mapOption(edge => {
            return Option.ofNullable(edge && edge.node);
          });

        return (
          <Container large className="clearfix px-3 mt-4">
            <ul>
              {
                repos
                  .map(repo => {
                    // These types are defined as nullable because...they are.
                    // So we cheat because we know they exist.
                    const { id, name, owner } = repo;
                    const routeParams = {
                      owner: owner.login,
                      repository: name,
                    };
                    return (
                      <li key={id}>
                        <Link routeName="repo" routeParams={routeParams}>
                          {owner.login} / {name}
                        </Link>
                      </li>
                    )
                  })
              }
            </ul>
          </Container>
        );
      }}
    </ReposComponent>
  )
}