import React from 'react';
import { FormikProps, Form, Field, Formik } from 'formik';
import { LoginComponent } from '../generated/graphql';
import { useRouter, useRoute } from 'react-router5';

interface FormValues {
  token: string;
}

interface Props extends FormikProps<FormValues> {}

const LoginForm: React.FunctionComponent = (props) => {
  const router = useRouter();
  const { route: currentRoute } = useRoute();
  return (
    <LoginComponent>
      {(mutate, { loading, error }) => {
        if (loading) {
          return <p>Loading...</p>;
        }
        if (error) {
          return <p>Error!</p>;
        }

        return (
          <Formik
            initialValues={{ token: '' }}
            onSubmit={({ token }, actions) => {
              mutate({ variables: { token }}).then(() => {
                // If `return_to` is set, navigate to it after logging in.
                if (currentRoute.params.return_to) {
                  const nextRoute = router.matchPath(currentRoute.params.return_to);
                  if (nextRoute) {
                    router.navigate(nextRoute.name, nextRoute.params);
                  }
                }
              })
            }}
          >
            {({ touched, errors, isSubmitting }) => (
              <Form>
                <h1>Sign in</h1>

                <Field name="token" type="text" />
                {touched.token && errors.token && <div>{errors.token}</div>}

                <button type="submit" disabled={isSubmitting}>
                  Submit
                </button>
              </Form>

            )}
          </Formik>
        )
      }}
    </LoginComponent>
  )
}

export const Login: React.FunctionComponent = () => (
  <div className="container">
    <LoginForm />
  </div>
);