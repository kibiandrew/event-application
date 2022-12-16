const options = {
  method: 'GET',
  headers: {
    'X-RapidAPI-Key': '177082c668msh5fdc9f437358997p1d112fjsn87d2c450ff01',
    'X-RapidAPI-Host': 'public-holiday.p.rapidapi.com'
  }
};

fetch('https://public-holiday.p.rapidapi.com/2019/US', options)
  .then(response => response.json())
  .then(response => {
    // Get the table element
    const table = document.getElementById('table');

    // Get the keys from the first object in the response array
    const headers = Object.keys(response[0]);

    // Create the table header row
    const headerRow = document.createElement('tr');
    headers.forEach(header => {
      const th = document.createElement('th');
      th.textContent = header;
      headerRow.appendChild(th);
    });
    table.appendChild(headerRow);

    // Create a row for each object in the response array
    response.forEach(obj => {
      const row = document.createElement('tr');
      headers.forEach(header => {
        const td = document.createElement('td');
        td.textContent = obj[header];
        row.appendChild(td);
      });
      table.appendChild(row);
    });
  })
  .catch(err => console.error(err));
