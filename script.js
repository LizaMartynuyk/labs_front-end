function validateForm() {
  let formData = {
    name: '',
    card: '',
    faculty: '',
    data: '',
    city: ''
  };

  const newName = document.querySelector('.name').value;
  const newCard = document.querySelector('.card').value;
  const newFaculty = document.querySelector('.faculty').value;
  const newData = document.querySelector('.data').value;
  const newCity = document.querySelector('.city').value;

  const checkName = /^[a-zA-Zа-яА-Я'][a-zA-Zа-яА-Я-' ]+[a-zA-Zа-яА-Я']?$/u;
  const checkCard = /^[0-9]{6}$/;
  const checkFaculty = /^[a-zA-Zа-яА-Я'][a-zA-Zа-яА-Я-' ]+[a-zA-Zа-яА-Я']?$/u;
  const checkData = /^(0[1-9]|[12][0-9]|3[01])\.(0[1-9]|1[0-2])\.\d{4}$/;
  const checkCity = /^[a-zA-Zа-яА-Я'][a-zA-Zа-яА-Я-' ]+[a-zA-Zа-яА-Я']?$/u;

  const failName = document.querySelector('.name');
  const failCard = document.querySelector('.card');
  const failFaculty = document.querySelector('.faculty');
  const failData = document.querySelector('.data');
  const failCity = document.querySelector('.city');
  
  failName.classList.remove('Error');
  failCard.classList.remove('Error');
  failFaculty.classList.remove('Error');
  failData.classList.remove('Error');
  failCity.classList.remove('Error');

  let isValid = true;

  if (checkName.test(newName) === false) {
      failName.classList.add('Error');
      isValid = false;
  }
  if (checkCard.test(newCard) === false) {
      failCard.classList.add('Error');
      isValid = false;
  }
  if (checkFaculty.test(newFaculty) === false) {
      failFaculty.classList.add('Error');
      isValid = false;
  }
  if (checkData.test(newData) === false) {
      failData.classList.add('Error');
      isValid = false;
  }
  if (checkCity.test(newCity) === false) {
      failCity.classList.add('Error');
      isValid = false;
  }

  if (isValid) {
     formData = {
      name: newName,
      card: newCard,
      faculty: newFaculty,
      data: newData,
      city: newCity
    };

    showData(formData)
  }
}

function showData(formData){
  const outputContainer = document.getElementById('outputContainer');

  const outputHTML = `
    <p>Ім'я: ${formData.name}</p>
    <p>Паспорт: ${formData.card}</p>
    <p>Факультет: ${formData.faculty}</p>
    <p>Дата народження: ${formData.data}</p>
    <p>Місто: ${formData.city}</p>
  `;

  
  outputContainer.innerHTML = outputHTML;
    
}
