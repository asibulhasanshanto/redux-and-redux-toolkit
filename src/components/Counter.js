import { useSelector, useDispatch } from 'react-redux';
import classes from './Counter.module.css';
import { counterActions } from '../store/index';

const Counter = () => {

  const counter = useSelector(state => state.counter);
  const show = useSelector(state => state.showCounter);
  const dispatch = useDispatch();

  const toggleCounterHandler = () => {
    dispatch(counterActions.toggleCounter());
  };
  const incrementHandler = () => {
    dispatch(counterActions.increment());
  }
  const decrementHandler = () => {
    dispatch(counterActions.decrement());
  }
  const increseHandler = () => {
    dispatch(counterActions.increase(5));
  }

  return (
    <main className={classes.counter}>
      <h1>Redux Counter</h1>
      {(show) ? <div className={classes.value}>{counter}</div> : null}
      <div>
        <button onClick={incrementHandler}>Increment</button>
        <button onClick={increseHandler}>Increase 5</button>
        <button onClick={decrementHandler}>Decrement</button>
      </div>
      <button onClick={toggleCounterHandler}>Toggle Counter</button>
    </main>
  );
};

export default Counter;
