import { ApiResponse } from '../interfaces/ApiInterfaces';

const httpSimulation = async (filePath: string, responseDelay: number = 1000): Promise<ApiResponse> => {
  await new Promise(resolve => setTimeout(resolve, responseDelay))
  try {
    const response = await fetch(filePath);
    const jsonData = await response.json();
    return { data: jsonData, error: null };

  } catch (error) {
    return { data: null, error: 'Error' };
  }
};

export default httpSimulation;
