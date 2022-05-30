import styled from 'styled-components';

export default function() {
    const Text = styled.h1`
        color: red;
    `;
    return (
        <div>
            <h1>Styled Components</h1>
            <Text>Hello</Text>
        </div>
    );
}