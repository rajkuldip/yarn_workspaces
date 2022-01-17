import React from 'react';
import { Container, Row, Col, FormGroup, Label, Input } from 'reactstrap';
import { useForm } from 'react-hook-form';
import styled from 'styled-components';


export const LoginForm = () => {
    const { register, handleSubmit } = useForm();

    const onSubmit = (data) => console.log(data);
    
    return (
        <DemoContainer data-testid="modal-window">
            <form onSubmit={handleSubmit(onSubmit)}>
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
            </form>
        </DemoContainer>
    )
};

const DemoContainer = styled(Container)`
    margin: 0;
`;