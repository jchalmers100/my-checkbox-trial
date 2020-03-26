import React from 'react';
import styled from 'styled-components';
import { FunctionComponent } from 'react';

type CheckboxProps = {
    checked?: boolean;
    onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
    //label: string;
};

const CheckboxContainer = styled.div`
    display: inline-block;
    vertical-align: middle;
`;

const Icon = styled.svg`
    fill: none;
    stroke: white;
    stroke-width: 2px;
`;

const HiddenCheckbox = styled.input.attrs({ type: 'checkbox' })`
    border: 0;
    clip: rect(0 0 0 0);
    clippath: inset(50%);
    height: 1px;
    margin: -1px;
    overflow: hidden;
    padding: 0;
    position: absolute;
    white-space: nowrap;
    width: 1px;
`;

const StyledCheckbox = styled.div`
    display: inline-block;
    width: 16px;
    height: 16px;
    background: ${(props: CheckboxProps) => (props.checked ? 'green' : 'white')};
    border-color: 'dark gray';
    border-width: 1px;
    border-style: solid;
    border-radius: 2px;

    ${HiddenCheckbox}:focus + & {
        box-shadow: 0 0 0 3px grey;
    }

    ${Icon} {
        visibility: ${(props: CheckboxProps) => (props.checked ? 'visible' : 'hidden')};
    }
`;

const Checkbox: FunctionComponent<CheckboxProps> = ({ onChange, checked, ...props }) => {
    return (
        <CheckboxContainer>
            <HiddenCheckbox checked={checked} {...props} onChange={onChange} />
            <StyledCheckbox data-testid="styledcheckbox" checked={checked} {...props} onChange={onChange}>
                <Icon viewBox="0 0 24 24">
                    <polyline points="20 6 9 17 4 12" />
                </Icon>
            </StyledCheckbox>
        </CheckboxContainer>
    );
};

export default Checkbox;
