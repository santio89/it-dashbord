import { useDispatch } from "react-redux";
import { setModal } from "../store/slices/modalSlice";
import usersData from '../data/users'

export default function Users() {
  const dispatch = useDispatch()

  return (
    <div className='site-section users'>
      <div className="users__list">
        {/* add user option (for admins) - with modal .  edit/delete user option /for admins) - options in modal*/}
        <button onClick={() => dispatch(setModal({ active: true, data: { newUser: true } }))}>Add user</button>
        <ul>
          {
            usersData.users.map(user =>
              <li key={user.id}><button onClick={() => { dispatch(setModal({ active: true, data: user })) }}>{user.name}</button></li>)
          }
        </ul>
      </div>
      <div className="users__chart">
        CUADRO
      </div>
    </div>
  )
}
