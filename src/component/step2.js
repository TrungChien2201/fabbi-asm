import React, { useContext, useState } from 'react';
import {Button, Select} from 'antd';
import './style.css';
import {multiStepContext} from '../StepContext';
import DataRestaurant from '../data/dishes.json';


const {Option}=Select

function Step2 (){
    const {setStep, data, setData} = useContext(multiStepContext);

    const Data2 = DataRestaurant.dishes
    const handleClick = () => {
        setStep(2) 
    }

    const handleChangRestaurant = (e) => {
        setData({...data, 'Restaurant': e })
        
    }
    

    return (
        <div className='body'>
            <div>
                <h4 className='text'>Please Select a Restaurant</h4>
                 <Select
                            labelInValue='Restaurant'
                            placeholder='Select a Restaurant'
                            style={{width:400}}
                            value={data['Restaurant']}
                            onChange={handleChangRestaurant}
                        >
                    {Data2 && Data2.length > 0 &&
                        Data2.map((item, index) =>
                            <Option key={index} value={item.restaurant}>{item.restaurant}</Option>
                        )
                    }
            </Select>
            </div>
           <div className='btn'>
                <div className='button1'>
                    <Button onClick={()=> setStep(0)} >Previous</Button>
                </div>
                <div className='button2'>
                    <Button value={data['Restaurant']} onClick={(e) => handleClick(e)} >Next</Button>
                </div>
           </div>
        </div>
    )
}

export default Step2