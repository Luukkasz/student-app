import React from 'react';
import { StyledH1, WrapperDiv } from '../UsersList/UserList.styles';
import FormField from '../../molecules/FormField/FormField';
import { Button } from '../../atoms/Button/Button';

const Form = ({ handleAddUser, formValues, handleInputChange }) => {
  return (
    <>
      <WrapperDiv as="form" onSubmit={handleAddUser}>
        <StyledH1>Add new student</StyledH1>
        <FormField label="Name" id="name" name="name" value={formValues.name} onChange={handleInputChange} />
        <FormField label="Attendance" id="attendance" name="attendance" value={formValues.attendance} onChange={handleInputChange} />
        <FormField label="Average" id="average" name="average" value={formValues.average} onChange={handleInputChange} />
        <Button type="submit">Add</Button>
      </WrapperDiv>
    </>
  );
};

export default Form;
