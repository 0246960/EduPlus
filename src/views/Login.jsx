import axios from 'axios';
import React from 'react';
import { useState } from 'react';
import { Container, Form, Button, Navbar, Footer, Nav } from 'react-bootstrap';
import { Link, useNavigate } from 'react-router-dom';
import "../components/SCSS/Login.scss";

const Login = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const navigate = useNavigate();
  
    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await axios.post('https://api-proyecto-ivory.vercel.app/auth/login', {
                email,
                password
            });
            localStorage.setItem('userToken', response.data.token);
            alert('Successful login.');
            navigate('/home');
        } catch (error) {
            console.error('Login failed:', error.response || error.message);
            alert('Login failed. Please verify your credentials.');
        }
    };
  
    return (
      <>
        <Navbar bg="dark" variant="dark">
          <Container>
            <Navbar.Brand href="/home">EduPlus</Navbar.Brand>
          </Container>
        </Navbar>
  
        <Container className="d-flex flex-column align-items-center justify-content-center" style={{ minHeight: "100vh" }}>
          <div className="w-100" style={{ maxWidth: "400px" }}>
            <h1 className="text-center mb-4">Login</h1>
            <Form onSubmit={handleSubmit}>
              <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>Email address</Form.Label>
                <Form.Control 
                  type="email" 
                  placeholder="Enter email" 
                  required 
                  value={email} 
                  onChange={(e) => setEmail(e.target.value)} 
                />
              </Form.Group>
  
              <Form.Group className="mb-3" controlId="formBasicPassword">
                <Form.Label>Password</Form.Label>
                <Form.Control 
                  type="password" 
                  placeholder="Password" 
                  required 
                  value={password} 
                  onChange={(e) => setPassword(e.target.value)} 
                />
              </Form.Group>
  
              <Button variant="primary" type="submit" className="w-100">
                Submit
              </Button>
            </Form>
            <div className="text-center mt-4">
              Don't have an account? <Link to="/register">Register</Link>
            </div>
          </div>
        </Container>
  
        <Navbar fixed="bottom" bg="dark" variant="dark">
          <Container className="justify-content-center">
            <Nav>
              <Nav.Item>
                <Nav.Link href="/terms">Terms of Service</Nav.Link>
              </Nav.Item>
              <Nav.Item>
                <Nav.Link href="/privacy">Privacy Policy</Nav.Link>
              </Nav.Item>
            </Nav>
          </Container>
        </Navbar>
      </>
    );
  };
  
  export default Login;