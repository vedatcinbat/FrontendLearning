import { fetchData } from "../HttpFunctions/fetchData";
import axios from "axios";

jest.mock('axios')

const mockedAxios = axios as jest.Mocked<typeof axios>;

describe('fetchData function', () => {
    test('should return data when API call is successfull', async () => {
        const data = {id: 1, name: 'Alice'};
        mockedAxios.get.mockResolvedValue({data});

        const result = await fetchData('https://api.example.com/user')
        expect(result).toEqual(data);
        expect(mockedAxios.get).toHaveBeenCalledWith('https://api.example.com/user');
    })

    test('should throw an error when API call fails', async () => {
        const error = new Error('API call failed');
        mockedAxios.get.mockRejectedValue(error);

        await expect(fetchData('https://api.example.com/user')).rejects.toThrow('API call failed');
        expect(mockedAxios.get).toHaveBeenCalledWith('https://api.example.com/user');
    })
})