import {useState} from 'react'

const SingleCheckbox = () => {
    const [isChecked, setIsChecked] = useState(false)
    console.log('isChecked',isChecked)

    const handleChange = ()=>{
        setIsChecked(!isChecked)
    }

    const handleClick = ()=>{
      alert('Hello World!')
      setIsChecked(false)
    }

  return (
    <div className='checkbox-handling'>
        <div className='checkbox'>
            <input type="checkbox" id='check' name='check' value={isChecked} onChange={handleChange} checked={isChecked} />
            <label htmlFor="check">Terms and Condition !</label>
        </div>
        <button disabled={!isChecked} onClick={handleClick}>Accept</button>
    </div>
  )
}

export default SingleCheckbox