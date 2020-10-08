import React, { useContext } from 'react';
import {Button, Select, InputNumber} from 'antd';
import './style.css';
import {multiStepContext} from '../StepContext';

const {Option}=Select

export default function Step1 () {
    const {setStep, data, setData} = useContext(multiStepContext);
    const handleClick = () => {
        var Data = data
        if(Data.length === 0){
            alert('Bạn cần phải nhập đầy đủ thông tin ')
        }else if(Data.numberPeople === 1){
            alert('số người đặt bàn không đủ ')
        }
        else return setStep(1)
        
    }
    const handleChangeMeal = (e) => {
        setData({...data, 'meal': e })
    }
    const handleChangeNumber = (e) =>{
        setData({...data, 'numberPeople': e})
    }
    return(
        <div className='body'>
            <div>
                <h4 className='text'>Please Select a meal</h4>
                <Select
                    labelInValue='meal'
                    placeholder='Select a meal'
                    style={{width:400}}
                    value={data['meal']}
                    onChange={handleChangeMeal}
                >
                    <Option value='breakfast'>breakfast</Option>
                    <Option value='lunch'>lunch</Option>
                    <Option value='dinner'>dinner</Option>
                </Select>
            </div>
            <div>
                <h4 className='text'>Please Enter Number of people</h4>
            </div>
            <div>
                <InputNumber 
                    labelInValue='numberPeople' 
                    min={1} 
                    max={10} 
                    value={data['numberPeople']}
                    onChange={handleChangeNumber}
                ></InputNumber>
            </div>
            <div className='button'>
                <Button value={data['meal', 'numberPeople']} onClick={(e) => handleClick(e)} >Next</Button>
            </div>
        </div>
    )
}
