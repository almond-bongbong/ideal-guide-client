import xml2js from 'xml2js';
import { AxiosResponse } from 'axios';

const xmlParsingOptions = {
  headless: true,
  explicitArray: false,
  mergeAttrs: true,
};

export const parseXmlResponse = async (fetch: Promise<AxiosResponse>) => {
  const { data } = await fetch;
  const { response } = await xml2js.parseStringPromise(data, xmlParsingOptions);

  return response;
};
