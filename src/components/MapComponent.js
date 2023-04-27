export default function MapComponent({ countryData }) {
  return (
    <>
      {countryData && (
        <iframe
          width="600"
          height="450"
          style={{ border: 0 }}
          loading="lazy"
          allowfullscreen
          referrerpolicy="no-referrer-when-downgrade"
          src={
            "https://www.google.com/maps/embed/v1/place?key=AIzaSyCfV4IL4KxjsgJ9EzNxv6uSYZZRhV2EHu0&q=" +
            countryData.name.common
          }
        />
      )}
    </>
  );
}
