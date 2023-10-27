const axios = require('axios');
const moment = require('moment');
const { ACTIVITY_PRIORITY } = require('./dummies');

function add(a, b) {
  return a + b;
}

function findMax(arr) {
  if (arr.length === 0) {
    throw new Error('Array is empty');
  }
  return Math.max(...arr);
}

function isEven(number) {
  return number % 2 == 0;
}

async function getPosts() {
  const response = await axios.get('https://jsonplaceholder.typicode.com/posts');
  // return array of posts
  return response.data;
}

async function findPost(id) {
  const posts = await getPosts();
  return posts.find((post) => post.id === id);
}


// functions from mobile-app repo

const isActivityAvailableToday = (activity) => {
  const currentDay = moment().format("ddd").toUpperCase();
  if (
    (activity && !activity.days_of_week) ||
    (activity.days_of_week && (activity.days_of_week.includes("ALL") || activity.days_of_week.includes(currentDay)))
  ) {
    return true;
  }

  return false;
};

const isActivityAvailableAfterCutOffTime = (activity, cutOffTime) => {
  const cutOffTimeObj = moment(cutOffTime, "HH:mm");

  if (moment().isSameOrAfter(cutOffTimeObj)) {
    return activity.priority === ACTIVITY_PRIORITY.HIGH;
  }

  return true;
};

function isActivityAvailable(activity, cutOffTime) {
  if (!isActivityAvailableToday(activity)) {
    return false;
  }

  if (!isActivityAvailableAfterCutOffTime(activity, cutOffTime)) {
    return false;
  }

  return true;
};


// (async () => {
//   const post = await findPost(5);
// })()


module.exports = { add, findMax, isEven, findPost, isActivityAvailable };
