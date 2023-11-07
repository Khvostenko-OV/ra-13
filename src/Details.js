import { useState, useEffect } from 'react';
import getInfo from './GetInfo';

export default function Details(props) {
  const [state, setState] = useState({user: undefined});

  useEffect(() => {
      getInfo(`${process.env.REACT_APP_BASE_URL}${props.info.id}.json`, 'user', setState);
  }, [props.info]);

  if (state.user) {
    return (
      <div className='user-details'>
        <img src={state.user.avatar} alt={state.user.name}/>
        <div className='user-detail'><h2>{state.user.name}</h2></div>
        <div className='user-detail'>City: {state.user.details.city}</div>
        <div className='user-detail'>Company: {state.user.details.company}</div>
        <div className='user-detail'>Position: {state.user.details.position}</div>
      </div>
    )
  } else {
    return (
      <div className='user-details'>
        {props.info.name} loading...
      </div>
    )
  }
}
