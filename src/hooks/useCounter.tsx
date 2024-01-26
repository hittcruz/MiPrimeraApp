import {useState} from 'react';

export const useCounter = (initial: number) => {
  const [contador, setContador] = useState(initial);

  const onPressClick = (numero: number) => {
    setContador(contador + numero);
  };

  return {
    contador,
    onPressClick,
  };
};
