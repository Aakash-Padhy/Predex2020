import React, { Component }  from "react";
import {useState} from 'react';
import { render } from "react-dom";
import {predict} from '../../redux/actions/authAction';
import {connect} from 'react-redux';
import { FormControl, FormGroup, FormLabel, Grid} from "material-ui";

import {useDispatch,useSelector} from 'react-redux';
import axios from 'axios';
import Draggable from 'react-draggable';
import {Modal,Progress} from 'antd';
import './Predict.css';
import LoginNav from '../LoginNav/LoginNav'
import MultiChipSelect from "./MultiChipSelect";
import pred from './pred.png';
import Button from '@material-ui/core/Button';
import { withStyles, makeStyles } from '@material-ui/core/styles';

const symptoms=['itching',
'skin rash',
'nodal skin eruptions',
'continuous sneezing',
'shivering',
'chills',
'joint pain',
'stomach pain',
'acidity',
'ulcers on tongue',
'muscle wasting',
'vomiting',
'burning micturition',
'spotting  urination',
'fatigue',
'weight gain',
'anxiety',
'cold hands and feets',
'mood swings',
'weight loss',
'restlessness',
'lethargy',
'patches in throat',
'irregular sugar level',
'cough',
'high fever',
'sunken eyes',
'breathlessness',
'sweating',
'dehydration',
'indigestion',
'headache',
'yellowish skin',
'dark urine',
'nausea',
'loss of appetite',
'pain behind the eyes',
'back pain',
'constipation',
'abdominal pain',
'diarrhoea',
'mild fever',
'yellow urine',
'yellowing of eyes',
'acute liver failure',
'fluid overload',
'swelling of stomach',
'swelled lymph nodes',
'malaise',
'blurred and distorted vision',
'phlegm',
'throat irritation',
'redness of eyes',
'sinus pressure',
'runny nose',
'congestion',
'chest pain',
'weakness in limbs',
'fast heart rate',
'pain during bowel movements',
'pain in anal region',
'bloody stool',
'irritation in anus',
'neck pain',
'dizziness',
'cramps',
'bruising',
'obesity',
'swollen legs',
'swollen blood vessels',
'puffy face and eyes',
'enlarged thyroid',
'brittle nails',
'swollen extremeties',
'excessive hunger',
'extra marital contacts',
'drying and tingling lips',
'slurred speech',
'knee pain',
'hip joint pain',
'muscle weakness',
'stiff neck',
'swelling joints',
'movement stiffness',
'spinning movements',
'loss of balance',
'unsteadiness',
'weakness of one body side',
'loss of smell',
'bladder discomfort',
'foul smell of urine',
'continuous feel of urine',
'passage of gases',
'internal itching',
'toxic look (typhos)',
'depression',
'irritability',
'muscle pain',
'altered sensorium',
'red spots over body',
'belly pain',
'abnormal menstruation',
'dischromic  patches',
'watering from eyes',
'increased appetite',
'polyuria',
'family history',
'mucoid sputum',
'rusty sputum',
'lack of concentration',
'visual disturbances',
'receiving blood transfusion',
'receiving unsterile injections',
'coma',
'stomach bleeding',
'distention of abdomen',
'history of alcohol consumption',
'fluid overload.1',
'blood in sputum',
'prominent veins on calf',
'palpitations',
'painful walking',
'pus filled pimples',
'blackheads',
'scurring',
'skin peeling',
'silver like dusting',
'small dents in nails',
'inflammatory nails',
'blister',
'red sore around nose',
'yellow crust ooze'
];

function Predict () {
console.log("rerender");
let allItems = symptoms.map(s => ({ name: s, id: s.toLowerCase() }));
let [items,setItem]=useState(allItems);
let [selectedItem,setSelectedItem]=useState([]);
let [inputValue,setInputValue]=useState('');
let [visible, setVisible]=useState(false);
let [disabled, setDisabled]=useState(true);
let [modf,setModf]=useState((""));
let [mods,setMods]=useState((""));
let [modt,setModt]=useState((""));
let[perf,setPerf]=useState(0);
let[pers,setPers]=useState(0);
let[pert,setPert]=useState(0);

const showModal=(e)=>{
  // state.visible = true;
  setVisible(true);
  
};
const handleok = (e) =>{
  // state.visible = false;
  setVisible(false);
};
const handlecancel = (e) =>{
  // state.visible = false;
  setVisible(false)
};
const handleChange = selected => {
    if (selectedItem.includes(selected)) {
      removeSelectedItem(selected);
    } else {
      addSelectedItem(selected);
    }
  };

  const addSelectedItem=item=> {
    /*this.setState(({ selectedItem,items}) => ({
      inputValue: "",
      selectedItem: [...selectedItem, item],
      items: items.filter(i => i.name !== item)
    }));*/
    setInputValue("");
    setSelectedItem([...selectedItem, item]);
    setItem(items.filter(i => i.name !== item));
  };

  const removeSelectedItem = item => {
    /*this.setState(({ selectedItem, items }) => ({
      inputValue: "",
      selectedItem: selectedItem.filter(i => i !== item),
      items: [...items, { name: item, id: item.toLowerCase() }]
    }));*/
    setInputValue("");
    setSelectedItem(selectedItem.filter(i => i !== item));
    setItem([...items, { name: item, id: item.toLowerCase() }]);
  };

  const handleChangeInput = inputVal => {
    const t = inputVal.split(",");
    if (JSON.stringify(t) !== JSON.stringify(selectedItem)) {
      //this.setState({ inputValue: inputVal });
      setInputValue(inputVal);
    };
  };
  const dispatch = useDispatch();
  const  test=(event) => {
      event.preventDefault();
      showModal();
      var x=selectedItem.join(",");
      const output={'key':x};
      const config = {
        headers:{
            "Content-Type" : "application/json",
            'Access-Control-Allow-Origin':"true",
        }
    }

    const body = JSON.stringify(output)

    axios.post('http://127.0.0.1:5000/predict',body,config)
        .then(res => {
          //console.log(res.data)
          var maxlen=Math.max(res.data[0][0].length,res.data[1][0].length,res.data[2][0].length)
          setModf(res.data[0][0].padEnd(maxlen," ") + "        ")
          setMods(res.data[1][0].padEnd(maxlen," ") + "        ")
          setModt(res.data[2][0].padEnd(maxlen," ") + "        ")
          setSelectedItem([])
          setPerf(res.data[0][1].toFixed(2))
          setPers(res.data[1][1].toFixed(2))
          setPert(res.data[2][1].toFixed(2))
            //dispatch(predictSuccess(res.data))
        })
        .catch(err=>{
            //dispatch(returnErrors(err.response.data,err.response.status,'LOGIN_FAIL'))
            //dispatch(loginFail())
        })
      //dispatch(predict(output));
      };   
      const StyledButton1 = withStyles({
  root: {
    background: 'linear-gradient(45deg, #070F83 30%, #21CBF3 90%)',
    borderRadius: 15,
    border: 0,
    color: 'white',
    height: 48,
    padding: '0 30px',
    boxShadow: '0 3px 5px 2px rgba(255, 105, 135, .3)',
    marginTop: 20
  },
  label: {
    textTransform: 'capitalize',
  },
})(Button);

    return (
      <>
      <div class='logo'>
      <LoginNav/>
      <Modal
          title={
            <div
              style={{
                width: '100%',
                cursor: 'move',
              }}
              onMouseOver={() => {
                if (disabled){
                  setDisabled(false);
                }
                // if (state.disabled) {
                //   state.disabled = false;
                // }
              }}
              onMouseOut={() => {
                // state.disabled = false;
                setDisabled(false);
              }}
              // fix eslintjsx-a11y/mouse-events-have-key-events
              // https://github.com/jsx-eslint/eslint-plugin-jsx-a11y/blob/master/docs/rules/mouse-events-have-key-events.md
              onFocus={() => {}}
              onBlur={() => {}}
              // end
            >
              Disease Predicted
            </div>
          }
          visible={visible}
          onOk={handleok}
          onCancel={handlecancel}
          modalRender={modal => <Draggable disabled={disabled}>{modal}</Draggable>}
        >
        <div>
          <pre>
            {modf}
            <Progress percent={perf} steps={10} />
            <br/>
            {mods}
            <Progress percent={pers} steps={10} />      
            <br/>
            {modt}
            <Progress percent={pert} steps={10} />       
            <br/>
          </pre>
          </div>
          <br />
          <p>To see the doctors available <a href="./doctor">Click Here</a></p>
        </Modal>
      <div className="container-fluid nav_bg mt-5 pt-5">
            <div className="row">
                <div className='col-10 mx-auto'>
      <FormGroup>
        <FormControl>
          <FormLabel>
          <h3 className="text-center"><b>Tell us what you feel,<br />We tell you what it is !</b></h3>
          </FormLabel>
          
          <MultiChipSelect
            onInputValueChange={handleChangeInput}
            inputValue={inputValue}
            availableItems={items}
            selectedItem={selectedItem}
            onChange={handleChange}
            onRemoveItem={removeSelectedItem}
          />
        
        </FormControl>
        <div id="button">
        <Grid container direction="columns" justify="center" alignItems="center"  >
              <StyledButton1 onClick={test}>
              PREDICT
              </StyledButton1>
        </Grid>
        </div>
      </FormGroup>
        </div>
        </div>
        </div>
        <img src={pred} className="img-fluid animatedz" alt="alternate"/>
        </div>
      </>
    );
  }

export default Predict;