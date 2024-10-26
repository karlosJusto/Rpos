import React from 'react'
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';

import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';


const ModalClientes = ({show, handleClose}) => {




  return (
    <>
     
       
      <Modal
        show={show}
        onHide={handleClose}
        size='lg'
        backdrop="static"
        keyboard={false}
        centered
      >
        <Modal.Header closeButton className='border-none'  onClick={handleClose}>
        
        </Modal.Header>
        <Modal.Body>
        
        <div className="bg-white p-4 rounded-lg flex gap-20 ms-4 ">
            <div className="relative bg-inherit ">
                <input type="text" id="username" name="username" className="peer bg-transparent h-10 w-72 rounded-lg text-gray-200 placeholder-transparent ring-2 px-2 ring-gray-500 focus:ring-sky-600 focus:outline-none focus:border-rose-600" placeholder="Type inside me"/><label htmlFor="username" className="absolute cursor-text left-0 -top-3 text-sm text-gray-500 bg-inherit mx-1 px-1 peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-500 peer-placeholder-shown:top-2 peer-focus:-top-3 peer-focus:text-sky-600 peer-focus:text-sm transition-all">Nombre</label>
            </div>
            <div className="relative bg-inherit">
                <input type="number" id="username" name="username" className="peer bg-transparent h-10 w-72 rounded-lg text-gray-200 placeholder-transparent ring-2 px-2 ring-gray-500 focus:ring-sky-600 focus:outline-none focus:border-rose-600" placeholder="Type inside me"/><label htmlFor="username" className="absolute cursor-text left-0 -top-3 text-sm text-gray-500 bg-inherit mx-1 px-1 peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-500 peer-placeholder-shown:top-2 peer-focus:-top-3 peer-focus:text-sky-600 peer-focus:text-sm transition-all">Teléfono</label>
            </div>
        </div>

        <div className='bg-slate-400 '>

            <div className='grid grid-cols-2 text-center h-20'>
                <h1 className='text-xl font-nunito bg-gray-200'>Nombre</h1>
                <h1 className='text-xl font-nunito bg-gray-200' >Telefono</h1>

            </div>
        </div>

        <div>
    <LocalizationProvider dateAdapter={AdapterDayjs}>
      <DatePicker />
    </LocalizationProvider>



        
        </div>



        


       
        </Modal.Body>
        <Modal.Footer className='border-none'>
          <Button variant="secondary" className='p-3 bg-white font-nunito text-gray-500' onClick={handleClose} >
            Cancelar
          </Button>
          <Button variant="primary" onClick={handleClose} className='bg-yellow-500 border-yellow-500 hover:bg-yellow-600 hover:border-yellow-600 p-3 font-nunito'>Agregar</Button>
        </Modal.Footer>
      </Modal>

    </>
  )
}

export default ModalClientes