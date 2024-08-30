import { Nav, Tab } from "react-bootstrap";
import Order from "./Order";
import ProfileInfo from "./ProfileInfo";
import WishList from "./WishList";

export default function AllProfileContent() {
  return (
    <>
      <div className="woocomerce__account">
        <Tab.Container id="left-tabs-example" defaultActiveKey="profile">
          <div className="container">
            <div className="woocomerce__account-wrapper">
              <div className="woocomerce__account-left">
                <div className="woocomerce__account-titlewrapper">
                  <span className="woocomerce__account-title">My Account</span>
                </div>
                <Nav
                  className="woocomerce__account-menus flex-column"
                  variant="underline"
                >
                  <Nav.Item>
                    <Nav.Link eventKey="profile">Profile</Nav.Link>
                  </Nav.Item>
                  <Nav.Item>
                    <Nav.Link eventKey="wishlist">Wishlist</Nav.Link>
                  </Nav.Item>
                  <Nav.Item>
                    <Nav.Link eventKey="order">Order</Nav.Link>
                  </Nav.Item>
                  <Nav.Item>
                    <Nav.Link>Sign out</Nav.Link>
                  </Nav.Item>
                </Nav>
              </div>
              <div className="woocomerce__account-right">
                <Tab.Content>
                  <Tab.Pane eventKey="profile">
                    <ProfileInfo />
                  </Tab.Pane>
                  <Tab.Pane eventKey="wishlist">
                    <WishList />
                  </Tab.Pane>
                  <Tab.Pane eventKey="order">
                    <Order />
                  </Tab.Pane>
                </Tab.Content>
              </div>
            </div>
          </div>
        </Tab.Container>
      </div>
    </>
  );
}
