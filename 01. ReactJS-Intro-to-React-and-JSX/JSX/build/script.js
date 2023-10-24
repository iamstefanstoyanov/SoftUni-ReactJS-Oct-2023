import '../node_modules/react/umd/react.production.min.js';
import '../node_modules/react-dom/umd/react-dom.production.min.js';

var rootDomElement = document.getElementById("root");

var root = ReactDOM.createRoot(rootDomElement);

var Header = function Header() {
  return React.createElement(
    'div',
    { className: 'site-header' },
    React.createElement(
      'p',
      null,
      'Header!'
    )
  );
};

var Main = function Main() {
  return React.createElement(
    'div',
    { className: 'site-main' },
    React.createElement(
      'p',
      null,
      'Main!'
    )
  );
};

var Footer = function Footer() {
  return React.createElement(
    'div',
    { className: 'site-footer' },
    React.createElement(
      'p',
      null,
      'Footer!'
    )
  );
};

var mainWindow = React.createElement(
  'div',
  null,
  React.createElement(Header, null),
  React.createElement(Main, null),
  React.createElement(Footer, null)
);

root.render(mainWindow);