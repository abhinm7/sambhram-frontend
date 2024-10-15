import './Registration.css'

const Registration = ()=>{
return(
    <>
    <div className="registration">
        <form action="">
            <div className='details'>
            <input placeholder='Name' type="text" />
            <input placeholder='Phone Number' type="text" />
            <input placeholder='email' type="email" /> 
            <input type="text" placeholder='college name' /> 
            </div>
             
        </form>
    </div>
    </>
)
}

export default Registration