import React from 'react'
import { useState, useEffect } from 'react'
import Table from './Table'

const Form = () => {
    
    const [form,setForm] = useState({
        name:"",
        age:"",
        address:"",
        salary:"",
    })
    const [page, setPage] = useState(1);
    const [save, setSave] = useState([])
    const handleChange =(e) => {
        let {type,name,value,files} =e.target;        
        if(type==="checkbox"){
            setForm({
                ...form,[name]: value,
            });
        }
        else if(type==="file"){
            setForm({
                ...form,[name]: files,
            });
        }
        else{
            setForm({
                ...form,[name]:value
            })
        }
        
    }

    const handleSubmit = async (e) => {
        e.preventDefault();
        let res = await fetch("http://localhost:8080/data", {
            method: "POST",
            headers:{
                "content-type" : "application/json", 
            },
            body: JSON.stringify({
                form,
            })
        })
        let data1=await res.json();
        setSave([...save,data1]);
    }
    useEffect(()=> {
        const data= async () => {
        let res= await fetch(`http://localhost:8080/data?_page=${page}&_limit=5`)
        let info= await res.json();
        setSave(info)
      }
      data();
    },[page])

  return (
    <div>
        <form onSubmit={handleSubmit}>
        <div>
            <div>
                <label htmlFor="">Name</label>
                <input type="text" placeholder='Enter Name' name='name' onChange={handleChange} value={form.name}/>
            </div>
            <div>
                <label htmlFor="">Age</label>
                <input type="number" placeholder='Enter Age' name='age' onChange={handleChange} value={form.age}/>
            </div>
            <div>
                <label htmlFor="">Address</label>
                <input type="text" placeholder='Enter Address' name='address' onChange={handleChange} value={form.address}/>
            </div>
            <div>
                <label>Department</label>
                <select name="department" onChange={handleChange}>
                    <option value=""></option>
                    <option value="IT">IT</option>
                    <option value="HR">HR</option>
                </select>
            </div>
            <div>
                <label htmlFor="">Salary</label>
                <input type="text" placeholder='Enter Salary' name='salary' onChange={handleChange} value={form.salary}/>
            </div>
            <div>
                <label htmlFor="">Marital Status</label><br />
                <input type="checkbox" name='maritalStatus' onChange={handleChange} value="Married"/>Married
                <input type="checkbox" name='maritalStatus' onChange={handleChange} value="Single"/>Single
                <input type="checkbox" name='maritalStatus' onChange={handleChange} value="Divorced"/>Divorced
            </div>
            <div>
                <label htmlFor="">Image</label>
                <input type="file" name="profilePhoto" onChange={handleChange}/>
            </div>
        </div>
        <input type="submit" value="Submit"/>
        </form>
        <Table save={save}/>
        <button disabled={page===1} onClick={() => setPage(page-1)}>{"<"}</button>
        <button onClick={() => setPage(page+1)}>{">"}</button>
    </div>
  )
}

export default Form