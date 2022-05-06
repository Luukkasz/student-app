import React from 'react';
import PropTypes from 'prop-types';
import { Input } from '../../atoms/Input/Input';
import { Label } from '../../atoms/Label/Label';
import styled from 'styled-components';

const WrapperDiv = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;

  label {
    margin: 20px 0;
  }
`;

function FormField({ value, onChange, label, name, id, type = 'text' }) {
  return (
    <>
      <WrapperDiv>
        <Label htmlFor={id}>{label}</Label>
        <Input name={name} type={type} id={id} value={value} onChange={onChange} />
      </WrapperDiv>
    </>
  );
}

FormField.propTypes = {
  label: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
  type: PropTypes.string,
};

export default FormField;
