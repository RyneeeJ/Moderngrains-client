import toast from "react-hot-toast";
import { reverseGeocodeLocation } from "../services/apiGeocoding";

export const formatCurrency = (value) =>
  new Intl.NumberFormat("en", { style: "currency", currency: "PHP" }).format(
    value,
  );
// Trick?? to scroll back to top when clicking react router Links
export const scrollToTop = () => window.scrollTo(0, 0);

export const formatDate = (dateStr) => {
  const date = new Date(dateStr);
  const locale = navigator.language;
  return new Intl.DateTimeFormat(locale, {
    year: "2-digit",
    month: "2-digit",
    day: "2-digit",
  }).format(date);
};

function getPosition() {
  return new Promise(function (resolve, reject) {
    navigator.geolocation.getCurrentPosition(resolve, reject);
  });
}
export const fetchAddress = async () => {
  try {
    const positionObj = await getPosition();

    const {
      coords: { latitude: lat, longitude: lng },
    } = positionObj;

    const data = await reverseGeocodeLocation({
      lat,
      lng,
    });

    console.log(data);
    return {
      locality: data?.locality,
      city: data?.city,
      country: data?.countryName,
    };
  } catch (e) {
    console.log(e.message);
    toast.error("Please enable location access on your browser");
  }
};
