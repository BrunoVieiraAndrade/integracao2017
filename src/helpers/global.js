import React, { Component } from 'react';

export const VISAO_GERAL_CATEGORIA = 'visao-geral';
export const CURSO_CATEGORIA = 'curso';
export const IDENTIFICACAO_TOPICO = 'identificacao';
export const CONTEXTO_TOPICO = 'contexto';
export const EXPOSICAO_DE_MOTIVOS_TOPICO = 'exposicao-de-motivos';
export const OBJETIVOS_TOPICO = 'objetivos';
export const EXPECTATIVA_DA_FORMACAO_DO_PROFISSIONAL_TOPICO = 'expectativa-da-formacao-do-profissional';
export const PRINCIPIOS_NORTEADORES = 'principios-norteadores';

export const renderSubtopicText = (titulo, conteudo) => {
  return (
    <div>
      { titulo ? <h4 className="mt-xl mb-none pb-none text-uppercase"> { titulo }</h4> : '' }
      {conteudo.split('\n').map((item, key) => {
        return <p className="mt-lg">{item}</p>
      })}
    </div>
  );
};