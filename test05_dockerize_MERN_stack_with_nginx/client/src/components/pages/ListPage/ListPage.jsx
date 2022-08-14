import React, {useEffect, useState}  from 'react';
import Title from '../../atoms/Title/Title';
import Card from '../../modules/Card/Card';
import Table from '../../modules/Table/Table';
import Layout from '../../organisms/Layout/Layout';
import Pagination from './../../organisms/Pagination/Pagination';
import Modal from '../../organisms/Modal/Modal';

import { useDispatch, useSelector } from 'react-redux';
import { deleteEmployeeAction, getAllEmployeeAction, removeMessageAction } from '../../../redux/employee/employee.action';
import Toast from '../../atoms/Toast/Toast';

export default function ListPage() {
  const { employees, successMessage, error } = useSelector(state => state.employee);
  const [isShowModal, setIsShowModal] = useState(false);
  const [itemToDelete, setItemToDelete] = useState({});
  const dispatch = useDispatch();

  const [toastStatus, setToastStatus] = useState('');
  const [toastText, setToastText] = useState('');

  useEffect(() => {
      if(!employees.length) dispatch(getAllEmployeeAction());
  }, [dispatch, employees.length]);

  useEffect(() => {
    if(successMessage) {
      setToastStatus('success');
      setToastText('The employee has been deleted successfully.');
      setTimeout(() => dispatch(removeMessageAction()), 2000);
    } else {
      setToastStatus('');
      setToastText('')
    }
  }, [dispatch, successMessage]);

  useEffect(() => {
    if(error) {
      setToastStatus('error');
      setToastText(error)
      setTimeout(() => dispatch(removeMessageAction()), 2000);
    } else {
      setToastStatus('');
      setToastText('')
    }
  }, [dispatch, error]);

  const handleOnDelete = (item) => {
    if(item) dispatch(deleteEmployeeAction({ _id : item._id }));
    else {
      setToastStatus('error');
      setToastText('Something went wrong while deleting the item.');
      setTimeout(() => {
        setToastStatus('');
        setToastText('');
      }, 2000);
    }
  }

  const handleOnClickModal = (value) => {
    if(value === 'cancel') setItemToDelete({});
    if(value === 'action') handleOnDelete(itemToDelete);
    setIsShowModal(false);
  }

  // PAGINATION 
  const [pageNumber, setPageNumber] = useState(1);
  const dataPerPage = 5;
  let paginate = [];

  if(employees.length) {
    paginate = employees.filter((item, index) => index + 1 > (pageNumber - 1)*dataPerPage &&  index + 1 <= pageNumber*dataPerPage);
    if(paginate.length === 0) {
      setPageNumber(pageNumber - 1);
    }
  }

  return (
    <Layout>
        <Card>
          {toastStatus && toastText && <Toast status={toastStatus} text={toastText} />}
          <Title text="Product List" />
          <Table filtered={paginate} onClick={(item) => {
            setIsShowModal(true);
            setItemToDelete(item);
          }} />

          {paginate.length ? (
            <Pagination 
              dataLength={employees.length} 
              dataPerPage={dataPerPage} 
              setPageNumber={setPageNumber}
              pageNumber={pageNumber} />  
          ) : null}
        </Card>
        {isShowModal ? <Modal text="Are you sure to delete this item?" onClick={handleOnClickModal} /> : null}
    </Layout>
  )
}
