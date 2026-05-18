import React from 'react';
import { useCuenta } from '../hooks/useCuenta';
import { Input } from './Input';

export const CalculadoraPropina: React.FC = () => {
  const {
    subtotalInput,
    propinaInput,
    setSubtotalInput,
    setPropinaInput,
    resultado
  } = useCuenta();

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900 flex items-center justify-center p-4">
      <div className="w-full max-w-md bg-white dark:bg-gray-800 rounded-2xl shadow-xl p-6 border border-gray-100 dark:border-gray-700">
        
        
        <h1 className="text-2xl font-bold text-gray-800 dark:text-white mb-6 text-center">
          Calculadora de Propinas
        </h1>

        
        <div className="space-y-4 mb-8">
          <Input
            label="Total de la Cuenta ( L . )"
            name="subtotal"
            value={subtotalInput}
            onChange={(e) => setSubtotalInput(e.target.value)}
            
          />

          <Input
            label="Porcentaje de Propina (%)"
            name="porcentaje"
            value={propinaInput}
            onChange={(e) => setPropinaInput(e.target.value)}
            
          />
        </div>

        
        <div className="bg-blue-100 dark:bg-blue-950/40 rounded-xl p-5 space-y-3 border border-blue-300 dark:border-emerald-900/50">
          <div className="flex justify-between items-center text-sm text-gray-600 dark:text-gray-400">
            <span>Subtotal:</span>
            <span className="font-semibold">L. {resultado.subtotal.toFixed(2)}</span>
          </div>

          <div className="flex justify-between items-center text-sm text-gray-600 dark:text-gray-400">
            <span>Propina ({resultado.porcentajePropina}%):</span>
            <span className="font-semibold text-emerald-600 dark:text-emerald-400">
              +L. {resultado.propina.toFixed(2)}
            </span>
          </div>

          <hr className="border-blue-200 dark:border-emerald-800/60 my-2" />

          <div className="flex justify-between items-center text-lg font-bold text-gray-900 dark:text-white">
            <span>Total a Pagar:</span>
            <span className="text-xl text-emerald-700 dark:text-emerald-400">
              L. {resultado.totalConPropina.toFixed(2)}
            </span>
          </div>
        </div>

      </div>
    </div>
  );
};