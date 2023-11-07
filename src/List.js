import { useState, useEffect } from 'react';
import getInfo from './GetInfo';
import Details from './Details';

export default function List() {
  const [state, setState] = useState({users: [], curr: undefined});

  const clickUser = (user) => {
    if (!state.curr || user.id !== state.curr.id) {
      setState(prev => ({...prev, curr: user}));
    }
  }

  const showList = () => {
    return (
      <div className='user-list'>
        {state.users.map(user => 
          <div  key={user.id}
                className={(state.curr && user.id === state.curr.id)? 'user-item select' : 'user-item'}
                onClick={() => clickUser(user)}>
            {user.name}
          </div>
        )}
      </div>
    )    
  }

  useEffect(() => {
      getInfo(process.env.REACT_APP_BASE_URL + 'users.json', 'users', setState);
  }, [state.users]);

  return (
    <div className='body'>
      {state.users.length? showList() : 'Loading...'}

      {state.curr? <Details info={state.curr}/> : null}
    </div>
  )
}
