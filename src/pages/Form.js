import {Col, Form, Row, Button } from 'react-bootstrap'

import {useState} from 'react'

const SiteForm = (props)=>{
    const [inputs, setInputs] = useState({
                                            email: '',
                                            password: '',
                                            country: '',
                                            description: '',
                                            radios: '',
                                            rememberMe: false  
                                        })

    const handleInput = e=>{
        setInputs({
            ...inputs,
            [e.target.name]: e.target.value
        })
    }

    const submitForm = e=>{
        e.preventDefault()
        props.handleSubmit(inputs)
    }

    return (
        <Col md="6" className="offset-md-2 mt-3">
            <h3 className="text-center">Generic Form</h3>
            <Form onSubmit={submitForm}>
                <Form.Group as={Row} className="mb-3" controlId="formHorizontalEmail">
                    <Form.Label column sm={2}>
                        Email
                    </Form.Label>
                    <Col sm={10}>
                        <Form.Control type="email"  placeholder="Email" name="email" value={inputs.email} onChange={handleInput} />
                    </Col>
                </Form.Group>

                <Form.Group as={Row} className="mb-3" controlId="formHorizontalPassword">
                    <Form.Label column sm={2}>
                        Password
                    </Form.Label>
                    <Col sm={10}>
                        <Form.Control type="password" placeholder="Password" name="password" onChange={handleInput} value={inputs.password} />
                    </Col>
                </Form.Group>
                <Form.Group as={Row} className="mb-3" controlId="formHorizontalPassword">
                    <Form.Label column sm={2}>
                        Country
                    </Form.Label>
                    <Col sm={10}>
                        <Form.Select aria-label="Default select example" name="country" onChange={handleInput} value={inputs.country}>
                            <option>Select your country of origin</option>
                            <option value="1">Nigeria</option>
                            <option value="2">Ghana</option>
                            <option value="3">Sierra Leone</option>
                            <option value="4">South Africa</option>
                        </Form.Select>
                    </Col>
                </Form.Group>
                <Form.Group as={Row} className="mb-3" controlId="formHorizontalPassword">
                    <Form.Label column sm={2}>
                        Description
                    </Form.Label>
                    <Col sm={10}>
                        <Form.Control as="textarea" type="text" placeholder="Tell us a little about yourself" name="description" onChange={handleInput} value={inputs.description} />
                    </Col>
                </Form.Group>
                <fieldset>
                    <Form.Group as={Row} className="mb-3">
                        <Form.Label as="legend" column sm={2}>
                            Radios
                        </Form.Label>
                        <Col sm={10}>
                            <Form.Check
                                type="radio"
                                label="first radio"
                                name="radios"
                                id="formHorizontalRadios1"
                                value="radio1"
                                onChange={handleInput}
                                checked={inputs.radios === 'radio1'}
                            />
                            <Form.Check
                                type="radio"
                                label="second radio"
                                name="radios"
                                id="formHorizontalRadios2"
                                value="radio2"
                                onChange={handleInput}
                                checked={inputs.radios === 'radio2'}
                            />
                            <Form.Check
                                type="radio"
                                label="third radio"
                                name="radios"
                                id="formHorizontalRadios3"
                                value="radio3"
                                onChange={handleInput}
                                checked={inputs.radios === 'radio3'}
                            />
                        </Col>
                    </Form.Group>
                </fieldset>
                <Form.Group as={Row} className="mb-3" controlId="formHorizontalCheck">
                    <Col sm={{ span: 10, offset: 2 }}>
                        <Form.Check label="Remember me" checked={inputs.rememberMe} name="rememberMe" value={!inputs.rememberMe}
                                onChange={handleInput} />
                    </Col>
                </Form.Group>

                <Form.Group as={Row} className="mb-3">
                    <Col sm={{ span: 10, offset: 2 }}>
                        <Button type="submit">Sign in</Button>
                    </Col>
                </Form.Group>
            </Form>
        </Col>
    )
}

export default SiteForm