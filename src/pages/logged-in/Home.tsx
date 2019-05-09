import React from 'react';
import { ReposComponent } from '../../generated/graphql';
import { Link } from 'react-router5';

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
            return (
              <ul>
                {
                  edges
                    .filter(edge => edge && edge.node)
                    .map(edge => {
                      // These types are defined as nullable because...they are.
                      // So we cheat because we know they exist.
                      const { id, name, owner } = edge!.node!;
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