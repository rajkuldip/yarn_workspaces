import { BrowserRouter, Routes, Route } from 'react-router-dom';
import styled from 'styled-components';

import { DemonNav } from '../../components';
import { DemoHome, DemoList } from '..';


export const App = () => (
    <BrowserRouter>
        <DemonNav />
        <Container>
            <Routes>
                <Route path="/" element={<DemoHome />} />
                <Route path="/list" element={<DemoList />} />
            </Routes>
        </Container>
    </BrowserRouter>
);

const Container = styled.div`
    margin: 2em;
`;