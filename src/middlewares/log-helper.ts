import moment from 'moment';

export const logInfo = (name: string, input?: any, output?: any) => {
  console.log(
    `${moment().format(
      'HH:mm DD/MM/YYYY'
    )} - [${name}] || INFO || Input: ${JSON.stringify(
      input
    )} || Output: ${JSON.stringify(output)} \n`
  );
};
export const logEvent = (name: string, input?: any, output?: any) => {
  console.log(
    `${moment().format(
      'HH:mm DD/MM/YYYY'
    )} - [${name}] || EVENT || Input: ${JSON.stringify(
      input
    )} || Output: ${JSON.stringify(output)} \n`
  );
};
export const logError = (name: string, input?: any, output?: any) => {
  console.log(
    `${moment().format(
      'HH:mm DD/MM/YYYY'
    )} - [${name}] || ERROR || Input: ${JSON.stringify(
      input
    )}|| Output: ${JSON.stringify(output)} \n`
  );
};
