export interface Candidate {
  num: string;
  sgId: string;
  sgTypecode: string;
  huboid: string;
  sggName: string;
  sdName: string;
  wiwName: string;
  giho: string;
  gihoSangse: string;
  jdName: string;
  name: string;
  hanjaName: string;
  gender: string;
  birthday: string;
  age: string;
  addr: string;
  jobId: string;
  job: string;
  eduId: string;
  edu: string;
  career1: string;
  career2: string;
  status: string;
}

export interface District {
  num: string;
  sgId: string;
  sgTypecode: string;
  sggName: string;
  sdName: string;
  wiwName: string;
  sggJungsu: string;
  sOrder: string;
}

export interface DistrictsByCity {
  [key: string]: District[];
}

export interface CityWithDistricts {
  city: string;
  districts: District[];
}

export interface Party {
  num: string;
  sgId: string;
  jdName: string;
  pOrder: string;
}
