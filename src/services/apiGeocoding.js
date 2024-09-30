export async function reverseGeocodeLocation({ lat, lng }) {
  const res = await fetch(
    `https://api-bdc.net/data/reverse-geocode?latitude=${lat}&longitude=${lng}&localityLanguage=en&key=bdc_8ce7140320094e5e9c7e9944891de5d7`,
  );
  const data = await res.json();

  return data;
}
