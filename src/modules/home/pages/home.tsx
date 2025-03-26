import { useHomeStore } from '../store';

export default function Home() {
  const { count, increment, decrement } = useHomeStore();
  return (
    <div>
      <h1>Home</h1>
      <div>
        <p>Count: {count}</p>
        <button onClick={increment}>Increment</button>
        <button onClick={decrement}>Decrement</button>
      </div>
    </div>
  );
}
