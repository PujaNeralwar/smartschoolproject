import React from 'react'
import { useState,useRef } from 'react';
import "../dashboard/Dashboard.css";
const AdmissionForm = () => {
  const[ formData, setFormData] = useState({
    stdname :"default",
    email:"default@gmail.com",
    address:"default",
    contactnumber:"",
    dateofbirth:"",
    occupation:"",
    gender:"male",
    mothertounge:["Marathi"],
    gradeapplyingfor:"default",
});

const onChangeHandler=(event)=>{
    console.log(event);


    if(event.target.name==='mothertounge'){
         let copy = {...formData}

        if(event.target.checked){
            copy.mothertounge.push(event.target.value);

        } else{
            copy.mothertounge = copy.mothertounge.filter(el=>el !== event.target.value)

        }
        setFormData(copy);

    } else{

        setFormData(()=>({
            ...formData,
            [event.target.name]: event.target.value,
        }))

    }
    
}

const onSubmitHandler=(event)=>{
    event.preventDefault();
    console.table(formData);
}

/****for upload image */
const [image, setImage] = useState(null);
const hiddenFileInput = useRef(null);

const handleImageChange = (event) => {
  const file = event.target.files[0];
  const imgname = event.target.files[0].name;
  const reader = new FileReader();
  reader.readAsDataURL(file);
  reader.onloadend = () => {
    const img = new Image();
    img.src = reader.result;
    img.onload = () => {
      const canvas = document.createElement("canvas");
      const maxSize = Math.max(img.width, img.height);
      canvas.width = maxSize;
      canvas.height = maxSize;
      const ctx = canvas.getContext("2d");
      ctx.drawImage(
        img,
        (maxSize - img.width) / 2,
        (maxSize - img.height) / 2
      );
      canvas.toBlob(
        (blob) => {
          const file = new File([blob], imgname, {
            type: "image/png",
            lastModified: Date.now(),
          });

          console.log(file);
          setImage(file);
        },
        "image/jpeg",
        0.8
      );
    };
  };
};

const handleUploadButtonClick = (file) => {
  var myHeaders = new Headers();
  const token = "adhgsdaksdhk938742937423";
  myHeaders.append("Authorization", `Bearer ${token}`);

  var formdata = new FormData();
  formdata.append("file", file);

  var requestOptions = {
    method: "POST",
    headers: myHeaders,
    body: formdata,
    redirect: "follow",
  };

  fetch("https://trickuweb.com/upload/profile_pic", requestOptions)
    .then((response) => response.text())
    .then((result) => {
      console.log(JSON.parse(result));
      const profileurl = JSON.parse(result);
      setImage(profileurl.img_url);
    })
    .catch((error) => console.log("error", error));
};

const handleClick = (event) => {
  hiddenFileInput.current.click();
};


  return (
    <>
      <div className='dashmain1'>
      
           <div className='admissionhead'>
              <h1>Student Details</h1>
            </div>
    
    <fieldset>
    <form onSubmit={onSubmitHandler}>
    <div className='divAdm'>
      <div className='admfirstdiv'>
        <div className="form-group">
        <lable htmlFor="stdname" className="form-lable">Student Name : </lable>
        <div className='stdnam'>
        <input className="form-control" name="stdlname" onChange={onChangeHandler} placeholder='Last Name'></input> 
        <input className="form-control" name="stdfname" onChange={onChangeHandler} placeholder='First Name'></input> 
        <input className="form-control" name="stdmname" onChange={onChangeHandler} placeholder='Middle Name'></input> 
        </div>
        </div><br></br>
        <div class="form-group">
              <div className='stdiv1'>
                <label htmlFor="gradeapplyingfor" className="form-lable">Grade Applying For : </label>
                <select id="gradeApplyingFor" name="gradeApplyingFor" onChange={onChangeHandler}  required>
                    <option value="pre-school">Pre-School</option>
                    <option value="grade1">Grade 1</option>
                    <option value="grade2">Grade 2</option>
                    <option value="grade3">Grade 3</option>
                    <option value="grade4">Grade 4</option>
                    <option value="grade5">Grade 5</option>
                    <option value="grade6">Grade 6</option>
                    <option value="grade7">Grade 7</option>
                    <option value="grade8">Grade 8</option>
                    <option value="grade9">Grade 9</option>
                    <option value="grade10">Grade 10</option>

                </select>
                </div>
                <div className='stdiv2'>
                <label htmlFor="gradeapplyingfor" className="form-lable">Curriculum : </label>
                <select id="gradeApplyingFor" name="gradeApplyingFor" onChange={onChangeHandler}  required>
                    <option value="pre-school">--Select Curriculum--</option>
                    <option value="grade1">CBSE</option>
                    <option value="grade2">STATE</option>
                    <option value="grade3">IB</option>
                </select>
                </div>

            </div><br></br>
            <div class="form-group">
                <div className='stdiv1'>
                <label htmlFor="gradeapplyingfor" className="form-lable">Select Session : </label>
                <select id="gradeApplyingFor" name="gradeApplyingFor" onChange={onChangeHandler}  required>
                    <option value="pre-school">--Select Year--</option>
                    <option value="grade1">2020-2021</option>
                    <option value="grade2">2021-2022</option>
                    <option value="grade3">2022-2023</option>
                    <option value="grade4">2023-2024</option>
                    <option value="grade5">2024-2025</option>
                </select>
                </div>
                <div className='stdiv2'> 
                <label htmlFor="dateofbirth">Date of Birth:</label>
                <input type="date" className='form-control' id="dateOfBirth" name="dateofbirth" onChange={onChangeHandler} value={formData.dateofbirth} required/>
                </div>

            </div><br></br>

            <div className="form-group"> 
            <div className='stdiv1'>
                <lable htmlFor="gender" className="form-lable">Gender : </lable>
               <div className='stdrd'>
            
                <input type="radio" name="gender" value="male" onChange={onChangeHandler} checked={formData.gender==="male"}/>
                <lable htmlFor="male">Male</lable>
            
            
                <input type="radio" name="gender" value="female" onChange={onChangeHandler} checked={formData.gender==="female"}/>
                <lable htmlFor="female">Female</lable>
            
            
                <input type="radio" name="gender" value="other" onChange={onChangeHandler} checked={formData.gender==="other"}/>
                <lable htmlFor="other">Other</lable>
            
               </div>
           </div>
           <div className='stdiv2'>
                <label htmlFor="gradeapplyingfor" className="form-lable">Blood Group : </label>
                <select id="gradeApplyingFor" name="gradeApplyingFor" onChange={onChangeHandler}  required>
                    <option value="pre-school">--Select Blood Group--</option>
                    <option value="grade1">O+</option>
                    <option value="grade2">A+</option>
                    <option value="grade3">A-</option>
                    <option value="grade4">B+</option>
                    <option value="grade5">B-</option>
                    <option value="grade6">AB+</option>
                    <option value="grade7">AB-</option>
                </select>
            </div>
       </div><br></br>
       
       <div className="form-group">
       <div className='stdiv1'>
        <label> Mother Tongue :</label>
        <input type='text' placeholder='Enter Mother Tongue' className='form-control'></input>
       </div>
        <lable htmlFor="email" className="form-lable">Email ID : </lable>
        <input className="form-control" name="email" onChange={onChangeHandler} value={formData.email}></input>
       </div><br></br>
       <div className="form-group">
       <div className='stdiv1'>
       <label htmlFor="contactnumber">Contact Number : </label>
                <input type="tel" id="contactnumber" name="contactnumber" onChange={onChangeHandler}  required pattern="[0-9]{10}"/>
       </div>
       <div className='stdiv2'>
        <label>Nationality :</label>
        <select id="gradeApplyingFor" name="gradeApplyingFor" onChange={onChangeHandler}  required>
                    <option value="pre-school">--Select--</option>
                    <option value="grade1">Indian</option>
                    <option value="grade2">Arebian</option>
                    <option value="grade3"></option>
                    <option value="grade4"></option>
                    <option value="grade5"></option>
                    <option value="grade6"></option>
                    <option value="grade7"></option>
                </select>
        
       </div>
        
       </div><br></br>
       <div className="form-group">
       <div className='stdiv1'>
       <label>Category :</label>
        <select id="gradeApplyingFor" name="gradeApplyingFor" onChange={onChangeHandler}  required>
                    <option value="pre-school">--Select--</option>
                    <option value="grade1">OBC</option>
                    <option value="grade2">OPEN</option>
                    <option value="grade3">ST</option>
                    <option value="grade4">NT</option>
                    <option value="grade5">SBC</option>
                    <option value="grade6">OTHER</option>
                    <option value="grade7"></option>
                </select>
       </div>
       <div className='stdiv2'>
        <label>Caste :</label>
        <select id="gradeApplyingFor" name="gradeApplyingFor" onChange={onChangeHandler}  required>
                    <option value="pre-school">--Select--</option>
                    <option value="grade1">Kalar</option>
                    <option value="grade2">Kunbi</option>
                    <option value="grade3">Dhangar</option>
                    <option value="grade4">Maratha</option>
                    <option value="grade5">Brahmin</option>
                    <option value="grade6"></option>
                    <option value="grade7"></option>
                </select>
        
       </div>
        
       </div><br></br>

       <div class="form-group">
           <div className='stdiv1'>
                <label htmlFor="address">Residencial Address : </label>
                <textarea  className="form-control"id="address" name="address" rows="4" onChange={onChangeHandler} value={formData.address} required></textarea>
            </div>
            <div className='stdiv2'>
                <label htmlFor="address">Permant Address : </label>
                <textarea  className="form-control"id="address" name="address" rows="4" onChange={onChangeHandler} value={formData.address} required></textarea>
            </div>
           
            </div><br></br>

            <div class="form-group">
                        </div><br></br>
      
            </div>

       {/* upload image */}
       <div className='admseconddiv'>
            <div className="image-upload-container">
         <div className="box-decoration">
        <label htmlFor="image-upload-input" className="image-upload-label">
          {image ? image.name : "Choose an image"}
        </label>
        <div onClick={handleClick} style={{ cursor: "pointer" }}>
          {image ? (
            <img src={URL.createObjectURL(image)} alt="upload image" className="img-display-after" />
          ) : (
            <img src="./photos.png" alt="upload image" className="img-display-before" />
            
          )}
         

          <input
            id="image-upload-input"
            type="file"
            onChange={handleImageChange}
            ref={hiddenFileInput}
            style={{ display: "none" }}
          />
        </div>

        
        <button
          className="image-upload-button"
          onClick={handleUploadButtonClick}
        >
          Upload








        </button>
      </div>
     </div>

     </div>
    

      </div> 
        <button type='submit' className='stdbutton'> SAVE & NEXT</button>   

    </form>

    </fieldset>

        
    


      </div>
    
    </>
  )
}

export default AdmissionForm;