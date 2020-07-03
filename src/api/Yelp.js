import axios from 'axios';

export default axios.create({
    baseURL: 'https://api.yelp.com/v3/businesses',
    headers:{
        Authorization:'Bearer 5QQATwoT2tXiMST3z745QxuQCwTH6s5QQ4yEuf4-fDtTCSSSCdDa11gPEFQdcmO2ACOl-OF1JL3WgiiOSq-peTAC496rZ3bGqM-x1TxImbzM4XyjjA95woXsREP9XnYx'
    }
});

