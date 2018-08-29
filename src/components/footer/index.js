import React from 'react';
import Link, { withPrefix } from 'gatsby-link';
import classNames from 'classnames';
import SocialIcons from '../social-icons';
import './index.less';

export default props => {

  const footerClasses = classNames('footer', {
    'footer--custom': props.className
  });
  return (
    <footer className={footerClasses}>
      <div className="footer__inner">
        <div className="footer__logo-icons-wrapper">
          <Link href="/" className="nav__logo footer__logo"><img src={withPrefix('assets/logo/black_text.svg')} alt="Вперше" /></Link>
          <SocialIcons
            icons={props.socialIcons}
            listClassName="social-icons-container social-icons-container--black"
            listItemClassName="social-icons-item"
            linkClassName="social-icons-link--footer"
          />
        </div>
        <ul className="footer__nav" role="navigation">
          {props.bottomLinks.map(link => (
            <li className="footer__nav-item" key={link.url} >
              <Link className="footer__nav-link" to={link.url}>{link.text}</Link>
            </li>
          ))}
        </ul>
        <div className="footer__copyright">
          {props.copyrightText}
        </div>
      </div>
    </footer>
  );
};

