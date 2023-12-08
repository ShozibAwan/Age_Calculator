import React, {useState} from 'react'

function AgeCal(){
    const [birthdate, setBirthdate] = useState('');
    const [age, setAge] = useState({ years: 0, months: 0, days: 0 });
  
    const calculateAge = () => {
      const currentDate = new Date();
      const birthDate = new Date(birthdate);
  
      const ageInMilliseconds = currentDate - birthDate;
      const years = Math.floor(ageInMilliseconds / (365.25 * 24 * 60 * 60 * 1000));
      const months = Math.floor((ageInMilliseconds % (365.25 * 24 * 60 * 60 * 1000)) / (30.44 * 24 * 60 * 60 * 1000));
      const days = Math.floor((ageInMilliseconds % (30.44 * 24 * 60 * 60 * 1000)) / (24 * 60 * 60 * 1000));
  
      setAge({ years, months, days });
    }
  

    return(
        <div className='Main'>
            <img src='/images/flower.png'  className ='leftflower'/>
            <img src='/images/name.png'  className ='name'/>
            <img src='/images/flower.png'  className ='flower'/>
        <div className='containor'>
        <div className='minicontainor'>
            <div className='inputDate'>
                <input type='date' id='date_input' value={birthdate} onChange={(e) => setBirthdate(e.target.value)} />
                <button id='btnCalculate' onClick={calculateAge} >Calculate Age</button>
                </div>
                <div className='show_age'>
                    <div>
                        <span id='years'>{age.years}</span>
                        <p>Years</p>
                    </div>
                    <div>
                        <span id='months'>{age.months}</span>
                        <p>Months</p>
                    </div>
                    <div>
                        <span id='days'>{age.days}</span>
                        <p>Days</p>
                    </div>
                    </div>    
            </div>
         </div>
        </div>
    );
}
export default AgeCal