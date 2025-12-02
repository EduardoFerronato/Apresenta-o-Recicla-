import React from 'react';
import { SlideProps } from '../../types';
import { User, Shield, UserCheck, ArrowRight } from 'lucide-react';

export const FlowSlide: React.FC<SlideProps> = ({ data }) => {
  return (
    <div className="h-full p-8 flex flex-col justify-center bg-gray-900">
      <h2 className="text-4xl font-bold text-white mb-12 text-center">{data.title}</h2>
      
      <div className="flex flex-col md:flex-row justify-between items-stretch gap-6 max-w-7xl mx-auto w-full h-[60vh]">
        
        {/* Common User Column */}
        <div className="flex-1 bg-gray-800 rounded-xl p-4 flex flex-col items-center border-t-4 border-blue-500 relative">
          <div className="bg-blue-500 p-3 rounded-full -mt-10 mb-6 shadow-lg">
            <User className="text-white" size={24} />
          </div>
          <h3 className="text-xl font-bold text-blue-400 mb-6">Usuário Comum</h3>
          
          <div className="w-full space-y-4">
            <div className="bg-gray-700 p-3 rounded text-center text-sm">Acessar Plataforma</div>
            <ArrowRight className="mx-auto text-gray-500 transform rotate-90" size={16} />
            <div className="bg-gray-700 p-3 rounded text-center text-sm border border-blue-500">Selecionar Material</div>
            <ArrowRight className="mx-auto text-gray-500 transform rotate-90" size={16} />
            <div className="bg-gray-700 p-3 rounded text-center text-sm">Exibir Mapa</div>
            <ArrowRight className="mx-auto text-gray-500 transform rotate-90" size={16} />
            <div className="bg-gray-700 p-3 rounded text-center text-sm">Ver Detalhes do Ponto</div>
          </div>
        </div>

        {/* Authenticated User Column */}
        <div className="flex-1 bg-gray-800 rounded-xl p-4 flex flex-col items-center border-t-4 border-brand-primary relative">
          <div className="bg-brand-primary p-3 rounded-full -mt-10 mb-6 shadow-lg">
            <UserCheck className="text-white" size={24} />
          </div>
          <h3 className="text-xl font-bold text-brand-primary mb-6">Usuário Autenticado</h3>
          
          <div className="w-full space-y-4">
            <div className="bg-gray-700 p-3 rounded text-center text-sm">Login / Cadastro</div>
            <ArrowRight className="mx-auto text-gray-500 transform rotate-90" size={16} />
            <div className="grid grid-cols-2 gap-2">
                <div className="bg-brand-primary/20 p-2 rounded text-center text-xs border border-brand-primary">Cadastrar Novo Ponto</div>
                <div className="bg-brand-primary/20 p-2 rounded text-center text-xs border border-brand-primary">Editar Seus Pontos</div>
            </div>
            <ArrowRight className="mx-auto text-gray-500 transform rotate-90" size={16} />
            <div className="bg-gray-700 p-3 rounded text-center text-sm">Validar Dados</div>
            <ArrowRight className="mx-auto text-gray-500 transform rotate-90" size={16} />
            <div className="bg-gray-700 p-3 rounded text-center text-sm">Salvar no Banco</div>
          </div>
        </div>

        {/* Admin Column */}
        <div className="flex-1 bg-gray-800 rounded-xl p-4 flex flex-col items-center border-t-4 border-red-500 relative">
          <div className="bg-red-500 p-3 rounded-full -mt-10 mb-6 shadow-lg">
            <Shield className="text-white" size={24} />
          </div>
          <h3 className="text-xl font-bold text-red-400 mb-6">Administrador</h3>
          
          <div className="w-full space-y-4">
            <div className="bg-gray-700 p-3 rounded text-center text-sm">Acessar Painel</div>
            <ArrowRight className="mx-auto text-gray-500 transform rotate-90" size={16} />
            <div className="bg-gray-700 p-3 rounded text-center text-sm">Ver Denúncias/Reports</div>
            <ArrowRight className="mx-auto text-gray-500 transform rotate-90" size={16} />
            <div className="bg-red-500/20 p-3 rounded text-center text-sm border border-red-500">Moderar Conteúdo</div>
            <ArrowRight className="mx-auto text-gray-500 transform rotate-90" size={16} />
            <div className="bg-gray-700 p-3 rounded text-center text-sm">Atualizar Mapa Global</div>
          </div>
        </div>

      </div>
    </div>
  );
};