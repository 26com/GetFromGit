import { getProjectsUrl } from '../constants';

const getProjects = async (subject) => {
  try {
    const url = getProjectsUrl + subject;
    const response = await fetch(url);
    const { items } = await response.json();
    return items;
  } catch (err) {
    console.log(err);
    return null;
  }
};

export default getProjects;
