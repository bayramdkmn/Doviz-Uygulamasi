import React, { useState } from "react";
import "../css/currency.css";
import { FaLongArrowAltRight } from "react-icons/fa";
import axios from "axios";
import CurrencySelect from "./CurrencySelect";

let BASE_URL = "https://api.freecurrencyapi.com/v1/latest";
let API_KEY = "fca_live_LciVV0Om8sIKg8FhvYMzIoFbjgl5mqqKveoaofNh";

function Currency() {
  const [amount, setAmount] = useState(0);
  const [fromCurrency, setFromCurrency] = useState("USD");
  const [toCurrency, setToCurrency] = useState("TRY");
  const [result, setResult] = useState(0);

  const exchange = async () => {
    const response = await axios.get(
      `${BASE_URL}?apikey=${API_KEY}&base_currency=${fromCurrency}`
    );
    const result = (response.data.data[toCurrency] * amount).toFixed(2);
    setResult(result);
  };

  return (
    <div className="currency-div">
      <div className="baslik">
        <h3>DÖVİZ KURU UYGULAMASI</h3>
      </div>
      <div
        style={{ marginTop: "20px", justifyContent: "center", display: "flex" }}
      >
        <input
          value={amount}
          onChange={(e) => setAmount(e.target.value)}
          type="number"
          className="amount"
        />
        <CurrencySelect
          value={fromCurrency}
          onChange={setFromCurrency}
          className="from-currency-option"
        />
        <FaLongArrowAltRight
          style={{ fontSize: "25px", marginRight: "10px" }}
        />
        <CurrencySelect
          value={toCurrency}
          onChange={setToCurrency}
          className="to-currency-option"
        />
        <input value={result} disabled type="number" className="result" />
      </div>
      <div>
        <button onClick={exchange} className="exchange-button">
          Çevir
        </button>
      </div>
    </div>
  );
}

export default Currency;
