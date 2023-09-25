import PropTypes from "prop-types";
import { createContext, useContext, useEffect, useState } from "react";

const DataContext = createContext();

DataProvider.propTypes = {
  children: PropTypes.element,
};

function DataProvider({ children }) {
  const [donations, setDonations] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch("../data.json");
      const data = await response.json();
      setDonations(data);
      setLoading(false);
    };

    fetchData();
  }, []);

  return (
    <DataContext.Provider value={donations}>
      {!loading && children}
    </DataContext.Provider>
  );
}

function useData() {
  const context = useContext(DataContext);
  if (context === undefined)
    throw new Error("DataContext was used outside of DataProvider");

  return context;
}

export { DataProvider, useData };
