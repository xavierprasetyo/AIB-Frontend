import React, { useState } from 'react'
import styles from './MainPage.module.scss'
import { MainInput, Dropdown } from '../../components'
import Swal from 'sweetalert2'
import withReactContent from 'sweetalert2-react-content'
import axios from 'axios'
import { 
  mariageOption, 
  educationOption,  
  genderOption,
  payStatusOption
} from './options'

const MySwal = withReactContent(Swal)

const MainPage = () => {

  const [result, setResult] = useState('-')

  const [marriage, setMariage] = useState(null)
  const [age, setAge] = useState(null)
  const [sex, setSex] = useState(null)
  const [edu, setEdu] = useState(null)
  const [limit, setLimit] = useState(null)

  const [pay_amt_1, setPayAmt1] = useState(null)
  const [pay_amt_2, setPayAmt2] = useState(null)
  const [pay_amt_3, setPayAmt3] = useState(null)
  const [pay_amt_4, setPayAmt4] = useState(null)
  const [pay_amt_5, setPayAmt5] = useState(null)
  const [pay_amt_6, setPayAmt6] = useState(null)

  const [bil_amt_1, setBilAmt1] = useState(null)
  const [bil_amt_2, setBilAmt2] = useState(null)
  const [bil_amt_3, setBilAmt3] = useState(null)
  const [bil_amt_4, setBilAmt4] = useState(null)
  const [bil_amt_5, setBilAmt5] = useState(null)
  const [bil_amt_6, setBilAmt6] = useState(null)

  const [pay_status_1, setPayStatus1] = useState(null)
  const [pay_status_2, setPayStatus2] = useState(null)
  const [pay_status_3, setPayStatus3] = useState(null)
  const [pay_status_4, setPayStatus4] = useState(null)
  const [pay_status_5, setPayStatus5] = useState(null)
  const [pay_status_6, setPayStatus6] = useState(null)

  let data = {
    age,
    marriage,
    sex,
    edu,
    limit,
    pay_amt_1,
    pay_amt_2,
    pay_amt_3,
    pay_amt_4,
    pay_amt_5,
    pay_amt_6,
    bil_amt_1,
    bil_amt_2,
    bil_amt_3,
    bil_amt_4,
    bil_amt_5,
    bil_amt_6,
    pay_status_1,
    pay_status_2, 
    pay_status_3, 
    pay_status_4, 
    pay_status_5, 
    pay_status_6, 
  }

  const unValidatedKey = () => {
    for (let key in data){
      if(!data[key]){
        return key
      }
      return null
    }
    return 
  }

  const submit = () => {
    const key = unValidatedKey()
    if (!key){
      console.log(data)
      //axios here
    } else {
      MySwal.fire({
        title: `Field ${key} Kosong!`,
        icon: 'warning',
        text: `Mohon isi field ${key}`,
        timer: 2000
      })
    }
  }

  return (
    <div className={styles.container} >
      <div className={styles.result} >
        Result: {result}
      </div>
      <div className={styles.inputContainer} >
        <Dropdown
          title="Sex"
          value={sex}
          placeholder="Pilih Gender"
          options={genderOption}
          setValue={setSex}
        />

        <MainInput
          title="Age"
          value={age}
          setValue={setAge}
        />

        <Dropdown
          title="Marriage"
          value={edu}
          placeholder="Pilih Status Nikah"
          options={mariageOption}
          setValue={setEdu}
        />   

        <Dropdown
          title="Education"
          value={marriage}
          placeholder="Pilih Pendidikan"
          options={educationOption}
          setValue={setMariage}
        />   
      
        <MainInput
          title="Limit"
          value={limit}
          setValue={setLimit}
        />

        <MainInput
          title="Pay Amount 1"
          value={pay_amt_1}
          setValue={setPayAmt1}
        />

        <MainInput
          title="Pay Amount 2"
          value={pay_amt_2}
          setValue={setPayAmt2}
        />

        <MainInput
          title="Pay Amount 3"
          value={pay_amt_3}
          setValue={setPayAmt3}
        />

        <MainInput
          title="Pay Amount 4"
          value={pay_amt_4}
          setValue={setPayAmt4}
        />

        <MainInput
          title="Pay Amount 5"
          value={pay_amt_5}
          setValue={setPayAmt5}
        />

        <MainInput
          title="Pay Amount 6"
          value={pay_amt_6}
          setValue={setPayAmt6}
        />

        <MainInput
          title="Bill Amount 1"
          value={bil_amt_1}
          setValue={setBilAmt1}
        /> 

        <MainInput
          title="Bill Amount 2"
          value={bil_amt_2}
          setValue={setBilAmt2}
        />  

        <MainInput
          title="Bill Amount 3"
          value={bil_amt_3}
          setValue={setBilAmt3}
        />  

        <MainInput
          title="Bill Amount 4"
          value={bil_amt_4}
          setValue={setBilAmt4}
        />  

        <MainInput
          title="Bill Amount 5"
          value={bil_amt_5}
          setValue={setBilAmt5}
        />  

        <MainInput
          title="Bill Amount 6"
          value={bil_amt_6}
          setValue={setBilAmt6}
        />

        <Dropdown
          title="Pay Status 1"
          value={pay_status_1}
          placeholder="Pilih status pembayaran bulan september"
          options={payStatusOption}
          setValue={setPayStatus1}
        />

        <Dropdown
          title="Pay Status 2"
          value={pay_status_2}
          placeholder="Pilih status pembayaran bulan agustus"
          options={payStatusOption}
          setValue={setPayStatus2}
        />

        <Dropdown
          title="Pay Status 3"
          value={pay_status_3}
          placeholder="Pilih status pembayaran bulan juli"
          options={payStatusOption}
          setValue={setPayStatus3}
        />

        <Dropdown
          title="Pay Status 4"
          value={pay_status_4}
          placeholder="Pilih status pembayaran bulan juni"
          options={payStatusOption}
          setValue={setPayStatus4}
        />

        <Dropdown
          title="Pay Status 5"
          value={pay_status_5}
          placeholder="Pilih status pembayaran bulan mei"
          options={payStatusOption}
          setValue={setPayStatus5}
        />

        <Dropdown
          title="Pay Status 6"
          value={pay_status_6}
          placeholder="Pilih status pembayaran bulan april"
          options={payStatusOption}
          setValue={setPayStatus6}
        />
      </div>
      <button
        onClick={submit}
        className={styles.loginButton}
        type="button"
      >
        Predict!
      </button>
    </div>
  )
}

export default MainPage
