import { Modal, CircularProgress } from '@mui/material'

interface ILoadingModalProps {
   open: boolean
}

const LoadingModal: React.FC<ILoadingModalProps> = ({ open }) => {
   return (
      <>
         <Modal
            open={open}
            disableAutoFocus
            aria-labelledby="loading-modal-title"
            aria-describedby="loading-modal-description"
            sx={{
               display: 'flex',
               justifyContent: 'center',
               alignItems: 'center',
            }}
         >
            <CircularProgress />
         </Modal>
      </>
   )
}

export default LoadingModal
