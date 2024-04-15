    import React, { useState, useEffect } from 'react';
    import ColumnCard from '../components/ColumnCard';
    import email from "../assets/email.png"
    import axios from 'axios'
import { log } from 'console';

    interface MyFormValues {
      firstname: string;
      lastname: string;
      email: string;
    }


    function DonationPage() {
      const [monthlyDonation, setMonthlyDonation] = useState(true);
      const [selectedPrice, setSelectedPrice] = useState(null);
      const [customPrice, setCustomPrice] = useState(''); 

      const handleMonthlyDonationChange = () => {
        setMonthlyDonation(true);
        setSelectedPrice(null); 
      };

      const handleOneTimeDonationChange = () => {
        setMonthlyDonation(false);
        setSelectedPrice(null); 
      };

      const handlePriceButtonClick = (price) => {
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


      useEffect(() => {
        const fetchCountries = async () => {
          try {
            const response = await axios.get('https://restcountries.com/v3.1/all');
            console.log(response.data)
            setCountries(response.data);
          } catch (error) {
            console.error('Erreur lors de la récupération des pays :', error);
          }
        };

        fetchCountries();
      }, []);

      const handleCountryChange = (event) => {
        const selectedCountryCode = event.target.value;
        setSelectedCountry(selectedCountryCode);
      };

      const formatTLD = (tld) => {
        if (!tld || typeof tld !== 'string') return ''; // Vérifie si tld est défini et une chaîne de caractères
        return tld.slice(-2).toUpperCase(); // Formate le tld en majuscules
      };
      
      
      
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
          <ColumnCard title={"MES COORDONNEES"}>
            <div id="column_2">
            <div className='bottom_bar'>
            <p className='special_span_2'> <img src= {email} alt="email" /></p>
            <input type="text" placeholder='Email *'/>
            </div>
          <input type="checkbox" /> je fais un don au nom d'une société 
          <br />
          <select name="civilité" id="civilites">
            <option value="">Civilité *</option>
            <option value="mr">M.</option>
            <option value="mrs">Mme</option>
            <option value="mrs&mr">Mme et M.</option>
            <option value="other">Autre</option>
          </select>

          <input
            type="text" 
            id="lastname_input"
            name="lastname" 
            placeholder="nom"
            value={lastname}  
            onChange={(e) => setLastname(e.target.value)} 
          />
          <input
            type="text" 
            id="firstname_input"
            name="firstname" 
            placeholder="prénom"
            value={firstname}  
            onChange={(e) => setFirstname(e.target.value)} 
          />
          <input
            type="text"
            id="email_input"
            name="email"
            placeholder="votre adresse mail"
            value={mail}
            onChange={(e)=>setMail(e.target.value)}
          />
          <input
            type="text"
            id="adress_input"
            name="adress"
            placeholder="Entrez votre adresse"
            value={adress}
            onChange={(e)=>setAdress(e.target.value)}
          />
          <input
            type="text"
            id="comp_adress_input"
            name="comp_adress"
            placeholder="Complément adresse"
            value={compAdress}
            onChange={(e)=>setCompAdress(e.target.value)}
          />
          <input
            type="number"
            id="cp_input"
            name="postcode"
            placeholder="Code postal *"
            value={postcode}
            onChange={(e)=>setPostcode(e.target.value)}
          />
          <input
            type="text"
            id="City"
            name="City"
            placeholder="Ville *"
            value={city}
            onChange={(e)=>setCity(e.target.value)}
          />
              <div>
            
          <h2>Sélectionnez un pays :</h2>
            <select value={selectedCountry} onChange={handleCountryChange} id="country-select">
        <option value="">Sélectionnez un pays</option>
          {countries.map((country) => (
        <option key={country.cca2} value={country.cca2}>
          {country.name.common}
        </option>
          ))}
            </select>
            
        </div>
            </div>
          </ColumnCard>
          <ColumnCard title={"MON REGLEMENT SECURISE"}>
            <div id="column_3"></div>
            <input
            type="text"
            id="iban"
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
            value={bic}
            onChange={(e)=>setBic(e.target.value)}
          />
          <button>je donne tous les mois {customPrice} €</button>
          </ColumnCard>
        </div>
      );
    }

    export default DonationPage;
