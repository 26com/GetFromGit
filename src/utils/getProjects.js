import { GET_PROJECTS_URL } from '../constants';

const getProjects = async (subject) => {
  try {
    const url = GET_PROJECTS_URL + subject;
    const response = await fetch(url);
    const { items } = await response.json();
    return items;
  } catch (err) {
    console.log(err);
    return null;
  }
};

export default getProjects;
