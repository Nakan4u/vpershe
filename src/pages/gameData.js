export const gameData = [
  {
    id: '1',
    step: 1,
    question: 'question1',
    answers: [
      {
        id: '1.1',
        title: 'answer1',
        isFinal: false
      },
      {
        id: '1.2',
        title: 'answer2',
        isFinal: true
      },
      {
        id: '1.3',
        title: 'answer3',
        isFinal: true
      }
    ]
  },
  {
    id: '2',
    step: 2,
    ref: '1.1',
    question: 'question2',
    answers: [
      {
        id: '2.1',
        title: 'answer1',
        isFinal: false
      },
      {
        id: '2.2',
        title: 'answer2',
        isFinal: true
      }
    ]
  },
  {
    id: '3',
    step: 3,
    ref: '2.1',
    question: 'question2',
    answers: [
      {
        id: '3.1',
        title: 'answer1',
        isFinal: true
      },
      {
        id: '3.2',
        title: 'answer2',
        isFinal: true
      }
    ]
  }
];
