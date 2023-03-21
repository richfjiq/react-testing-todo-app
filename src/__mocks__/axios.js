const mockResponse = {
  data: {
    results: [
      {
        name: {
          first: 'Ricardo',
          last: 'Flores',
        },
        picture: {
          large: 'https://randomuser.me/api/portraits/men/1.jpg',
        },
        login: {
          username: 'Rick',
        },
      },
    ],
  },
};

const jestMock = {
  get: jest.fn().mockResolvedValue(mockResponse),
};

export default jestMock;
