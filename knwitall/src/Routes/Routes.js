import React,{Component} from 'react'
import {Switch, Route} from 'react-router-dom'
import MedReport from '../Components/MedReport/MedReport'
import BehReport from '../Components/BehReport/BehReport'
import Chart from '../Components/Chart/Chart'

export default(
<Switch>
    <Route exact path='/' component={MedReport}/>
    <Route path='/behavior' component={BehReport}/>
    <Route path='/chart' component={Chart}/>
</Switch>
)