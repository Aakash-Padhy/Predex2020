import React from 'react';
import {useState} from 'react';
import { Select, Space } from 'antd';
import { Row, Col } from 'antd';
import { Input,Modal} from 'antd';
import {useDispatch,useSelector} from 'react-redux';
import axios from 'axios';
import './Cost.css';
import LoginNav from '../LoginNav/LoginNav'
import Button from '@material-ui/core/Button';
import { withStyles, makeStyles } from '@material-ui/core/styles';

const { Option } = Select;

const StyledButton1 = withStyles({
  root: {
    background: 'linear-gradient(45deg, #2e2f33 50%, #a5a7b1 99%)',
    borderRadius: 15,
    border: 0,
    color: 'white',
    height: 48,
    padding: '0 30px',
    boxShadow: '0 3px 5px 2px rgba(255, 105, 135, .3)',
    marginTop: 20,
  },
  label: {
    textTransform: 'capitalize',
  },
})(Button);

function Cost() {

  var ans={}

//let [User,setUser]=useState("")
//let [email,setEmail]=useState("")
let [age,setAge]=useState("1")
let [MARRY31X,setMARRY31X]=useState("5")
let [RTHLTH31,setRTHL31]=useState("2")
let [MNHLTH31,setMNHLTH31]=useState("3")
let [HIBPDX,setHIBPDX]=useState("2")
let [MIDX,setMIDX]=useState("2")
let [STRKDX,setSTRKDX]=useState("2")
let [CHOLDX,setCHOLDX]=useState("2")
let [CANCERDX,setCANCERDX]=useState("2")
let [DIABDX,setDIABDX]=useState("2")
let [ARTHDX,setARTHDX]=useState("2")
let [ASTHDX,setASTHDX]=useState("2")
let [ADHDADDX,setADHDADDX]=useState("2")
let [PREGNT31,setPREGNT31]=useState("-1")
let [WLKLIM31,setWLKLIM31]=useState("2")
let [SOCLIM31,setSOCLIM31]=useState("2")
let [ADSMOK42,setADSMOK42]=useState("2")
let [DFSEE42,setDFSEE42]=useState("-1")
let [EMPST31,setEMPST31]=useState("-1")
let [INSCOV15,setINSCOV15]=useState("2")
let [POVCAT15,setPOVCAT15]=useState("4")
let [RACE3,setRACE3]=useState("0")
let [GENDER,setGENDER]=useState("1")
let [income,setIncome]=useState("0")
let [feeling,setFeeling]=useState("-1")

var x=[1,0,5,1,2,3,2,2,2,2,2,2,2,2,-1,2,2,2,2,2,2,1,0,1,5]

function info(value) {
  Modal.info({
    title: 'Predx Expenditure Calculator',
    content: (
      <div>
        <p>Your estimated expenditure will be  {value}$ </p>
      </div>
    ),
    onOk() {},
  });
}

function Feeling(event){
setFeeling(event.target.value)
}

function Martial(value){
  setMARRY31X(value)
}

function Physical(value){
  setRTHL31(value)
}

function Mental(value){
  setMNHLTH31(value)
}

function Bp(value){
  setHIBPDX(value)
}

function Heart(value){
  setMIDX(value)
}

function Stroke(value){
  setSTRKDX(value)
}

function Cholestrol(value){
  setCHOLDX(value)
}

function Cancer(value){
  setCANCERDX(value)
}

function Diabetes(value){
  setDIABDX(value)
}

function Arthritis(value){
  setARTHDX(value)
}

function Asthma(value){
  setASTHDX(value)
}

function Adhd(value){
  setADHDADDX(value)
}

function Pl(value){
  setWLKLIM31(value)
}

function Sl(value){
  setSOCLIM31(value)
}

function Smoking(value){
  setADSMOK42(value)
}

function Eye(value){
  setEMPST31(value)
}

function Employment(value){
  setEMPST31(value)
}

function Insurance(value){
  setINSCOV15(value)
}

function Family(value){
  setPOVCAT15(value)
}

function Gender(value){
  setGENDER(value)
}

function Race(value){
  setRACE3(value)
}

function Pregnant(value){
  setPREGNT31(value)
}

function Age(event){
  setAge(event.target.value)
}

function Income(event){
  setIncome(event.target.value)
}

  const dispatch = useDispatch();
  const  Result=(event) => {
      event.preventDefault();
      x[0]=parseInt(age);
      x[1]=parseInt(RACE3);
      x[2]=parseInt(GENDER);
      x[3]=parseInt(MARRY31X);
      x[4]=parseInt(RTHLTH31);
      x[5]=parseInt(MNHLTH31);
      x[6]=parseInt(HIBPDX);
      x[7]=parseInt(MIDX);
      x[8]=parseInt(STRKDX);
      x[9]=parseInt(CHOLDX);
      x[10]=parseInt(CANCERDX);
      x[11]=parseInt(DIABDX);
      x[12]=parseInt(ARTHDX);
      x[13]=parseInt(ASTHDX);
      x[14]=parseInt(ADHDADDX);
      x[15]=parseInt(PREGNT31);
      x[16]=parseInt(WLKLIM31);
      x[17]=parseInt(SOCLIM31);
      x[18]=parseInt(ADSMOK42);
      x[19]=parseInt(feeling);
      x[20]=parseInt(DFSEE42);
      x[21]=parseInt(EMPST31);
      x[22]=parseInt(income);
      x[23]=parseInt(INSCOV15);
      x[24]=parseInt(POVCAT15);
      
     
      //var ans=x.join(",");
      const output={'key':x};
      const config = {
        headers:{
            "Content-Type" : "application/json",
            'Access-Control-Allow-Origin':"true",
        }
    }

    const body = JSON.stringify(output)

    axios.post('http://127.0.0.1:5000/cost',body,config)
        .then(res => {
          info(res.data)
        })
        .catch(err=>{
            //dispatch(returnErrors(err.response.data,err.response.status,'LOGIN_FAIL'))
            //dispatch(loginFail())
        })
      //dispatch(predict(output));
      };   

  return (
    <>
    <div class="logo1">
    <LoginNav/>
    <div className="container-fluid mt-5 ml-5">
            <div className="row">
  <div className="col-10 mx-auto">
    <Row>
      <Col span={24}>
        <h3 className="font-weight-bold">Please enter your details to generate expected expenditure amount :-</h3>

      </Col>
    </Row>
    
    <Row><br/><br/></Row>

    <Row bordered>
      <Col span={8}>
      <Select style={{ width: 240 }} onChange={Insurance} defaultValue="Health Insurance">
        <Option value="-1">Any private Insurance</Option>
        <Option value="1">Public Insurance</Option>
        <Option value="2">Not Insured</Option>
      </Select>

      </Col>
      
      <Col span={8}>
      <Select style={{ width: 240 }} onChange={Physical} defaultValue="Physical Health Status">
        <Option value="-1">Inapplicable</Option>
        <Option value="1">Excellent</Option>
        <Option value="2">Very Good</Option>
        <Option value="3">Good</Option>
        <Option value="4">Fair</Option>
        <Option value="5">Poor</Option>
      </Select>         
      </Col>
      

      <Col span={8}>
      <Select style={{ width: 240 }} onChange={Mental} defaultValue="Mental Health Status">
        <Option value="-1">Inapplicable</Option>
        <Option value="1">Excellent</Option>
        <Option value="2">Very Good</Option>
        <Option value="3">Good</Option>
        <Option value="4">Fair</Option>
        <Option value="5">Poor</Option>
      </Select> 
      </Col>
    

    </Row>

    <Row><br/><br/></Row>


    <Row>
      
      <Col span={8}>
      <Select style={{ width: 240 }} onChange={Bp} defaultValue="High BP">
        <Option value="-1">Inapplicable/Age&lt;=17</Option>
        <Option value="1">YES</Option>
        <Option value="2">NO</Option>
      </Select>
      </Col>
      
      <Col span={8}>
      <Select style={{ width: 240 }} onChange={Heart} defaultValue="Heart Attack Diagnosed">
        <Option value="-1">Inapplicable/Age&lt;=17</Option>
        <Option value="1">YES</Option>
        <Option value="2">NO</Option>
      </Select>
      </Col>
      
      <Col span={8}>
      <Select style={{ width: 240 }} onChange={Stroke} defaultValue="Stroke Diagnosed">
        <Option value="-1">Inapplicable/Age&lt;=17</Option>
        <Option value="1">YES</Option>
        <Option value="2">NO</Option>
      </Select>
      </Col>
    
    </Row>

    <Row><br/><br/></Row>

    <Row>
      
      <Col span={8}>
      <Select style={{ width: 240 }} onChange={Cholestrol} defaultValue="Cholestrol">
        <Option value="-1">Inapplicable/Age&lt;=17</Option>
        <Option value="1">YES</Option>
        <Option value="2">NO</Option>
      </Select>
      </Col>
      
      <Col span={8}>
      <Select style={{ width: 240 }} onChange={Cancer} defaultValue="Cancer">
        <Option value="-1">Inapplicable/Age&lt;=17</Option>
        <Option value="1">YES</Option>
        <Option value="2">NO</Option>
      </Select>
      </Col>
      
      <Col span={8}>
      <Select style={{ width: 240 }} onChange={Diabetes} defaultValue="Diabetes">
        <Option value="-1">Inapplicable/Age&lt;=17</Option>
        <Option value="1">YES</Option>
        <Option value="2">NO</Option>
      </Select>
      </Col>
    
    </Row>

    <Row><br/><br/></Row>

    <Row>
      
      <Col span={8}>
      <Select style={{ width: 240 }} onChange={Arthritis} defaultValue="Arthritis Diagnosed">
        <Option value="-1">Inapplicable/Age&lt;=17</Option>
        <Option value="1">YES</Option>
        <Option value="2">NO</Option>
      </Select>
      </Col>
      
      <Col span={8}>
      <Select style={{ width: 240 }} onChange={Asthma} defaultValue="Asthma Diagnosed">
        <Option value="-1">Inapplicable/Age&lt;=17</Option>
        <Option value="1">YES</Option>
        <Option value="2">NO</Option>
      </Select>
      </Col>
      
      <Col span={8}>
      <Select style={{ width: 240 }} onChange={Adhd} defaultValue="ADHD Diagnosed">
        <Option value="-1">Inapplicable/Age&lt;=17</Option>
        <Option value="1">YES</Option>
        <Option value="2">NO</Option>
      </Select>
      </Col>
    
    </Row>

    <Row><br/><br/></Row>   

    <Row>
      
      <Col span={8}>
      <Select style={{ width: 240 }} onChange={Pl} defaultValue=" Limitation in Physical Activity">
        <Option value="-1">Inapplicable/Age&lt;=17</Option>
        <Option value="1">YES</Option>
        <Option value="2">NO</Option>
      </Select>
      </Col>
      
      <Col span={8}>
      <Select style={{ width: 240 }} onChange={Sl} defaultValue="Social Limitation">
        <Option value="-1">Inapplicable/Age&lt;=17</Option>
        <Option value="1">YES</Option>
        <Option value="2">NO</Option>
      </Select>
      </Col>
      
      <Col span={8}>
      <Select style={{ width: 240 }} onChange={Smoking} defaultValue="Smoking Habits">
        <Option value="-1">Never smoked</Option>
        <Option value="1">Currently Smoking</Option>
        <Option value="2">Currently not Smoking</Option>
      </Select>
      </Col>
    
    </Row>

    <Row><br/><br/></Row> 

    <Row>
      
      <Col span={8}>
      <Select style={{ width: 240 }} onChange={Eye} defaultValue=" Eye Problems">
        <Option value="-1">Inapplicable/Never had any problem</Option>
        <Option value="1">Serious difficulty</Option>
        <Option value="2">Minor problems</Option>
      </Select>
      </Col>
      
      <Col span={8}>
      <Select style={{ width: 240 }} onChange={Employment} defaultValue="Employment Status">
        <Option value="-1">Inapplicable</Option>
        <Option value="1">Yes, currently employed</Option>
        <Option value="2">Unemployed</Option>
      </Select>
      </Col>
      
      <Col span={8}>
      
      <Select style={{ width: 240 }} onChange={Martial} defaultValue="Marital Status" >
        <Option value="1">Married</Option>
        <Option value="2">Widowed</Option>
        <Option value="3">Divorced</Option>
        <Option value="4">Separated</Option>
        <Option value="5">Never Married</Option>
        <Option value="6">Under 16</Option>
        <Option value="7">Inapplicable</Option>
        <Option value="8">Married in Round</Option>
        <Option value="9">Widowed in Round</Option>
        <Option value="10">Divorced in Round</Option>
      </Select>
      </Col>
    
    </Row>

    <Row><br/><br/></Row>   

    <Row>
      
      <Col span={8}>
     <Select style={{ width: 240 }} onChange={Pregnant} defaultValue="Pregnant?">
        <Option value="-1">Inapplicable(If male)</Option>
        <Option value="1">YES</Option>
        <Option value="2">NO</Option>
      </Select>      
      </Col>

      <Col span={8}>
      <Select style={{ width: 240 }} onChange={Family} defaultValue="Family Income">
        <Option value="1">Very Poor/negative</Option>
        <Option value="2">Near Poor</Option>
        <Option value="3">Low Income</Option>
        <Option value="4">Middle Income</Option>
        <Option value="5">High Income</Option>
      </Select> 
      </Col>      
      
      <Col span={8}>
      <Select style={{ width: 240 }} onChange={Race} defaultValue="Race">
        <Option value="0">White/negative</Option>
        <Option value="1">Other</Option>
      </Select>  
      </Col>    
    </Row>

    <Row><br/><br/></Row>
    
    <Row>
      
      <Col span={8}>
      <Select style={{ width: 240 }} onChange={Gender} defaultValue="Gender">
        <Option value="0">Male/negative</Option>
        <Option value="1">Female</Option>
      </Select>        
      </Col>
   
      
      <Col span={8}>
      <Input placeholder="Enter Age"  onChange={Age} style={{width: 240}}/>
      </Col>    
    
      <Col span={8}>
      <Input placeholder="Personal Income"  onChange={Income} style={{width: 240}} />
      </Col>   

    </Row>

    <Row><br/><br/></Row>

        <Row>
      <Col span={8}>
      <Input placeholder="How many days did you feel good among the last 24 days?" style={{width: 608}} onChange={Feeling}/>
      </Col>
      <Col span={8}>        
      </Col>      
      <Col span={8}>
      </Col> 
    

    </Row>

    <Row><br/><br/></Row>

    <Row>

    <Col span={8}>
      
    </Col>
    
    <Col span={8}>
      <Space>
      <StyledButton1 onClick={Result}>Generate Expenditure Estimate</StyledButton1>
      </Space>
    </Col>

    <Col span={8}>
      
    </Col>

    </Row>
    
   <Row><br/><br/></Row>

  </div>
  </div>
  </div>
  </div>
  </>
);
}

export default Cost;