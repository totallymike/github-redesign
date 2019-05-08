import React from 'react';
import cn from 'classnames';
import withStyles, { WithStyles } from 'react-jss';
import { Theme } from '../styles/theme';
import { ReactComponent as Logo } from '../images/octocat.svg';
import { Link } from 'react-router5';

const styles = (theme: Theme) => ({
  header: {
    composes: 'f4 py-2',
    backgroundColor: theme.colorBlack,
    color: 'hsla(0,0%,100%,.7)',
    paddingTop: '12px',
    paddingBottom: '12px'
  },
  textWhite: {
    color: '#fff !important',
  },
  octicon: {
    verticalAlign: 'text-bottom',
    display: 'inline-block',
    fill: 'currentColor',
  },
  headerMenuLink: {
    background: 'transparent',
    color: '#fff',
    transition: '.4s',
  }
});

interface Props extends WithStyles<ReturnType<typeof styles>> {}

const loggedOutHeaderComponent: React.FunctionComponent<Props> = ({ classes }) => (
  <header className={classes.header}>
    <div className="container-lg d-flex px-3">
      <div className="d-flex flex-justify-between flex-items-center">
        <Link className="mr-4" routeName="home">
          <Logo className="octicon octicon-mark-github text-white" />
        </Link>
      </div>
      <div className="d-flex flex-justify-between flex-items-center flex-auto">
        <nav className="mt-0"></nav>
        <div className="d-flex flex-items-center px-0 text-center text-left">
          <Link className={cn(classes.headerMenuLink, 'no-underline', 'mr-3')} routeName="login">Sign in</Link>
        </div>
      </div>
    </div>
  </header>
)

export const LoggedOutHeader = withStyles(styles)(loggedOutHeaderComponent);
