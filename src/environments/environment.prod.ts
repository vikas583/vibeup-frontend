export const environment = {
	production: true
  };
  export interface Environment {
	endPoint: string;
	// imageLink: string;
	// websiteLink: string;
  
  }
  
  export const PROD: Environment = {
	endPoint: 'http://52.66.60.227:3000/api/',
  }
  
  export const environment1: Environment = PROD;
  