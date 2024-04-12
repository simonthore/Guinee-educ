import React, { useState } from 'react';
import ColumnCard from '../components/ColumnCard';

function DonationPage() {
  const [monthlyDonation, setMonthlyDonation] = useState(true);

  const handleMonthlyDonationChange = () => {
    setMonthlyDonation(true);
  };

  const handleOneTimeDonationChange = () => {
    setMonthlyDonation(false);
  };

  return (
    <div className="donation-page">
      <ColumnCard title={"MON DON"}>
      <div id="column_1">
        <div className="column">
          <h1 style={{ backgroundColor: 'grey', color: 'white', padding: '10px', borderRadius: '5px' }}>MON DON</h1>
          <div className="buttons-container">
            <button className={monthlyDonation ? 'active-button' : 'inactive-button'} onClick={handleMonthlyDonationChange}>Je donne tous les mois</button>
            <button className={!monthlyDonation ? 'active-button' : 'inactive-button'} onClick={handleOneTimeDonationChange}>Je fais un don ponctuel</button>
          </div>
          <div className={monthlyDonation ? 'monthly-donation-section show' : 'monthly-donation-section'}>
            <p>Options de don mensuel</p>
            <button>5 €</button>
            <button>10 €</button>
            <button>25 €</button>
            <button>50 €</button>
            <input type="number" /><span>€</span>

          </div>
          <div className={!monthlyDonation ? 'one-time-donation-section show' : 'one-time-donation-section'}>
            <p>Options de don ponctuel</p>
            <button>25 €</button>
            <button>50 €</button>
            <button>100 €</button>
            <button>250 €</button>
            <input type="number" /><span>€</span>

          </div>
        </div>
      </div>
      </ColumnCard>
      <ColumnCard title={"MES COORDONEES"}>
        <div></div>
      </ColumnCard>
      
      <ColumnCard title={"MON REGLEMENT SECURISE"}>
      <div></div>

      </ColumnCard>

     
    </div>
  );
}

export default DonationPage;
