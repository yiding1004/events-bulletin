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
    description:
      "You're likely here looking for a number of different adjectives. If you are, you have come exactly to the right page. This random adjective calculator has hundreds of commonly used adjectives which will randomly appear with a click of a mouse depending on the number you would like to generate. Whether you're stuck trying to come up with new ways to describe something or you're just looking for creative adjectives to spice up your writing, the random adjective calculator should be a great help.",
    image: 'https://picsum.photos/id/3/200/300',
  },
  {
    id: 1,
    title: 'Party2',
    date: '2023-07-27T18:34:55.985+00:00',
    location: 'Los Angeles',
    description:
      'While there are a number of reasons you may want to create random adjectives, one of the most common is writers looking for new ways to better describe their writing. The great thing about this adjective tool is that it can help spark creative juices just by generating new adjectives. Simply seeing a random adjective can spark the imagination to come up with the perfect vocabulary for your writing. If nothing else, this tool will give you options you likely had never considered which in itself can be a great help.',
    image: 'https://picsum.photos/id/1/200/300',
  },
  {
    id: 2,
    title: 'Party3',
    date: '2023-07-27T18:34:55.985+00:00',
    location: 'Chicago',
    description:
      'While there are a number of reasons you may want to create random adjectives, one of the most common is writers looking for new ways to better describe their writing. The great thing about this adjective tool is that it can help spark creative juices just by generating new adjectives. Simply seeing a random adjective can spark the imagination to come up with the perfect vocabulary for your writing. If nothing else, this tool will give you options you likely had never considered which in itself can be a great help.',
    image: 'https://picsum.photos/id/7/200/300',
  },
  {
    id: 3,
    title: 'Party4',
    date: '2023-07-27T18:34:55.985+00:00',
    location: 'Houston',
    description:
      'Did you know that there are actually three types of adjectives in the Eglish language? Can you guess what they are? The following are the three different types of adjectives that are included in the calculator:',
    image: 'https://picsum.photos/id/10/200/300',
  },
  {
    id: 4,
    title: 'Party5',
    date: '2023-07-27T18:34:55.985+00:00',
    location: 'Philadelphia',
    description:
      'Descriptive adjectives are the ones that most people think of when they hear the word "adjective." These are used to describe a specific characteristic of a noun. These are the words that help explain the noun\'s color, size, and shape among other things. In the sentence, "I walked past a sleek, yellow car on my way home," the words "sleek" and "yellow" are descriptive adjectives.',
    image: 'https://picsum.photos/id/11/200/300',
  },
  {
    id: 5,
    title: 'Party6',
    date: '2023-07-27T18:34:55.985+00:00',
    location: 'Phoenix',
    description:
      'Another type of adjective is the quantitative adjective. When a qualitative adjective is used, it helps to describe an approximate amount (or sometimes the exact amount) of a particular noun. In the sentence, "There were a few cars and many bicycles in front of the store" the words "few" and "many" are quantitative adjectives describing the number of cars and bicycles. Additional examples of quantitative adjectives would be a little, no, and all.',
    image: 'https://picsum.photos/id/21/200/300',
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
