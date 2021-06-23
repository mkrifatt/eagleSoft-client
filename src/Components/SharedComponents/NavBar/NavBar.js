import firebase from "firebase/app";
import React, { useContext, useRef, useState } from 'react';
import { Button, Nav, Navbar, Overlay, Popover } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { UserContext } from '../../../App';
import userImage from '../../../img/user.png';
import './NavBar.css';

const NavBar = () => {

  const [loggedInUser, setLoggedInUser, ] = useContext(UserContext);
  const { email ,name, img} = loggedInUser;
  const [show, setShow] = useState(false);
  const [target, setTarget] = useState(null);
  const ref = useRef(null);

  const handleClick = (event) => {
    setShow(!show);
    setTarget(event.target);
  };

  const handelSignOut= () => {
      firebase.auth().signOut()
      .then(res =>{
          const signOutUser = { 
              loggedInUser:false,
              name:""
          }
          setLoggedInUser(signOutUser)
      })
      .catch(err=>{

      })
  }

    return (
        <Navbar style={{backgroundColor: '#d9f6f6'}} expand="lg">
          <div className="container">
          <Navbar.Brand style={{color:'#1293F4'}} as={Link} to="/"> <span className="title"> Eagle Soft</span> </Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
              <Nav className="ml-auto text-center">
                <Nav.Link  as={Link} to="/home"  className="mr-3 nav-items">Home</Nav.Link>
                <Nav.Link  as={Link} to="/about"  className="mr-3 nav-items">About</Nav.Link>
                <Nav.Link  as={Link} to="/services"  className="mr-3 nav-items">Services</Nav.Link>
                <Nav.Link  as={Link} to="/Dashboard"  className="mr-3 nav-items">Dashboard</Nav.Link>
                <Nav.Link  as={Link} to="/contact"  className="mr-3 nav-items">Contact</Nav.Link>
                {

                      loggedInUser.name|| loggedInUser.email ? 
                      <div ref={ref}>
                    {

                      loggedInUser ? 
                        <img src= {img} alt =".." ref={target} style={{ height:"30px", width:"30px", borderRadius:"50%"}} onClick={handleClick}/> 
                        :
                        <img src= {userImage} alt =".." ref={target} style={{ height:"30px", width:"30px", borderRadius:"50%"}} onClick={handleClick}/>
                        
                    }
                          <Overlay
                            show={show}
                            target={target}
                            placement="bottom"
                            container={ref.current}
                            containerPadding={20}
                          >
                        <Popover id="popover-contained"  className="text-center" >
                            { 

                              loggedInUser ?
                              <img style={{borderRadius:"50%", height:"60px", width:"60px"}} src={img} alt="..."/> 
                                :
                                <img style={{borderRadius:"50%", height:"60px", width:"60px"}} src={userImage} alt="..."/> 
                                
                            }
                          <Popover.Content>
                            <h6>{name}</h6>
                            <p>{email}</p>
                            <Button className="btn-brand" onClick={handelSignOut}> Log Out</Button>
                          </Popover.Content>
                        </Popover>
                      </Overlay>
                      </div>
                      : 
                      <Button as={Link} to="/login" className="btn-brand mr-3">Login</Button>

                 }
              
              </Nav>  
            </Navbar.Collapse>
          </div>
      </Navbar>
    );
};

export default NavBar;