import React, {
    useState,
    createContext,
    ReactNode,
    useEffect,
    useContext,
  } from 'react';
  import { getData, storeData } from '../../../utils';
  import { AuthContext, UserContext } from '../auth/create.context';
  import { UPDATE_USER_PROFILE } from '../../redux/actions/type';
  import { useDispatch } from 'react-redux';
  export const useUserContext = () => {
    return useContext(UserContext)
  }
  const UserContextProvider = ({ children }) => {
    const { token } = useContext(AuthContext);
    const [message, setMessage] = useState();
    const [load, setLoad] = useState(false);
    const [success, setSuccess] = useState(false);
  
    const [error, setError] = useState(false);
    const [user, setUser] = useState();
    const dispatch = useDispatch();
    const onUpdate = async data => {
      setLoad(true);
      UserService.update(data)
        .then(res => {
          setUser(res.data);
          console.log(res.data);
          // storeData('user', JSON.stringify(user));
          dispatch({
            type: UPDATE_USER_PROFILE,
            payload: res.data,
          });
          setLoad(false);
        })
        .catch(err => {
          setLoad(false);
          setError(true);
          console.log(err);
          setMessage('Mise a jour impossible');
        });
    };
  
    const UpdatePassword = data => {
      setLoad(true);
      UserService.updatePass(data)
        .then(res => {
          console.log(res);
          setUser(res.data);
          storeData('user', JSON.stringify(user));
          setLoad(false);
          setMessage('Compétence ajoutée ');
          setError(false);
        })
        .catch(err => {
          setLoad(false);
          setError(true);
          console.log(err);
          setMessage('Mise a jour impossible');
        });
    };
    const onGet = async () => {
      setLoad(true);
  
      const res = await UserService.getUser(user?.id)
      if (res.status == 201 || res.status == 200) {
  
        setUser(res.data);
        storeData('user', JSON.stringify(user));
        setLoad(false);
      }
      setLoad(false);
      setError(true);
      setMessage('Mise a jour impossible');
    };
    const onAddSkills = async data => {
      setLoad(true);
      Object.assign(data, { userId: user.id })
      UserService.addSkill(data)
        .then(res => {
          setUser(res.data);
          storeData('user', JSON.stringify(user));
          setLoad(false);
          setMessage('Compétence ajoutée ');
          setError(false);
        })
        .catch(err => {
          setLoad(false);
          setError(true);
          setMessage('Mise a jour impossible');
        });
    };
    const onAddExperience = async data => {
      setLoad(true);
      UserService.addExperience(data)
        .then(res => {
          console.log(res);
          setUser(res.data);
          storeData('user', JSON.stringify(user));
          setLoad(false);
          setMessage('Compétence ajoutée ');
          setError(false);
        })
        .catch(err => {
          setLoad(false);
          setError(true);
          setMessage('Mise a jour impossible');
          console.log(err.message);
        });
      setLoad(false);
  
    };
    const onAddTag = async data => {
  
  
    }
  
    const getUserProfil = async () => {
      const user = await getData('user')
      setUser(user)
  
    }
    useEffect(() => {
  
      getUserProfil()
      onGet();
  
    }, []);
  
  
    return (
      <UserContext.Provider
        value={{
          message,
          UpdatePassword,
          onAddExperience,
          onAddSkills,
          error,
          load,
          user,
          onUpdate,
          onGet,
        }}>
        {children}
      </UserContext.Provider>
    );
  };
  export default UserContextProvider;