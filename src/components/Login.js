import React, { useState, useEffect } from "react";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import Form from "react-bootstrap/Form";
import Button from 'react-bootstrap/Button';
import Container from "react-bootstrap/esm/Container";
import { useNavigate } from "react-router-dom";

function Login(props) {
    const navigate = useNavigate();
    const [formValues, setFormValues] = useState({ email: "", password: "" })
    const [validationStates, setValidationStates] = useState({ emailState: false, passwordState: false })

    const handleEmailChange = ((e) => {
        setFormValues({ ...formValues, email: e.target.value })
    });

    const handlePasswordChange = ((e) => {
        setFormValues({ ...formValues, password: e.target.value })
        if (e.target.value.length < 6) {
            setValidationStates({ ...validationStates, passwordState: false })
        } else {
            setValidationStates({ ...validationStates, passwordState: true })
        }
    });




    const clickNext = (() => {
        if (formValues.email.includes("@")) {
            setValidationStates({ ...validationStates, emailState: true });
        }
    })

    const clickSubmit = (() => {
        if (validationStates.passwordState) {

            alert(JSON.stringify(formValues))
            navigate("/Carros")
        }
    })

    const exampleJSON = { email: formValues.email, password: formValues.password, role: formValues.role }




    return (
        <Container className="shadow-lg" style={{ width: "40%", padding: "5%", backgroundColor: "#fff", borderRadius: '20px' }}>
            <Row>
                <Col>
                    <h1>Acceder</h1>
                    <Form>
                        {validationStates.emailState == false &&
                            <Form.Group className='mb-3' controlId='formBasicEmail'>
                                <Form.Label className="mb-4">Usa tu cuenta uniandes</Form.Label>
                                <Form.Control size="lg" type='email' placeholder='Correo electrónico' onChange={handleEmailChange} value={formValues.email} className={!validationStates.emailState ? 'is-invalid' : ''} />
                                {!validationStates.emailState && <Form.Text className='text-muted'>Your email is invalid</Form.Text>}
                                {validationStates.emailState && <Form.Text className='text-muted'>We'll never share your email with anyoneelse.</Form.Text>}
                                <Row><p className="text-start fw-bold mt-3" style={{ color: '#0d6efd' }}>¿Olvidaste tu correo electrónico?</p></Row>
                                <Row>
                                    <Col><p className="text-start align-bottom" style={{ color: '#0d6efd' }}>Crear cuenta</p></Col>
                                    <Col md={{ span: 4, offset: 4 }}><Button variant="primary" onClick={clickNext}>Siguiente</Button></Col>
                                </Row>
                            </Form.Group>
                        }

                        {validationStates.emailState == true &&
                            <Form.Group className="mb-3" controlId="formBasicPassword">
                                <Form.Control plaintext readOnly defaultValue={formValues.email} style={{ textAlign: 'center' }} />
                                <Form.Control type="password" placeholder="Ingresa tu contraseña" onChange={handlePasswordChange} value={formValues.password} className={!validationStates.passwordState ? 'is-invalid' : ''} />
                                {!validationStates.passwordState && <Form.Text className="text-muted">Your password should be have numbers and letters and should be at least 6 char long</Form.Text>}
                                <Row>
                                    <Col><Button variant="primary" onClick={clickSubmit} style={{ width: "10em", margin: '10px auto' }}>Enviar</Button></Col>
                                </Row>
                            </Form.Group>}



                    </Form>
                </Col>
            </Row>
        </Container>
    );
}

export default Login;