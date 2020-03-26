import xml2js from 'xml2js';
import { AxiosResponse } from 'axios';

const xmlParsingOptions = {
  headless: true,
  explicitArray: false,
  mergeAttrs: true,
};

export const parseXmlResponse = async (fetch: Promise<AxiosResponse>) => {
  let data;

  try {
    const response = await fetch;
    data = response.data;
  } catch (e) {
    throw Error('데이터 호출에 실패했습니다.');
  }

  try {
    const { response } = await xml2js.parseStringPromise(
      data,
      xmlParsingOptions,
    );
    return response;
  } catch (e) {
    throw Error('데이터 파싱에 실패했습니다.');
  }
};
