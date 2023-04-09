import { useDispatch } from 'react-redux';
import { setFilter } from 'redux/actions';

const Filter = () => {
  const dispatch = useDispatch();
  return (
    <div>
      <label htmlFor="filter">Find contacts by name</label>
      <input
        id="filter"
        type="text"
        name="filter"
        onChange={evt => {
          dispatch(setFilter(evt.currentTarget.value));
        }}
      />
    </div>
  );
};

export default Filter;
