// import React from 'react';
// import Logo from '../Assets/Logo.png';
// import './signin.css';
// import { Link } from 'react-router-dom';

// const Left = () => {
//   return (
//     <div className='Left'>
//       <div className='Logo-container'>
//         <img src={Logo} alt="Company Logo" className='logo' />
//         <h1>Your Logo</h1>
//       </div>

//       <div className='form-container'>
//         <h1>Sign into</h1>
//         <h2>Your Account</h2>

//         <div className='Input-container'>
//           <input type='text' placeholder='Company ID' /><br /><br />
//           <input type='password' placeholder='Password' /><br /><br />

//           <label>
//             <input type="checkbox" /> Remember Me
//           </label>
//           <br /><br />

//           <Link to='/dashboard'> <button>Sign in</button> </Link>
           
         
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Left;


// import React, { useState } from 'react';
// import { useNavigate } from 'react-router-dom';
// import Logo from '../Assets/Logo.png';
// import './signin.css';

// const Left = () => {
//   const navigate = useNavigate();
//   const [companyId, setCompanyId] = useState('');
//   const [password, setPassword] = useState('');

//   const handleSignIn = () => {

//     if (companyId && password) {
//       navigate('/dashboard'); 
//     } else {
//       alert('Please enter valid credentials');
//     }
//   };

//   return (
//     <div className='Left'>
//       <div className='Logo-container'>
//         <img src={Logo} alt="Company Logo" className='logo' />
//         <h1>Your Logo</h1>
//       </div>

//       <div className='form-container'>
//         <h1>Sign into</h1>
//         <h2>Your Account</h2>

//         <div className='Input-container'>
//           <input 
//             type='text' 
//             placeholder='Company ID' 
//             value={companyId} 
//             onChange={(e) => setCompanyId(e.target.value)} 
//           /><br /><br />
          
//           <input 
//             type='password' 
//             placeholder='Password' 
//             value={password} 
//             onChange={(e) => setPassword(e.target.value)} 
//           /><br /><br />

//           <label>
//             <input type="checkbox" /> Remember Me
//           </label>
//           <br /><br />

//           <button onClick={handleSignIn}>Sign in</button>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Left;
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Logo from '../Assets/Logo.png';
import './signin.css';

const Left = () => {
  const navigate = useNavigate();

 
  const [formData, setFormData] = useState({
    companyId: '',
    password: '',
  });

  
  const [errors, setErrors] = useState({
    companyId: '',
    password: '',
  });


  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });

   
    setErrors({ ...errors, [name]: '' });
  };

 
  const validateForm = () => {
    let valid = true;
    let newErrors = { companyId: '', password: '' };

    if (!formData.companyId.trim()) {
      newErrors.companyId = 'Company ID is required!';
      valid = false;
    }

    if (!formData.password.trim()) {
      newErrors.password = 'Password is required!';
      valid = false;
    } else if (formData.password.length < 6) {
      newErrors.password = 'Password must be at least 6 characters!';
      valid = false;
    }

    setErrors(newErrors);
    return valid;
  };

 
  const handleSubmit = (e) => {
    e.preventDefault();

    if (validateForm()) {
      navigate('/dashboard'); 
    }
  };

  return (
    <div className='Left'>
      <div className='Logo-container'>
        <img src={Logo} alt="Company Logo" className='logo' />
        <h1>Your Logo</h1>
      </div>

  
      <form className='form-container' onSubmit={handleSubmit}>
        <h1>Sign into</h1>
        <h2>Your Account</h2>

        <div className='Input-container'>
        
          <input
            type='text'
            name='companyId'
            placeholder='Company ID'
            value={formData.companyId}
            onChange={handleChange}
          />
          {errors.companyId && <p className='error-text'>{errors.companyId}</p>}

          <br /><br />
          <input
            type='password'
            name='password'
            placeholder='Password'
            value={formData.password}
            onChange={handleChange}
          />
          {errors.password && <p className='error-text'>{errors.password}</p>}

          <br /><br />
         
          {/* Remember Me Checkbox */} <label>
            <input type="checkbox" /> Remember Me
          </label>
          <br /><br />

          {/* Submit Button */}
          <button type="submit">Sign in</button>
        </div>
      </form>
    </div>
  );
};

export default Left;
