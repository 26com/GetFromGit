import { projectsGettingStart, projectsGettingSuccess } from './slice';
import getProjects from '../../../utils/getProjects';

export const getBySubject = (subject) => (dispatch) => {
  dispatch(projectsGettingStart());
  getProjects(subject)
    .then((res) => {
      dispatch(projectsGettingSuccess(res));
    });
};
