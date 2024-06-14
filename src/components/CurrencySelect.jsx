// CurrencySelect.js
import React from "react";

const currencies = [
  { name: "Amerikan Doları", code: "USD" },
  { name: "Euro", code: "EUR" },
  { name: "Türk Lirası", code: "TRY" },
  { name: "İngiliz Sterlini", code: "GBP" },
  { name: "Rus Rublesi", code: "RUB" },
  { name: "Bulgar Levası", code: "BGN" },
  { name: "Brezilya Reali", code: "BRL" },
  { name: "Kanada Doları", code: "CAD" },
  { name: "İsviçre Frangı", code: "CHF" },
  { name: "Çin Yuanı", code: "CNY" },
  { name: "Çek Korunası", code: "CZK" },
  { name: "Danimarka Kronu", code: "DKK" },
  { name: "Hong Kong Doları", code: "HKD" },
  { name: "Hırvat Kunası", code: "HRK" },
  { name: "Macar Forinti", code: "HUF" },
  { name: "Endonezya Rupisi", code: "IDR" },
  { name: "Yeni İsrail Şekeli", code: "ILS" },
  { name: "Hindistan Rupisi", code: "INR" },
  { name: "İzlanda Kronu", code: "ISK" },
  { name: "Japon Yeni", code: "JPY" },
  { name: "Güney Kore Wonu", code: "KRW" },
  { name: "Meksika Pesosu", code: "MXN" },
  { name: "Malezya Ringiti", code: "MYR" },
  { name: "Norveç Kronu", code: "NOK" },
  { name: "Yeni Zelanda Doları", code: "NZD" },
  { name: "Filipin Pesosu", code: "PHP" },
  { name: "Polonya Zlotisi", code: "PLN" },
  { name: "Rumen Leyi", code: "RON" },
  { name: "İsveç Kronu", code: "SEK" },
  { name: "Singapur Doları", code: "SGD" },
  { name: "Tayland Bahtı", code: "THB" },
  { name: "Güney Afrika Randı", code: "ZAR" },
];

const CurrencySelect = ({ value, onChange, className }) => {
  return (
    <select
      value={value}
      onChange={(e) => onChange(e.target.value)}
      className={className}
    >
      {currencies.map((currency) => (
        <option key={currency.code} value={currency.code}>
          {currency.name} ({currency.code})
        </option>
      ))}
    </select>
  );
};

export default CurrencySelect;
