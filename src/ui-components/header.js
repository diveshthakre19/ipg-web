import React from 'react';
import MenuList from '../menu'
import GlobalData from '../globalData'
import { Nav, Navbar, Container, NavDropdown } from 'react-bootstrap';
function Header(props) {
    return (
        <div>
            <header id="header" className="dark header-size-sm">

                <div id="header-wrap">
                    <div className="container" style={{ padding: 15 }}>
                        <Navbar fixed='top' expand="sm" style={{ backgroundColor: '#7a0dff' }}>
                            <Container>
                                <Navbar.Brand href="#home"><div className="ms-auto ms-md-0">
                                    <a href="\home"><img style={{width:80}} src="../ipg-logo.png" alt="IPG Packers and movers group" /></a>
                                </div></Navbar.Brand>
                                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                                <Navbar.Collapse id="basic-navbar-nav" >
                                    <Nav className="me-auto" >
                                        <Nav.Link href="/home">Home</Nav.Link>
                                        <Nav.Link href="/about-us">About Us</Nav.Link>
                                        <NavDropdown title="Service" href="/services" id="basic-nav-dropdown">
                                            <Nav.Link href="/services">All Services</Nav.Link>
                                            <NavDropdown.Divider />
                                            {MenuList.service.map(data =>
                                                <NavDropdown.Item href={data.url} key={data.label}><i className={data.icon} style={{ marginRight: 10 }}></i>{data.label}</NavDropdown.Item>
                                            )}
                                        </NavDropdown>
                                        <Nav.Link href="/Branches">Branches</Nav.Link>
                                        <Nav.Link href=" /find-Branches">Find Branchs</Nav.Link>
                                        <Nav.Link href=" /calculate-rate">Calculate Rate</Nav.Link>
                                        <Nav.Link href="/contact-us">Contact Us</Nav.Link>
                                    </Nav>
                                    <div class="header-buttons d-none d-sm-inline-block">
                                        <a href={`tel:${GlobalData.companydetails.contactno}`} data-scrollto="#slider" data-offset="-80" class="button button-rounded button-white button-light button-small m-0">Call:{GlobalData.companydetails.contactNumber}</a>
                                    </div>
                                </Navbar.Collapse>
                            </Container>
                        </Navbar>
                    </div>
                </div>
                <div className="header-wrap-clone"></div>
            </header>
        </div>
    );
}

export default Header;