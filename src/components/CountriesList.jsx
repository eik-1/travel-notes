import styles from "./CountriesList.module.css";
import Spinner from "./Spinner.jsx";
import Message from "./Message.jsx";
import CountryItem from "./CountryItem.jsx";

function CountriesList({ cities, isLoading }) {
  if (isLoading) {
    return <Spinner />;
  }
  if (cities.length === 0) {
    return (
      <Message message="Add your first country by clicking on a country on map" />
    );
  }

  const countries = cities.reduce((acc, city) => {
    if (!acc.map((el) => el.country).includes(city.country)) {
      return [...acc, { country: city.country, emoji: city.emoji }];
    } else {
      return acc;
    }
  }, []);

  return (
    <div className={styles.countryList}>
      {countries.map((country) => (
        <CountryItem country={country} />
      ))}
    </div>
  );
}

export default CountriesList;
