import React, { useContext } from 'react';
import {Button, Select, InputNumber} from 'antd';
import './style.css';
import {multiStepContext} from '../StepContext';
import DataRestaurant from '../data/dishes.json';


const {Option}=Select

function Step3 (){
    const {setStep, data, setData} = useContext(multiStepContext)
    const Data2 = DataRestaurant.dishes
    const handleClick = () => {
        setStep(3) 
    }

    const handleChangeDish = (e) => {
        setData({...data, 'Dish': e })
    }
    const handleChangeNumberDish = (e) =>{
        setData({...data, 'numberDish': e})
    }

    return (
        <div className='body'>
        <div>
            <h4 className='text'>Please Select a Dish</h4>
            <Select
                labelInValue='Dish'
                placeholder='Select a Dish'
                style={{width:400}}
                value={data['Dish']}
                onChange={handleChangeDish}
            >
               {Data2 && Data2.length > 0 &&
                        Data2.map((item, index) =>
                            <Option key={index} value={item.restaurant}>{item.restaurant}</Option>
                        )
                    }
            </Select>
        </div>
        <div>
            <h4 className='text'>Please Enter no of servings</h4>
        </div>
        <div>
            <InputNumber labelInValue='numberDish' value={data['numberDish']} onChange={handleChangeNumberDish} min={1} max={10} ></InputNumber>
        </div>
        <div className='btn'>
                <div className='button1'>
                    <Button onClick={()=> setStep(1)} >Previous</Button>
                </div>
                <div className='button2'>
                    <Button value={data['Dish', 'numberDish']} onClick={(e) => handleClick(e)}  >Next</Button>
                </div>
           </div>
    </div>
    )
}

export default Step3