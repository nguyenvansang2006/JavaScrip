import React, { Component } from 'react'

 class Validation extends Component {
    static nameRegx = /^[A-Za-z\'\s\.\:\-]+$/;
    static emailRegx = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
    static passwordRegx=/^(?=.*[0-9])(?=.*[a-z])(?=.*[A-Z]).{8,20}$/;
}
export default Validation