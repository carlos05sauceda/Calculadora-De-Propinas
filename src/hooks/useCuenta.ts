import { useState, useEffect } from 'react';
import type { ITotalCuenta } from '../types/Cuenta';

export const useCuenta = () => {
  
  const [subtotalInput, setSubtotalInput] = useState<string>('');
  const [propinaInput, setPropinaInput] = useState<string>('');
  

  const [resultado, setResultado] = useState<ITotalCuenta>({
    subtotal: 0,
    porcentajePropina: 0,
    propina: 0,
    totalConPropina: 0
  });

  useEffect(() => {
    const subtotal = parseFloat(subtotalInput);
    const porcentaje = parseFloat(propinaInput);

    
    if (isNaN(subtotal) || subtotal < 0 || isNaN(porcentaje) || porcentaje < 0) {
      setResultado({ subtotal: 0, porcentajePropina: 0, propina: 0, totalConPropina: 0 });
      return;
    }

    
    const propinaCalculada = subtotal * (porcentaje / 100);
    const totalFinal = subtotal + propinaCalculada;

    setResultado({
      subtotal,
      porcentajePropina: porcentaje,
      propina: parseFloat(propinaCalculada.toFixed(2)),
      totalConPropina: parseFloat(totalFinal.toFixed(2))
    });
  }, [subtotalInput, propinaInput]); 

  return {
    subtotalInput,
    propinaInput,
    setSubtotalInput,
    setPropinaInput,
    resultado
  };
};