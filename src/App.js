import { useState, useEffect} from 'react';
import './App.css';
import { db } from './firebase'
import { collection, getDocs, addDoc, updateDoc, doc} from 'firebase/firestore'
import { async } from '@firebase/util';

function App1() {
  const [newName, setNewName] = useState("")
  const [newAge, setNewAge] = useState(0)
  const [users, setUsers] =useState([])
  const userCollectionRef = collection(db, "users");
  
  const createUser = async () => {
    console.log("pressed")
    await addDoc(userCollectionRef, {name: newName, age: newAge});


  };

  const updateUser = async (id, age, name) => {
    const userDoc = doc(db, "users",id)
    const newFields = {age: age+1}
    const newField2 ={ name: newName }
    await updateDoc(userDoc, newFields)
    await updateDoc(userDoc, newField2)
  }

  useEffect(() => {
    const getUsers = async () => {
      const data= await getDocs(userCollectionRef);
      
      setUsers(data.docs.map((doc) => ({...doc.data(), id: doc.id})));

    };
    getUsers();
  }, []);

  return (
    <div className="App">
     <h1>HELLO FIREBASE</h1>
     <input type="text" placeholder='Name' onChange={(event) => {setNewName(event.target.value)}}/>
     <input type="number" placeholder='Age' onChange={(event) => {setNewAge(event.target.value)}}/>
    
     <button onClick={createUser}>Create USer</button>
     {users.map((user) => {
       console.log(user.name)
       return (
        <div>
          <h1>{user.name}</h1>
          <h1>{user.age}</h1>
          <button onClick={() => {updateUser(user.id, user.age, user.name)}}>INCREASE AGE</button>
        </div>

       )
     })}
    </div>
  );
}

export default App1;