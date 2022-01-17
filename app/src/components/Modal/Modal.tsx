import React from 'react';
import { useState } from 'react';
import { Modal, ModalHeader, ModalBody, ModalFooter } from "reactstrap";
import { Button } from 'packages';
import { LoginForm, RegisterForm } from '../Forms';

interface DemoModalProps {
    onClose: () => void;
    isLogin: boolean;
}

export const DemoModal = ({ onClose, isLogin }: DemoModalProps) => {
    const [isOpen, setIsOpen] = useState(true);
    return (
        <Modal isOpen={isOpen} data-testid="modal_window">
            <ModalHeader 
                close={<></>}
            >
                {isLogin ? 'Login To ' : 'Register For '} The Demo
            </ModalHeader>
            <ModalBody>
                { isLogin && <LoginForm /> || <RegisterForm />}
            </ModalBody>
            <ModalFooter>
            <Button
                primary
                onClick={function noRefCheck(){}}
                label={isLogin ? 'Login' : 'Register'}
                backgroundColor='default'
                size="medium"
            />
                
            <Button onClick={onClose} label="Cancel" />
            </ModalFooter>
        </Modal>
    );
}