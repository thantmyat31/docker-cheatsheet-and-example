import React, {useState, useEffect} from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';

import Title from '../../atoms/Title/Title';
import Layout from '../../organisms/Layout/Layout';
import Button from '../../atoms/Button/Button';
import Card from './../../modules/Card/Card';
import Form from '../../modules/Form/Form';
import InputText from '../../atoms/InputText/InputText';
import { createEmployeeAction, removeMessageAction, getAllEmployeeAction, updateEmployeeAction } from '../../../redux/employee/employee.action';
import Toast from '../../atoms/Toast/Toast';

const RegistrationPage = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [position, setPosition] = useState('');
  const [address, setAddress] = useState('');
  const [phone, setPhone] = useState('');

  const [isUpdateForm, setIsUpdateForm] = useState(false);
  const [editableId, setEditableId] = useState('');
  const [formTitleText, setFormTitleText] = useState('Employee Registration');
  const [buttonName, setButtonName] = useState('Save');

  const [toastStatus, setToastStatus] = useState('');
  const [toastText, setToastText] = useState('');


  const { successMessage, error, employees } = useSelector(state => state.employee);
  const dispatch = useDispatch();
  const params = useParams();

  const resetForm = () => {
    setName('');
    setEmail('');
    setPosition('');
    setAddress('');
    setPhone('');
  }

  useEffect(() => {
    if(!employees.length) dispatch(getAllEmployeeAction());
  }, [dispatch, employees.length]);

  useEffect(() => {
    if(successMessage) {
      setToastStatus('success');
      setToastText(`An employee has been ${!isUpdateForm ? 'added' : 'updated'}.`);
      setTimeout(() => dispatch(removeMessageAction()), 2000);
    } else {
      setToastStatus('');
      setToastText('');
    }
  },[successMessage, dispatch]);

  useEffect(() => {
    if(error) {
      setToastStatus('error');
      setToastText(error);
      setTimeout(() => dispatch(removeMessageAction()), 2000);
    } else {
      setToastStatus('');
      setToastText('');
    }
  },[error, dispatch]);

  useEffect(() => {
    if(successMessage && !isUpdateForm) {
      resetForm();
    }
  }, [successMessage, isUpdateForm]);

  useEffect(() => {
    if(params._id && employees.length) {
      const item = employees.find(i => i._id === params._id);
      setName(item.name);
      setEmail(item.email);
      setPosition(item.position);
      setAddress(item.address);
      setPhone(item.phone);
      setEditableId(params._id);
      setIsUpdateForm(true);
    } else {
      resetForm();
    }
  },[params._id, dispatch, employees.length]);

  useEffect(() => {
    if(params._id) {
      setFormTitleText('Employee Update Form');
      setButtonName('Update');
    } else {
      setFormTitleText('Employee Registration');
      setButtonName('Save');
    }
  }, [params._id]);

  const handleOnSubmit = (e) => {
    e.preventDefault();
    if(!isUpdateForm) dispatch(createEmployeeAction({name, email, position, address, phone}));
    else {
      dispatch(updateEmployeeAction({ _id: editableId, name, email, position, address, phone}));
    }
  }

  return (
    <Layout>
      <Card>
        {toastStatus && toastText && <Toast status={toastStatus} text={toastText} />}
        <Title text={formTitleText} />
        <Form onSubmit={handleOnSubmit}>
          <InputText 
            value={name}
            setValue={setName}
            label="Name"
            required
          />
          <InputText 
            value={email}
            setValue={setEmail}
            label="Email"
            type="email"
            required
          />
          <InputText 
            value={position}
            setValue={setPosition}
            label="Position"
            required
          />
          <InputText 
            value={address}
            setValue={setAddress}
            label="Address"
            required
          />
          <InputText 
            value={phone}
            setValue={setPhone}
            label="Phone"
            required
          />
          <Button style={{ display: 'block', marginLeft: 'auto', marginTop: '30px' }} label={buttonName} type="submit" />
        </Form>
      </Card>
    </Layout>
  );
  
}

export default RegistrationPage;

