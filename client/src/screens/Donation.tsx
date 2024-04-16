    import React, { useState, useEffect } from 'react';
    import ColumnCard from '../components/ColumnCard';
    import email from "../assets/email.png"
    import cb from "../assets/cb.png"
    import bank from "../assets/banque.png"
    import ReactFlagsSelect from "react-flags-select";
    import cb2 from "../assets/cb2.png"
    import amex from "../assets/amex.png"
    import masterc from "../assets/masterc.png"
    import visa from "../assets/visa.png"



    interface MyFormValues {
      firstname: string;
      lastname: string;
      email: string;
    }


    function DonationPage() {
      const [monthlyDonation, setMonthlyDonation] = useState(true);
      const [activePayment, setActivePayment] = useState(true)
      const [selectedPrice, setSelectedPrice] = useState(null);
      const [customPrice, setCustomPrice] = useState(''); 
      const [selected, setSelected] = useState("");


      const handleMonthlyDonationChange = () => {
        setMonthlyDonation(true);
        setSelectedPrice(null); 
      };

      const handleBankPayment = () => {
        setActivePayment(true)
      }

      const handleOneTimeDonationChange = () => {
        setMonthlyDonation(false);
        setSelectedPrice(null); 
      };

      const handleCbPayment = () => {
        setActivePayment(false)
      }
      const handlePriceButtonClick = (price:string) => {
        setSelectedPrice(price);
        setCustomPrice(price);
      };

      const handleCustomPriceChange = (event) => {
        setSelectedPrice(null); 
        setCustomPrice(event.target.value); 
      };
      

      const [firstname, setFirstname] = useState("")
      const [lastname, setLastname] = useState("")
      const [mail, setMail] = useState("")
      const [adress, setAdress] = useState("")
      const [compAdress, setCompAdress] = useState("")
      const [postcode, setPostcode] = useState("")
      const [city, setCity] = useState("")
      const [countries, setCountries] = useState([])
      const [ selectedCountry, setSelectedCountry] = useState("")
      const [iban, setIban] = useState("")
      const [bic, setBic] = useState("")


      return (
        <div className="donation-page">
          <ColumnCard title={"MON DON"}>
            <div id="column_1">
              <div className="column">
                <div className="buttons-container">
                  <button className={monthlyDonation ? 'active-button' : 'inactive-button'} id="montly-donation" onClick={handleMonthlyDonationChange}>Je donne tous les mois</button>
                  <button className={!monthlyDonation ? 'active-button' : 'inactive-button'} id="ponctual-donation" onClick={handleOneTimeDonationChange}>Je fais un don ponctuel</button>
                </div>
                <div className={monthlyDonation ? 'monthly-donation-section show' : 'monthly-donation-section'}>
                  <button className={`price_button ${selectedPrice === '5' ? 'selected' : ''}`} onClick={() => handlePriceButtonClick('5')}>5 €</button>
                  <button className={`price_button ${selectedPrice === '10' ? 'selected' : ''}`} onClick={() => handlePriceButtonClick('10')}>10 €</button>
                  <button className={`price_button ${selectedPrice === '25' ? 'selected' : ''}`} onClick={() => handlePriceButtonClick('25')}>25 €</button>
                  <button className={`price_button ${selectedPrice === '50' ? 'selected' : ''}`} onClick={() => handlePriceButtonClick('50')}>50 €</button>
                  <div className='bottom_bar'>
                    <input type="number" className='adjusted_price' value={customPrice} onChange={handleCustomPriceChange} /><p className='special_span'>€</p>
                  </div>
                </div>
                <div className={!monthlyDonation ? 'one-time-donation-section show' : 'one-time-donation-section'}>
                  <button className={`price_button ${selectedPrice === '25' ? 'selected' : ''}`} onClick={() => handlePriceButtonClick('25')}>25 €</button>
                  <button className={`price_button ${selectedPrice === '50' ? 'selected' : ''}`} onClick={() => handlePriceButtonClick('50')}>50 €</button>
                  <button className={`price_button ${selectedPrice === '100' ? 'selected' : ''}`} onClick={() => handlePriceButtonClick('100')}>100 €</button>
                  <button className={`price_button ${selectedPrice === '250' ? 'selected' : ''}`} onClick={() => handlePriceButtonClick('250')}>250 €</button>
                  <div className='bottom_bar'>
                    <input type="number" className='adjusted_price' value={customPrice} onChange={handleCustomPriceChange} /><p className='special_span'>€</p>
                  </div>
                </div>
              </div>
            </div>
          </ColumnCard>
          <ColumnCard title={"MES COORDONNÉES"}>
            <div id="column_2">
            <div className='bottom_bar'>
            <p className='special_span_2'> <img src= {email} alt="email" /></p>   
            <input type="text" placeholder='Email *' className='email_input'/>
            </div>
            <div id='société'>
          <input type="checkbox" className='checkboite' /><p id="info-société">je fais un don au nom d'une société</p> 
          </div>
          <select name="civilité" id="civilites">
            <option value="">Civilité *</option>
            <option value="mr">M.</option>
            <option value="mrs">Mme</option>
            <option value="mrs&mr">Mme et M.</option>
            <option value="other">Autre</option>
          </select>
          <input
            type="text" 
            id="firstname_input"
            className='main-input'
            name="firstname" 
            placeholder="prénom *"
            value={firstname}  
            onChange={(e) => setFirstname(e.target.value)} 
          />
          <input
            type="text" 
            id="lastname_input"
            className='main-input'
            name="lastname" 
            placeholder="nom *"
            value={lastname}  
            onChange={(e) => setLastname(e.target.value)} 
          />
          <input
            type="text"
            id="email_input"
            className='main-input'
            name="email"
            placeholder="votre adresse mail *"
            value={mail}
            onChange={(e)=>setMail(e.target.value)}
          />
          <input
            type="text"
            id="adress_input"
            className='main-input'
            name="adress"
            placeholder="Entrez votre adresse..."
            value={adress}
            onChange={(e)=>setAdress(e.target.value)}
          />
          <input
            type="text"
            id="comp_adress_input"
            className='main-input'
            name="comp_adress"
            placeholder="Complément adresse"
            value={compAdress}
            onChange={(e)=>setCompAdress(e.target.value)}
          />
          <input
            type="number"
            id="cp_input"
            className='main-input'
            name="postcode"
            placeholder="Code postal *"
            value={postcode}
            onChange={(e)=>setPostcode(e.target.value)}
          />
          <input
            type="text"
            id="City"
            className='main-input'
            name="City"
            placeholder="Ville *"
            value={city}
          />
          <div>
            
          <h2>Sélectionnez un pays :</h2>
          <ReactFlagsSelect
          id='country_input'
          selected={selected}
          onSelect={(code) => setSelected(code)}
          placeholder="Sélectionnez un pays"
          />
         
        <p className='subinfo'>* Champs obligatoires (ces informations sont indispensables pour recevoir votre reçu fiscal) </p>

        </div>
            </div>
          </ColumnCard>
          <ColumnCard title={"MON RÈGLEMENT SÉCURISÉ"}>
            <div id="column_3"> 
            <div id='top_button'>
           
            <button className={activePayment ? 'active-button' : 'inactive-button'} onClick={handleBankPayment}> <img src= {bank} alt="banque" /></button>
            <button className={!activePayment ? 'active-button' : 'inactive-button'}  onClick={handleCbPayment}> <img src= {cb} alt="cb" /></button>
            </div>
            <div className={activePayment ? 'bank show' : 'bank-section'}>
            <input
            type="text"
            id="iban"
            className='main-input'
            name="iban"
            placeholder="Votre numéro IBAN *"
            value={iban}
            onChange={(e)=>setIban(e.target.value)}
          />
            <input
            type="bic"
            id="bic"
            name="bic"
            placeholder="Votre code BIC *"
            className='main-input'

            value={bic}
            onChange={(e)=>setBic(e.target.value)}
          />
          <button>je donne tous les mois {customPrice} €</button>
          </div>
          <div className={!activePayment ? 'cb show' : 'cb-section'}>
            <div className='card-area'>
              <div id='mastercard-area' className='card-checkbox'>
                <img src= {masterc} alt="master card" />
                <label>
                <input type="checkbox" onChange={() => {}} />
                </label>  
              </div>
              <div id='visa-area' className='card-checkbox'>
                <img src= {visa} alt="visa" />
                <label>
                <input type="checkbox" onChange={() => {}} />
                </label>  
              </div>
              <div id='creditcard-area' className='card-checkbox'>
                <img src= {cb2} alt="credit card" />
                <label>
                <input type="checkbox" onChange={() => {}} />
                </label>  
              </div>
              <div id='amex-area' className='card-checkbox'>
                <img src= {amex} alt="amex" />
                <label>
                <input type="checkbox" onChange={() => {}} />
                </label>  
              </div>
            </div>
            </div>
          </div>
          </ColumnCard>
        </div>
      );
    }

    export default DonationPage;
