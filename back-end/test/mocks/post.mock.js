const validDate= '2023-07-02';
const validType = 'causas naturais';
const validLocation = 'Rua 1, 23, Centro, Londrina, Paraná, Brasil';

const validBody = { date: validDate, type: validType, location: validLocation };
const noDateBody = { date: '', type: validType, location: validLocation };
const noTypeBody = { date: validDate, type: '', location: validLocation };
const noLocationBody = { date: validDate, type: validType, location: '' };

export {
  validBody,
  noDateBody,
  noTypeBody,
  noLocationBody,
};
