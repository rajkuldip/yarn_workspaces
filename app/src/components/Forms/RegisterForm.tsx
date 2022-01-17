import React from 'react';
import { Container, Row, Col, FormGroup, Label, Input } from 'reactstrap';
import { useForm } from 'react-hook-form';
import styled from 'styled-components';


export const RegisterForm = () => {
    const { register, handleSubmit } = useForm();

    const onSubmit = (data) => console.log(data);
    
    return (
        <DemoContainer>
            <form onSubmit={handleSubmit(onSubmit)}>
                <FormGroup>
                    <Label for="first_name"> First Name: </Label>
                    <Input name="first_name" />
                </FormGroup>
                <FormGroup>
                    <Label for="last_name"> Last Name: </Label>
                    <Input name="last_name" />
                </FormGroup>
                <FormGroup>
                    <Label for="email">
                        Email:
                    </Label>
                    <Input
                        name="email"
                        placeholder="Please end email address"
                    />
                </FormGroup>
                <FormGroup>
                    <Label for="password">
                        Password:
                    </Label>
                    <Input
                        name="password"
                        type="password"
                        placeholder="Please enter password"
                    />
                </FormGroup>
                <FormGroup>
                    <Label for="confirm_password">
                        Confirmn Password:
                    </Label>
                    <Input
                        name="confirm_password"
                        type="password"
                        placeholder="Please enter password"
                    />
                </FormGroup>
            </form>
        </DemoContainer>
    )
};

const DemoContainer = styled(Container)`
    margin: 0;
`;