import { React } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import BootstrapCard from './components/BootstrapCard';
import { getBySubject } from './store/entities/Projects/thunk';
import inputDebounce from './utils/inputDebounce';
// import { minSearchLimit } from './constants'

function App() {
  const dispatch = useDispatch();
  const { data } = useSelector((state) => state.projects);
  const { loading } = useSelector((state) => state.projects);

  return (
    <>
      <input
        type="text"
        placeholder="Please, intup subject"
        onChange={(e) => {
          // для установки минимального кол-ва символов для поиска
          // if(e.target.value.length > minSearchLimit) dispatch(getBySubject(e.target.value))
          inputDebounce(e.target.value, (value) => dispatch(getBySubject(value)));
        }}
      />
      {loading
      && <h3>Loading...</h3>}
      {!loading && !data.length
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
