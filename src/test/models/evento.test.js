import { it, describe, expect } from '@jest/globals';
import Evento from '../../models/evento.js';

describe('Testando modelo Evento', () => {
  const eventoObjeto = {
    id: 1,
    nome: 'Evento teste',
    descricao: 'Descrição teste evento',
    data: '2026-03-12',
    autor_id: 1,
    created_at: '2026-02-09 07:00:00',
    updated_at: '2026-02-09 07:00:00',
  };

  it('Deve instanciar um novo Evento', () => {
    const evento = new Evento(eventoObjeto);

    expect(evento).toEqual(
      expect.objectContaining(eventoObjeto),
    );
  });
});
