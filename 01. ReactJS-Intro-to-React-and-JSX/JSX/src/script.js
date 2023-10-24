import '../node_modules/react/umd/react.production.min.js';
import '../node_modules/react-dom/umd/react-dom.production.min.js';

const rootDomElement = document.getElementById("root");

const root = ReactDOM.createRoot(rootDomElement);

const Header= () => (
  <div className="site-header">
    <p>Header!</p>
  </div>
);

const Main= () => (
  <div className="site-main">
    <p>Main!</p>
  </div>
);

const Footer = () => (
  <div className="site-footer">
    <p>Footer!</p>
  </div>
);

const mainWindow = (
  <div>
    <Header />
    <Main />
    <Footer />
  </div>
);

root.render(mainWindow);
