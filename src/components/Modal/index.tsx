import { ReactNode, useEffect, useRef, useState } from 'react';
import ReactModal from 'react-modal';

interface ModalProps {
  isOpen: boolean;
  children: ReactNode;
  setIsOpen: () => void;
}

function Modal({ isOpen, children, setIsOpen }: ModalProps) {

  const [modalStatus, setModalStatus] = useState(isOpen);
  // constructor(props) {
  //   super(props);

  //   const { isOpen } = this.props;
  //   this.state = {
  //     modalStatus: isOpen
  //   }
  // }
  const prevIsOpenRef = useRef<boolean>();
  useEffect(() => {
    prevIsOpenRef.current = isOpen;
  })

  const prevIsOpen = prevIsOpenRef.current;

  useEffect(() => {
    if (prevIsOpen !== isOpen) {
      setModalStatus(isOpen)
    }
  }, [isOpen, setModalStatus, prevIsOpen])
  // componentDidUpdate(prevProps) {
  //   const { isOpen } = this.props;

  //   if (prevProps.isOpen !== isOpen) {
  //     console.log(this.props)
  //     this.setState({ modalStatus: isOpen })
  //   }
  // }



  return (
    <ReactModal
      shouldCloseOnOverlayClick={!false}
      onRequestClose={setIsOpen}
      isOpen={modalStatus}
      ariaHideApp={false}
      style={{
        content: {
          top: '50%',
          left: '50%',
          right: 'auto',
          bottom: 'auto',
          marginRight: '-50%',
          transform: 'translate(-50%, -50%)',
          background: '#F0F0F5',
          color: '#000000',
          borderRadius: '8px',
          width: '736px',
          border: 'none',
        },
        overlay: {
          backgroundColor: '#121214e6',
        },
      }}
    >
      {children}
    </ReactModal>
  );
};

export default Modal;
