import React from 'react';
import { useRecoilValue } from 'recoil';
import { STATE_COMPANY, F_CREATE_ASSETS, STATE_HISTORY } from '../stores';
import { useRecoilState } from 'recoil';

function StockForm() {

    let Company = useRecoilValue(STATE_COMPANY);
    const [myHistory, setHistory] = useRecoilState(STATE_HISTORY);

    const [formState, setFormState] = React.useState({
        company: null, amount: "", price: "",
    })

    const stockForm = (type) => {
        let sendData = formState;
        if (formState.company) {
            sendData.order_type = type
            F_CREATE_ASSETS(sendData, (err, data) => {
               setHistory([...myHistory, data])
            })
        }else {
            alert("Harap isi saham yang akan dibeli")
        }
    };

    const handleChange = e => setFormState({...formState, [e.target.name]: e.target.value});
    
    return (
       <div style={{width: '50%'}}>
            <div style={{
                width: '100%',
                display: 'flex',
                justifyContent: 'space-between',
                padding: '10px 20px 20px 20px',
                border: '1px gray solid'
            }}>

                <div style={{flex: 1}}>
                    <label style={{fontWeight: '500', fontSize: '12px'}} htmlFor="amountId">Masukan lembar saham</label>
                    <input name="amount" id="amountId" onChange={handleChange}  />
                </div>

                <div style={{flex: 1}}>
                    <label style={{fontWeight: '500', fontSize: '12px'}} htmlFor="priceId">Masukan harga</label>
                    <input name="price" id="priceId" onChange={handleChange}  /> 
                </div>

                <div style={{flex: 1}}>
                    <label style={{fontWeight: '500', fontSize: '12px'}} htmlFor="priceId">Pilih Saham perusahaan</label>
                    <div>
                        <select onChange={e => setFormState({...formState, company: e.target.value})} style={{width: '100%'}} defaultValue={null} placeholder="Choose" >
                            <option value="">Pilih --</option>
                            {Company.company ? Company.company.map((item, index) => {
                                return (
                                    <option key={index} value={item._id}>{item.name}</option>
                                )
                            }) : ""}
                        </select>
                    </div>
                </div>
            </div>

            <div style={{marginTop: '20px'}}>
                <button onClick={() => stockForm('buy')} type="button" style={{marginRight: '20px', background: 'yellowgreen',color: 'black',fontWeight: 'bold',cursor: 'pointer',width: '15%', height: '25px'}}>Buy</button>
                <button onClick={() => stockForm('sell')} type="button" style={{background: 'red',color: 'yellow',fontWeight: 'bold',cursor: 'pointer',width: '15%', height: '25px'}}>Sell</button>
            </div>

       </div>
    )

};

export default StockForm;