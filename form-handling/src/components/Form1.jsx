import { useState } from 'react'
import './form1.css'
const Form1 = () => {

    const [formData, setFormData] = useState({
        username: "",
        bio: "",
        country: "",
        gender: "",
        skills: [],
        terms: false
    })


    const handleChange = (e)=>{

        const {name, value, type, checked} = e.target

        if(name=="skills"){
            let copy = {...formData}
            if(checked){
                copy.skills.push(value)
            }
            else{
                copy.skills = copy.skills.filter((item)=> item !=value)
            }

            setFormData(copy)
        }
        else{
                setFormData((prev)=>(
                {
                    ...prev,
                    // [name]: value  // if no checkbox available because checkbox gets value from (e.target.checked) and not from (e.target.value)
                    [name]: type == 'checkbox'  ? checked : value
                }
                ))
        }

    }

    const handleSubmit = (e)=>{
        e.preventDefault();
        console.log('formData', formData);

        setFormData({
            username: "",
            bio: "",
            country: "",
            gender: "",
            skills: [],
            terms: false
        })
    }
    

  return (
    <div className='form1'>

        <h4>Form handling</h4>

        <form action="" onSubmit={handleSubmit}>
            <div>
                <input type="text" name='username' placeholder='username' value={formData.username} onChange={handleChange}/>
            </div>
            <div>
                <textarea name="bio" id="" rows="3" placeholder='write something about u' value={formData.bio} onChange={handleChange} />
            </div>
            <div>
                <select name="country" value={formData.country} onChange={handleChange}>
                    <option hidden>select Country</option>
                    <option value="India">India</option>
                    <option value="Sri Lanka">Sri Lanka</option>
                </select>
            </div>
            <div className='gender'>
                <div>
                    <input type="radio" id='male' name='gender' value='male' onChange={handleChange}  checked={formData.gender == 'male'} />
                    <label htmlFor="male">male</label>
                </div>
                <div>
                    <input type="radio" id='female' name='gender' value='female' onChange={handleChange} checked={formData.gender == 'female'} />
                    <label htmlFor="female">female</label>
                </div> 
            </div>
            <div className='skills'>
                <div className='skills-content'>
                    <input type="checkbox" id='cricket' name='skills' value='html' onChange={handleChange} checked={formData.skills.includes('html')}/>
                    <label htmlFor="cricket">html</label>
                </div>
                <div className='skills-content'>
                    <input type="checkbox" id='css' name='skills' value='css' onChange={handleChange} checked={formData.skills.includes("css")} />
                    <label htmlFor="css">css</label>
                </div>
                <div className='skills-content'>
                    <input type="checkbox" id='js' name='skills' value='js' onChange={handleChange} checked={formData.skills.includes('js')}/>
                    <label htmlFor="js">js</label>
                </div>
            </div>
            <div>
                <input type="checkbox" id='terms' name='terms' value={formData.terms} onChange={handleChange} checked={formData.terms} />
                <label htmlFor="terms">Terms & Conditions</label>
            </div>
            <button type='submit' disabled={formData.terms != true}>Submit</button>
        </form>

        
       
    </div>
  )
}

export default Form1;


/* 

    [
        if we don't use cheked field on radio and checkbox.. then even after submit 
        radio and checked field remain selected

        also set value field on radio and checkbox
    ]



*/