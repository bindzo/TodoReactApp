import * as React from 'react';
import Modal from '@mui/material/Modal';
import { StyledBox } from './styles';

export default function BasicModal(props) {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => {
    props.onCloseModal()  
    setOpen(false)
  };
  React.useEffect(() => {
    if(props.isOpenModal) {
      handleOpen()
    }
    if(!props.isOpenModal) {
      setOpen(false)
    }
  }, [props.isOpenModal])

  return (
    <div>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <StyledBox>
          {props.children}
        </StyledBox>
      </Modal>
    </div>
  );
}