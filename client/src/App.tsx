import Example from '@/Example'; // This throws "Unsafe assignment of an `any` value. eslint(@typescript-eslint/no-unsafe-assignment)" and "Unsafe construction of an any type value. eslint(@typescript-eslint/no-unsafe-call)" at line 5
// import Example from './Example'; // This works fine

const App: React.FC = () => {
  const example = new Example();
  return 'Hello!';
};

export default App;
