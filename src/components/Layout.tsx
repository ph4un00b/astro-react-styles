import { useState } from 'react';
import { Button, Card, Drawer, Menu, Navbar, Theme } from 'react-daisyui';

const side = (
  <ul className="menu p-4 overflow-y-auto w-80 bg-base-100 text-base-content">
    <li>
      <a>Sidebar Item 1</a>
    </li>
    <li>
      <a>Sidebar Item 2</a>
    </li>
  </ul>
);

export default function Layout({ children }: { children: React.ReactNode }) {
  const [visible, setVisible] = useState(false);

  const toggleVisible = () => {
    setVisible(!visible);
  };

  return (
    <Theme dataTheme="wireframe">
      <Drawer
        side={side}
        open={visible}
        onClickOverlay={toggleVisible}
        className="font-sans"
      >
        <Navbar>
          <div className="flex-none lg:hidden">
            <Button shape="square" color="ghost" onClick={toggleVisible}>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                className="inline-block w-6 h-6 stroke-current"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
            </Button>
          </div>
          {/* <div className="flex-1 px-2 mx-2">Navbar Title</div> */}
          <div className="flex-none hidden lg:block">
            <Menu horizontal={true}>
              <Menu.Item>
                <a>Navbar Item 1</a>
              </Menu.Item>
              <Menu.Item>
                <a>Navbar Item 2</a>
              </Menu.Item>
              <Menu.Item>
                <a>Navbar Item 2</a>
              </Menu.Item>
              <Menu.Item>
                <a>Navbar Item 2</a>
              </Menu.Item>
              <Menu.Item>
                <a>Navbar Item 2</a>
              </Menu.Item>
            </Menu>
          </div>
        </Navbar>
        <div>
          <Card side="lg">
            <Card.Image
              src="https://api.lorem.space/image/shoes?w=400&h=225"
              alt="Shoes"
            />
            <Card.Body>
              <Card.Title tag="h2">Shoes!</Card.Title>
              <p>If a dog chews shoes whose shoes does he choose?</p>
              <Card.Actions className="justify-end">
                <Button color="primary">Buy Now</Button>
              </Card.Actions>
            </Card.Body>
          </Card>
        </div>
      </Drawer>
    </Theme>
  );
}
