import { faker } from '@faker-js/faker';
import { sample } from 'lodash';


// ----------------------------------------------------------------------



// getData()
// async function getData() {
//   try {
//     const url = 'http://fs1.co.il/bus/xbox2.php';
//     const response = await axios.get(url);
//     console.log(response.data);
//   } catch (error) {
//     console.error(error);
//   }
// }














const users = [...Array(25)].map((_, index) => ({
  id: faker.datatype.uuid(),                                   // מזהה
  avatarUrl: `/assets/images/avatars/avatar_${index + 1}.jpg`, // תמונה
  name: faker.name.fullName(),                                 // שם מלא
  company: faker.company.name(),                               // מרשת חברתית = קישור
  isVerified: faker.datatype.number(),                         // ציון סופי
  status: sample(['banned', 'success']),                       // תגית
  role: sample(['+הובלה 3','+ערכי 1','+פעיל 2.5',]),
}));



// const users = [...Array(25)].map((_, index) => ({
//   id: faker.datatype.uuid(),
//   avatarUrl: `/assets/images/avatars/avatar_${index + 1}.jpg`,
//   name: faker.name.fullName(),
//   company: faker.company.name(),
//   isVerified: faker.datatype.number(),
//   status: sample(['banned', 'success']),
//   role: sample([
//     'יוזמה 3%',
//     'מוביל 3%',
//     'ערכי 3%',
//     'יוזמה 3%',
//     'מוביל 3%',
//     'ערכי 3%',
//     'יוזמה 3%',
//     'יוזמה 3%',
//     'יוזמה 3%',
//     'יוזמה 3%',
//   ]),
// }));

export default users;