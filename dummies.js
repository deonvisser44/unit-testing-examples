const dummyPosts = [
  {
    userId: 1,
    id: 4,
    title: 'eum et est occaecati',
    body:
      'ullam et saepe reiciendis voluptatem adipisci\n' +
      'sit amet autem assumenda provident rerum culpa\n' +
      'quis hic commodi nesciunt rem tenetur doloremque ipsam iure\n' +
      'quis sunt voluptatem rerum illo velit',
  },
  {
    userId: 1,
    id: 5,
    title: 'nesciunt quas odio',
    body:
      'repudiandae veniam quaerat sunt sed\n' +
      'alias aut fugiat sit autem sed est\n' +
      'voluptatem omnis possimus esse voluptatibus quis\n' +
      'est aut tenetur dolor neque',
  },
  {
    userId: 1,
    id: 6,
    title: 'dolorem eum magni eos aperiam quia',
    body:
      'ut aspernatur corporis harum nihil quis provident sequi\n' +
      'mollitia nobis aliquid molestiae\n' +
      'perspiciatis et ea nemo ab reprehenderit accusantium quas\n' +
      'voluptate dolores velit et doloremque molestiae',
  },
  {
    userId: 1,
    id: 7,
    title: 'magnam facilis autem',
    body:
      'dolore placeat quibusdam ea quo vitae\n' +
      'magni quis enim qui quis quo nemo aut saepe\n' +
      'quidem repellat excepturi ut quia\n' +
      'sunt ut sequi eos ea sed quas',
  },
];

const ACTIVITY_PRIORITY = {
  HIGH: "HIGH",
  STANDARD: "STANDARD",
};

const dummyActivity = {
  name: 'Test Activity',
  id: 'some-id',
  days_of_week: ['MON', 'WED', 'THU'],
  priority: ACTIVITY_PRIORITY.STANDARD,
};

module.exports = { dummyPosts, dummyActivity, ACTIVITY_PRIORITY };
