import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { getAllCountries, createActivity, getAllActivities } from "../redux/actions/index";
import './Form.css';

const Form = () => {

    const dispatch = useDispatch();
    const activities = useSelector((state) => state.activities)
    const countries = useSelector((state) => state.countries);
    const navigate = useNavigate();
    const [errors, setErrors] = useState({});
    const [buttonEnabled, setButtonEnabled] = useState(false);
    
    const [input, setInput] = useState({
        name:"",
        difficulty:"",
        duration:"",
        season:"",
        relatedCountries:[]
    });

    function validate (input) {
        let errors = {};
        
        if(!input.name) {
            errors.name = "*Activity name required*";
        }

        if (input.name.trim().length < 3 || input.name.trim().length > 15) {
            errors.name = "*Invalid activity name*";
        }

        if(!input.duration) {
            errors.duration = "*Duration time required*";
        }

        if(!input.season) {
            errors.season = "*Please select a season*";
        }

        if(input.relatedCountries.length === 0) {
            errors.relatedCountries = "*Please select a country*";
        }

        if(!input.difficulty) {
            errors.difficulty = "*Please select a difficulty*";
        }

        if (Object.entries(errors).length === 0) {
            setButtonEnabled(true)
        } else {
            setButtonEnabled(false)
        }

        return errors
    }

    function handleChange(e) {
        setInput({
            ...input,
            [e.target.name]: e.target.value
        })
        setErrors(validate({
            ...input,
            [e.target.name]: e.target.value
        }))
    }

    function handleCountrySelect(e) {
        if (input.relatedCountries.includes(e.target.value)) {
            e.target.value = 'default';
            return alert("You've already selected that country")
        } else {
        setInput({
            ...input,
            relatedCountries:[...input.relatedCountries, e.target.value]
        })
        setErrors(validate({
            ...input,
            [e.target.name]: e.target.value
        }))        
        }
        e.target.value = 'default';
    }

    function handleSelect(e){
        setInput({
            ...input,
            [e.target.name]: e.target.value
        })
        setErrors(validate({
            ...input,
            [e.target.name]: e.target.value
        }))
    }

    function handleDelete(e){
        setInput({
            ...input,
            relatedCountries: input.relatedCountries.filter(c => c !== e)
        })
    }

    function handleSubmit(e) {
        e.preventDefault();
        let validateName = activities.find(a => a.name === (input.name))
        if(validateName !== undefined) {
            alert("Activity by that name already exists!")
        } else {
            dispatch(createActivity(input))
            alert("Activity created!!")
            setInput({
                name:"",
                difficulty:"",
                duration:"",
                season:"",
                relatedCountries:[]
            })
            navigate('/home')            
        }        
    }

    useEffect(() => {
        dispatch(getAllCountries());
        dispatch(getAllActivities())
        }, [dispatch]);

  return (
    <div className='form' onSubmit = {e => handleSubmit(e)}>

        <form>

            <label>Activity </label>
                <input
                type = "text"
                value = {input.name}
                name = "name"
                placeholder="Enter the activity's name"
                onChange = {handleChange}
                />
                {errors.name && (
                    <p className = "error-message">{errors.name}</p>
                )} 

            <label>Difficulty </label>
                <select defaultValue = {'default'} name = "difficulty" onChange = {e => handleSelect(e)}>
                    <option value ='default' disabled>Select the activity's difficulty</option>
                    <option value ="1">1</option>
                    <option value ="2">2</option>
                    <option value ="3">3</option>
                    <option value ="4">4</option>
                    <option value ="5">5</option>
                </select> 
                {errors.difficulty && (
                    <p className = "error-message">{errors.difficulty}</p>
                )}

            <label>Duration </label>
                <input
                type = "text"
                value = {input.duration}
                name = "duration"
                placeholder="Enter the activity's duration"
                onChange = {handleChange}
                />
                {errors.duration && (
                    <p className = "error-message">{errors.duration}</p>
                )} 

            <label>Season </label>
                <select defaultValue = {'default'} name = "season" onChange = {e => handleSelect(e)}>
                    <option value='default' disabled>Select the season's activity</option>                            
                    <option value="Autumn">Autumn</option>
                    <option value="Spring">Spring</option>
                    <option value="Summer">Summer</option>
                    <option value="Winter">Winter</option>
                </select>   
            {errors.season && (
                    <p className = "error-message">{errors.season}</p>
                )}
            <label>Countries where the activity is done</label>
                <select defaultValue = {'default'} name = "relatedCountries" onChange = {e => handleCountrySelect(e)}>
                    <option value = 'default' disabled>Select one or more countries</option>
                        {countries.map(c => (
                            <option key = {c.name} value = {c.name}>{c.name}</option>
                        ))}                    
                </select>
                    {errors.relatedCountries && (
                            <p className = "error-message">{errors.relatedCountries}</p>
                        )}
            <div className="related-container">
                {input.relatedCountries.map(c =>
                    <div key = {c}>
                        <p>{c}</p>
                        <button onClick = {() => handleDelete(c)}>X</button>
                    </div>
                )}         
            </div>            
            {!buttonEnabled ? '' : 
            <button className='btn'>Create!</button>}            
        </form>
    </div>
  )
}

export default Form