import React from 'react';
import Chart from '../components/ApexChart';
import StockForm from '../components/StockForm';
import { F_GET_COMPANY, STATE_COMPANY, F_GET_HISTORY, STATE_HISTORY } from '../stores';
import { useRecoilState, useSetRecoilState, useRecoilValue, } from 'recoil';

function MainPage() {

    const [allCompany, setCompany] = useRecoilState(STATE_COMPANY);
    let setHistory = useSetRecoilState(STATE_HISTORY);

    const getCompany = () => {
        F_GET_COMPANY((err, data) => {
            if (data) setCompany({...allCompany, company: data})
        })
    };

    const getHistory = () => {
        F_GET_HISTORY((err, data) => {
            setHistory(data)
        })
    };

    React.useEffect(getHistory, []);
    React.useEffect(getCompany, []);

    return (
        <div>
            <h1 style={{color: 'firebrick'}}>Assets Index</h1>
            <Chart />
            <hr style={{marginTop: '30px', borderColor: 'yellowgreen'}} />
            <div style={{width: '100%', marginTop: '30px',justifyContent: 'center', alignItems: 'center', display: 'flex'}}>
                <StockForm />
            </div>
        </div>
    )
};

export default MainPage;