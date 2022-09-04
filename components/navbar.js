import Image from 'next/image';
import Link from 'next/link';
import { useRouter } from 'next/router';
import React from 'react'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Logo from '../public/images/Logo.png'

const navbar = () => {
    const { locale, locales } = useRouter()
    return (
        <Navbar variant="light" expand='lg' className='text-uppercase'>
            <Container>
                <Link href='/' locale={locale}>
                    <Navbar.Brand >
                        <Image
                            src={Logo}
                            priority
                            width={100}
                            height={80} />
                    </Navbar.Brand>
                </Link>
                <Navbar.Toggle aria-controls="navbar-nav" />
                <Navbar.Collapse id="navbar-nav">
                    <Nav className="ms-auto">
                        <NavDropdown title={locale} id="nav-dropdown" >
                            {
                                locales.filter((lang) => locale !== lang).map((lang, key) => (

                                    <Link href='' locale={lang} key={key}>
                                        <a  className="dropdown-item" >
                                            {lang}
                                        </a>
                                    </Link>

                                ))
                            }
                        </NavDropdown>
                        <NavDropdown title='OUR HOTELS' ></NavDropdown>
                        <div className='vr mx-4'></div>
                        <Nav.Link >Accommodation</Nav.Link>
                        <Nav.Link >Restaurants</Nav.Link>
                        <Nav.Link >Activities</Nav.Link>
                        <Nav.Link >Spa & Wellness</Nav.Link>
                        <Nav.Link >Conference</Nav.Link>
                        <Nav.Link >Sport</Nav.Link>
                    </Nav>
                </Navbar.Collapse>

            </Container>
        </Navbar>
    )
}

export default navbar