const users = [
  { id: 0, name: 'Umi', nickName: 'U', gender: 'MALE' },
  { id: 1, name: 'Fish', nickName: 'B', gender: 'FEMALE' },
];

export const events = [
  {
    id: 0,
    title: 'Party1',
    date: '2023-07-19T21:40:35.744+00:00',
    location: 'New York',
    description: 'description1',
    image: 'url1',
  },
  {
    id: 1,
    title: 'Party2',
    date: '2023-07-27T18:34:55.985+00:00',
    location: 'Los Angeles',
    description: 'description2',
    image: 'url2',
  },
  {
    id: 2,
    title: 'Party3',
    date: '2023-07-27T18:34:55.985+00:00',
    location: 'Los Angeles',
    description: 'description2',
    image: 'url2',
  },
  {
    id: 3,
    title: 'Party4',
    date: '2023-07-27T18:34:55.985+00:00',
    location: 'Los Angeles',
    description: 'description2',
    image: 'url2',
  },
  {
    id: 4,
    title: 'Party5',
    date: '2023-07-27T18:34:55.985+00:00',
    location: 'Los Angeles',
    description: 'description2',
    image: 'url2',
  },
  {
    id: 5,
    title: 'Party6',
    date: '2023-07-27T18:34:55.985+00:00',
    location: 'Los Angeles',
    description: 'description2',
    image: 'url2',
  },
];

export default {
  'GET /api/v1/queryUserList': (req: any, res: any) => {
    res.json({
      success: true,
      data: { list: users },
      errorCode: 0,
    });
  },
  'GET /api/v1/queryEventList': (req: any, res: any) => {
    res.json({
      success: true,
      data: { list: events },
      errorCode: 0,
    });
  },
  'PUT /api/v1/user/': (req: any, res: any) => {
    res.json({
      success: true,
      errorCode: 0,
    });
  },
};
