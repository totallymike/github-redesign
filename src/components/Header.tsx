// import cn from 'classnames';
import React from 'react';
import withStyles, { WithStyles } from 'react-jss';
import { Link } from 'react-router5';
import { HeaderComponent } from '../generated/graphql';
import { ReactComponent as Logo } from '../images/octocat.svg';
import { Theme } from '../styles/theme';

const styles = (theme: Theme) => ({
  header: {
    composes: 'f5',
    backgroundColor: theme.colorBlack,
    color: 'hsla(0,0%,100%,.7)',
    paddingTop: '12px',
    paddingBottom: '12px',
  },
  headerLogoInvertocat: {
    color: '#fff',
    margin: '-1px 15px -1px -2px',
    whiteSpace: 'nowrap',
  },
  octicon: {
    fill: 'currentColor',
    verticalAlign: 'text-bottom',
  },
  octiconMarkGithub: {
    composes: '$octicon',
    float: 'left',
  },
  headerNavLink: {
    composes: ['px-2'],
    color: '#fff',
    display: 'block',
  },
  dropdown: {
    position: 'relative',
  },
  avatar: {
    borderRadius: '3px',
    display: 'inline-block',
    lineHeight: 1,
    overflow: 'hidden',
    verticalAlign: 'middle',
  },
});

interface Props extends WithStyles<ReturnType<typeof styles>> {}

const headerComponent: React.FunctionComponent<Props> = ({ classes }) => (
  <header className={classes.header} role="banner">
    <HeaderComponent>
      {({ data, loading, error }) => {
        if (loading || error) {
          return <p>{(loading && `loading: ${loading}`) || `error: ${error}`}</p>;
        }
        if (!data) {
          return 'No data!';
        }
        return (
          <div className="d-flex flex-justify-between px-3">
            <div className="d-flex flex-justify-between">
              <div className={classes.headerLogoInvertocat}>
                <Logo className="octicon octicon-mark-github" />
              </div>
            </div>
            <div className="d-flex flex-justify-between flex-auto">
              <ul className="d-flex px-2 flex-items-center text-bold list-style-none">
                <li>
                  <Link className={classes.headerNavLink} routeName="pulls">
                    Pull Requests
                  </Link>
                </li>
                <li>
                  <a className={classes.headerNavLink} href="/issues">
                    Issues
                  </a>
                </li>
                <li>
                  <a className={classes.headerNavLink} href="/marketplace">
                    Marketplace
                  </a>
                </li>
                <li>
                  <a className={classes.headerNavLink} href="/explore">
                    Explore
                  </a>
                </li>
              </ul>
            </div>
            <div className="d-flex">
              <ul className="d-flex flex-items-center list-style-none">
                <li className="dropdown">
                  <details className="details-overlay details-reset d-flex pl-2 flex-items-center">
                    <summary className="headerComponent-headerNavLink-0-2-5 px-2">
                      <img
                        className="headerComponent-avatar-0-2-7 mr-1 float-left"
                        src={data.viewer.avatarUrl}
                        alt={`@${data.viewer.login}`}
                        width="20px"
                        height="20px"
                      />
                      <span className="dropdown-caret" />
                    </summary>
                  </details>
                </li>
              </ul>
            </div>
          </div>
        );
      }}
    </HeaderComponent>
  </header>
);

export const Header = withStyles(styles)(headerComponent);
