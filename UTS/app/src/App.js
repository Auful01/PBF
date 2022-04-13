import logo from './logo.svg';
import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  useParams,
  useRouteMatch,
  Redirect,
  useHistory,
  useLocation
} from 'react-router-dom';
import { Layout, Menu } from 'antd';
import 'antd/dist/antd.css';
import {
  MenuUnfoldOutlined,
  MenuFoldOutlined,
  UserOutlined,
  VideoCameraOutlined,
  UploadOutlined,
} from '@ant-design/icons';
import './Breadcumb.css'
import DetailLaptop from './Market/LaptopDetail'
import './App.css';
import MarketPage from './Market/MarketPage';
import Checkout from './Market/Checkout';
import Login from './Market/Login';
import CheckoutPage from './Market/CheckoutPage';
// import MarketPage from './Market/MarketPage';
// import Checkout from './Market/Checkout';
// import Login from './Market/Login';
// import CheckoutPage from './Market/CheckoutPage';



const { Header, Sider, Content } = Layout;

class App extends React.Component {
  state = {
    collapsed: false,
  };

  toggle = () => {
    this.setState({
      collapsed: !this.state.collapsed,
    });
  };


  render() {

    return (
      <Router>
        <Layout>
          <Sider trigger={null} collapsible collapsed={this.state.collapsed}>
            <div className="logo">
              <img src='/images/logo.png' className='img-fluid' style={{ maxHeight: 80 }} />
              {/* <h1 style={{ fontWeight: 900, color: '#fff' }} >MYWEB</h1> */}
            </div>
            <Menu theme="dark" mode="inline" defaultSelectedKeys={['1']}>
              <Menu.Item key="1" icon={<UserOutlined />}>
                <Link to='/laptop'>
                  Laptops
                </Link>
              </Menu.Item>
              <Menu.Item key="2" icon={<VideoCameraOutlined />}>
                <Link to='/checkout-page'>
                  Checkout

                </Link>
              </Menu.Item>
              {
                fakeAuth.authenticate == false ?
                  <Menu.Item key="3" icon={<UploadOutlined />}>

                    <Link to='/login'>
                      Login

                    </Link>
                  </Menu.Item> : <Menu.Item key="3" icon={<UploadOutlined />}>

                    <button className='btn btn-link' onClick={fakeAuth.signout}>
                      Auth

                    </button>
                  </Menu.Item>
              }

            </Menu>
          </Sider>
          <Layout className="site-layout">
            <Header className="site-layout-background" style={{ padding: 0 }}>
              {React.createElement(this.state.collapsed ? MenuUnfoldOutlined : MenuFoldOutlined, {
                className: 'trigger',
                onClick: this.toggle,
              })}
            </Header>
            <Content
              className="site-layout-background"
              style={{
                margin: '24px 16px',
                padding: 24,
                height: '100vh'
              }}
            >
              <Switch>
                <Route exact path='/laptop'>
                  <MarketPage />
                </Route>

                <Route path='/laptop/:laptopId'>
                  <DetailLaptop />
                </Route>
                <PrivateRoute path='/checkout-page'>
                  <CheckoutPage />
                </PrivateRoute>

                <Route path='/login'>
                  <LoginPage />
                </Route>
                <PrivateRoute path='/checkout/:dataId'>
                  {
                    console.log(fakeAuth.isAuthenticated)
                  }
                  <Checkout />
                </PrivateRoute>
              </Switch>
              {/* Content */}
            </Content>
          </Layout>
        </Layout>
      </Router>
    );
  }
}

export default App



function PrivateRoute({ children, ...rest }) {
  return (
    <Route
      {...rest}
      render={({ location }) =>
        fakeAuth.isAuthenticated ? (children)
          : (<Redirect
            to={{
              pathname: "/login",
              state: { from: location }
            }} />)} />
  )
}

const fakeAuth = {
  isAuthenticated: false,
  account: '',
  authenticate(cb) {
    fakeAuth.isAuthenticated = true;
    fakeAuth.account = document.getElementById('username').value
    setTimeout(cb, 100)
  },
  signout(cb) {
    fakeAuth.isAuthenticated = false;
    fakeAuth.account = document.getElementById('username').value = ''
    setTimeout(cb, 100)
  }
};

function AuthButton() {
  let history = useHistory();

  return fakeAuth.isAuthenticated ? (
    <p>
      Welcome!{" "}
      <button onClick={() => { fakeAuth.signout(() => history.push("/")) }}>Sign Out</button>
    </p>
  ) : (<p>
    Welcome!{" "}
    <button onClick={() => { fakeAuth.signout(() => history.push("/")) }}>Sign Out</button>
  </p>
    // <p>You're not LoggedIn  </p>
  )
}


function LoginPage() {
  let history = useHistory();
  let location = useLocation();

  let { from } = location.state || { from: { pathname: "/" } };
  let login = () => {
    fakeAuth.authenticate(() => {
      history.replace(from)
    })
  }

  return (
    <Login onClick={login} />
  )
}