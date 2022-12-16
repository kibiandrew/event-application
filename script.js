async function getHolidays() {
  try {
    const response = await fetch('https://public-holiday.p.rapidapi.com/2019/US', options);
    const data = await response.json();
    console.log(data);
  } catch (error) {
    console.error(error);
  }
}

getHolidays();
