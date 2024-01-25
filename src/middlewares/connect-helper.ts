import crypto from 'crypto';

import axios from 'axios';
import { logError, logInfo } from './log-helper';

const generateSign = (data: string) => {
  let result = '';
  result = crypto.createHash('sha256').update(data).digest('hex');
  return result;
};
/**
 * middleware connect between pip service with API method
 * is_connect check on/off connect middleware
 * url is API endpoint
 * key_sign is key sign between services
 * merchant is merchant name between services
 * data is data JSON in request body
 */
export const pipConnect = async ({
  is_connect,
  url,
  key_sign,
  merchant,
  data,
}: {
  is_connect: number;
  url: string;
  key_sign: string;
  merchant: string;
  data: any;
}) => {
  const now = Date.now();

  const sign = generateSign(`${now}${merchant}${key_sign}`);
  if (sign) {
    if (is_connect === 1) {
      const result = await axios.post(
        `/api/${url}?merchant=${merchant}&sign=${sign}&time=${now}`,
        data,
        {
          validateStatus: (status: number) =>
            (status >= 200 && status < 300) || status === 400 || status === 404,
        }
      );
      logInfo(
        'pipConnect',
        { is_connect, url, key_sign, merchant, data, sign },
        { result }
      );
      return result;
    } else {
      logError(
        'pipConnect',
        { is_connect, url, key_sign, merchant, data },
        { sign }
      );
      throw new Error('Connect service is unavailable.');
    }
  } else {
    logError(
      'pipConnect',
      { is_connect, url, key_sign, merchant, data },
      { sign }
    );
    throw new Error('KEY_SIGN is undefined.');
  }
};
