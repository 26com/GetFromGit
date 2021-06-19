import { projectsGettingStart, projectsGettingSuccess } from './slice';
import getProjects from '../../../utils/getProjects';

export const getBySubject = (subject) => (dispatch) => {
  if (!subject) {
    dispatch(projectsGettingSuccess([]));
    return;
  }
  dispatch(projectsGettingStart());
  getProjects(subject)
    .then((res) => {
      dispatch(projectsGettingSuccess(res));
    });
};
