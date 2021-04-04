import { Component, useEffect } from 'react';
import { createPortal } from 'react-dom';
import styles from './Modal.module.css';

const modalRoot = document.querySelector('#modal-root');

class Modal extends Component {
  componentDidMount() {
    console.log('modal did mount');
    window.addEventListener('keydown', this.handleKeyDown);
  }
  componentWillUnmount() {
    console.log('modal will unmount');
    window.removeEventListener('keydown', this.handleKeyDown);
  }

  handleKeyDown = e => {
    if (e.code === 'Escape') {
      this.props.onClose();
    }
  };

  handleBackdropClick = e => {
    if (e.currentTarget === e.target) {
      this.props.onClose();
    }
  };

  render() {
    return createPortal(
      <div
        className={styles.Modal__backdrop}
        onClick={this.handleBackdropClick}
      >
        <div className={styles.Modal__content}>{this.props.children}</div>
      </div>,
      modalRoot,
    );
  }
}

const ModalFunc = ({ onClose, children }) => {
  useEffect(() => {
    window.addEventListener('keydown', handleKeyDown);
    return () => {
      window.removeEventListener('keydown', handleKeyDown);
    };
  });

  const handleKeyDown = e => {
    if (e.code === 'Escape') {
      onClose();
    }
  };

  const handleBackdropClick = e => {
    if (e.currentTarget === e.target) {
      onClose();
    }
  };

  return createPortal(
    <div className={styles.Modal__backdrop} onClick={handleBackdropClick}>
      <div className={styles.Modal__content}>{children}</div>
    </div>,
    modalRoot,
  );
};

export { Modal, ModalFunc };
