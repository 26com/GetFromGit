import { React } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import BootstrapCard from './components/BootstrapCard';
import { getBySubject } from './store/entities/Projects/thunk';
import inputDebounce from './utils/inputDebounce';
import { MIN_SEARCH_LIMIT } from './constants';

function App() {
  const dispatch = useDispatch();
  const { data, loading } = useSelector((state) => state.projects);
  const mustShow = !loading && !data.length;

  function handleChange(e) {
    if (e.target.value.length > MIN_SEARCH_LIMIT) {
      inputDebounce(e.target.value, (value) => dispatch(getBySubject(value)));
    }
  }

  return (
    <>
      <input
        type="text"
        placeholder="Please, intup subject"
        onChange={(e) => handleChange(e)}
      />
      {loading
      && <h3>Loading...</h3>}
      {mustShow
      && <h5>no projects</h5>}
      {!loading
      && data.map((elem) => (
        <BootstrapCard
          project={elem.name}
          creator={elem.owner.login}
          stargazers={elem.stargazers_count}
          watchers={elem.watchers_count}
          url={elem.html_url}
          key={elem.id}
        />
      ))}
    </>
  );
}

export default App;
