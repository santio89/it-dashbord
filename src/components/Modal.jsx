import { useEffect, useState, useRef } from 'react'
import { useSelector, useDispatch } from "react-redux";
import { setModal } from '../store/slices/modalSlice';

export default function Modal() {
  const dispatch = useDispatch()
  const modal = useRef()
  const modalActive = useSelector(state => state.modal.active)
  const modalData = useSelector(state => state.modal.data)

  const [newUserName, setNewUserName] = useState("")
  const [newUserArea, setNewUserArea] = useState("")
  const [newUserComment, setNewUserComment] = useState("")
  const [newUserIntern, setNewUserIntern] = useState("")
  const [newDeviceName, setNewDeviceName] = useState("")
  const [newDeviceArea, setNewDeviceArea] = useState("")
  const [newDeviceComment, setNewDeviceComment] = useState("")

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
      setNewUserName("")
      setNewUserArea("")
      setNewUserComment("")
      setNewDeviceName("")
      setNewDeviceArea("")
      setNewDeviceComment("")
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
          {!modalData?.newUser && !modalData?.newDevice &&
            <>
              {
                Object.entries(modalData).map(([key, value]) => {
                  return <p key={key}>{key}: {value}</p>
                })
              }
              <button className='mainModal__edit'>Edit</button>
            </>}

          {modalData?.newUser &&
            <form className='mainModal__data__inputs' onSubmit={() => dispatch(setModal({ active: false, data: {} }))}>
              <h2>ADD USER</h2>
              <input type="text" placeholder='Username' value={newUserName} onChange={e => setNewUserName(e.target.value)} />
              <input type="text" placeholder='Area' value={newUserArea} onChange={e => setNewUserArea(e.target.value)} />
              <input type="text" placeholder='Intern' value={newUserIntern} onChange={e => setNewUserIntern(e.target.value)} />
              <textarea rows="2" placeholder='Comment' value={newUserComment} onChange={e => setNewUserComment(e.target.value)} />
              <button className='mainModal__send'>Send</button>
            </form>
          }

          {modalData?.newDevice &&
            <form className='mainModal__data__inputs' onSubmit={() => dispatch(setModal({ active: false, data: {} }))}>
              <h2>ADD DEVICE</h2>
              <input type="text" placeholder='Username' value={newDeviceName} onChange={e => setNewDeviceName(e.target.value)} />
              <input type="text" placeholder='Area' value={newDeviceArea} onChange={e => setNewDeviceArea(e.target.value)} />
              <textarea rows="2" placeholder='Comment' value={newDeviceComment} onChange={e => setNewDeviceComment(e.target.value)} />
              <button className='mainModal__send'>Send</button>
            </form>
          }
        </div>

        <button className='mainModal__close' onClick={() => dispatch(setModal({ active: false, data: {} }))}>Close</button>
      </div>
    </dialog >
  )
}
