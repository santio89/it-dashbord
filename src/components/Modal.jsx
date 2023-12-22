import { useEffect, useRef } from 'react'
import { useSelector, useDispatch } from "react-redux";
import { setModal } from '../store/slices/modalSlice';

export default function Modal() {
  const dispatch = useDispatch()
  const modal = useRef()
  const modalActive = useSelector(state => state.modal.active)
  const modalData = useSelector(state => state.modal.data)

  useEffect(() => {
    const closeModalClick = (e) => {
      if (e.target === modal.current) {
        dispatch(setModal({ active: false, data: {} }))
      }
    }

    const closeModalEsc = (e) => {
      if (e.key === "Escape") {
        e.preventDefault()
        dispatch(setModal({ active: false, data: {} }))
      }
    }

    if (modalActive) {
      document.addEventListener("click", closeModalClick)
      document.addEventListener("keydown", closeModalEsc)

      try {
        document.startViewTransition(() => {
          modal.current.showModal()
          modal.current.scrollTop = 0;
        });
      } catch {
        modal.current.showModal()
        modal.current.scrollTop = 0;
      }
    } else {
      modal.current.close()
      /* try {
        document.startViewTransition(() => {
          modal.current.close()
        });
      } catch {
        modal.current.close()
      } */
    }

    return () => {
      document.removeEventListener("click", closeModalClick);
      document.removeEventListener("keydown", closeModalEsc);
    }
  }, [modalActive])


  return (
    <dialog className='mainModalWrapper' ref={modal}>
      <div className="mainModal">
        <div className="mainModal__data">
          {modalData?.username}
        </div>

        <button className='mainModal__close' onClick={() => dispatch(setModal({ active: false, data: {} }))}>Close</button>
      </div>
    </dialog>
  )
}
