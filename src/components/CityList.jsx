import CityItem from "./CityItem.jsx";
import styles from "./CityList.module.css";
import Spinner from "./Spinner.jsx";
import Message from "./Message.jsx";

function CityList({ cities, isLoading }) {
  if (isLoading) {
    return <Spinner />;
  }
  if (cities.length === 0) {
    return (
      <Message message="Add your first city by clicking on a city on map" />
    );
  }
  return (
    <div className={styles.cityList}>
      {cities.map((city) => (
        <CityItem key={city.id} city={city} />
      ))}
    </div>
  );
}

export default CityList;
