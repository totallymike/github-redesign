import React from 'react';
import { Option, Vector } from 'prelude-ts';
import { Link } from 'react-router5';
import { ReposComponent } from '../../generated/graphql';

export const Home = () => {
  return (
    <ReposComponent variables={{first: 10}}>
      {({ data, loading, error }) => {
        if (loading || error) {
          return (
            <p>
              I dunno some kinda error figure it out yourself.
            </p>
          );
        }

        if (data) {
          const {
            viewer: {
              repositories: {
                edges
              }
            }
          } = data;

          if (edges) {
            const repos = Vector
              .ofIterable(edges)
              .mapOption(edge => {
                return Option.ofNullable(edge && edge.node);
              });
            return (
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
            );
          }
        }

        return <p>poo</p>;
      }}
    </ReposComponent>
  )
}