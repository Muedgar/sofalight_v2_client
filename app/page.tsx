'use client'
import React, { useState } from 'react';
import { Navbar, Container, Nav, NavDropdown } from 'react-bootstrap';
import CustomCaretDown from './components/icons/customCaretDown';

export default function Home() {
  const [isItemIcon, setIsItemIcon] = useState(false);
  const [isItemIcon2, setIsItemIcon2] = useState(false);
  const [isItemIcon3, setIsItemIcon3] = useState(false);
  const [itemActive, setItemActive] = useState("Home");

  const handleItemClick = (item:any) => {
    setItemActive(item)
    setIsItemIcon(true);
    setTimeout(() => {
      setIsItemIcon(false);
    }, 500); // Change the time to match the duration of your animation
  };

  const handleItemClick2 = (item:any) => {
    setItemActive(item)
    setIsItemIcon2(true);
    setTimeout(() => {
      setIsItemIcon2(false);
    }, 500); // Change the time to match the duration of your animation
  };
  const handleItemClick3 = (item:any) => {
    setItemActive(item)
    setIsItemIcon3(true);
    setTimeout(() => {
      setIsItemIcon3(false);
    }, 500); // Change the time to match the duration of your animation
  };
  return (
    <div className='m-2'>
      <Navbar expand="lg" className="bg-body-tertiary w-screen h-[100px] bg-black m-0">
        <Container>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Brand href="#home" style={{ fontFamily: 'Saira Extra Condensed', fontSize: '2em' }} className='font-bold leading-thin'>SofaLightBusiness</Navbar.Brand>

          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
            <div className='flex justify-center items-center ml-[20px] mt-[5px] cursor-pointer'>
                <NavDropdown.Item href="#" style={{ fontFamily: 'Saira Extra Condensed', fontWeight: 'bolder', color: `${itemActive==='Home'?'brown':'black'}` }} onClick={() => {
                  handleItemClick2('Home')
                }}>
                  <p className='font-bold hover:text-[brown] mt-3'>Home</p>
                </NavDropdown.Item>
                <div className={`ml-[5px] ${isItemIcon2 ? 'animate-caret' : ''}`}>
                    <CustomCaretDown />
                </div>
              </div>

              <div className='flex justify-center items-center ml-[20px] mt-[5px] cursor-pointer'>
                <NavDropdown.Item href="#" style={{ fontFamily: 'Saira Extra Condensed', fontWeight: 'bolder', color: `${itemActive==='Category'?'brown':'black'}` }} onClick={() => {
                  handleItemClick('Category')
                }}>
                  <p className='font-bold hover:text-[brown] mt-3'>Category</p>
                </NavDropdown.Item>
                <div className={`ml-[5px] ${isItemIcon ? 'animate-caret' : ''}`}>
                    <CustomCaretDown />
                </div>
              </div>

              

              <div className='flex justify-center items-center ml-[20px] mt-[5px] cursor-pointer'>
                <NavDropdown.Item href="#" style={{ fontFamily: 'Saira Extra Condensed', fontWeight: 'bolder', color: `${itemActive==='Choose'?'brown':'black'}` }} onClick={() => {
                  handleItemClick3("Choose")
                }}>
                  <p className='font-bold hover:text-[brown] mt-3'>Choose a room</p>
                </NavDropdown.Item>
                <div className={`ml-[5px] ${isItemIcon3 ? 'animate-caret' : ''}`}>
                    <CustomCaretDown />
                </div>
              </div>
            </Nav>

            <div>
              <input type='text' placeholder='Search products ...' />
            </div>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
}
