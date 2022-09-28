import { useSelector, useDispatch } from 'react-redux';
import { increment, decrement, incrementByAmount } from './store/slices/counter';

export function App() {
  const { value } = useSelector(state => state.counter);
  const dispatch = useDispatch();

  return (
    <div>
      <div>
        <p>{ value }</p>
        <button
          aria-label="Increment value"
          onClick={() => dispatch(increment())}
        >
          Increment
        </button>
        <button
          aria-label="Decrement value"
          onClick={() => dispatch(decrement())}
        >
          Decrement
        </button>
        <button
          aria-label="Increment by 2"
          onClick={() => dispatch(incrementByAmount(2))}
        >
          Increment by 2
        </button>
      </div>
    </div>
  );
};

export default App;