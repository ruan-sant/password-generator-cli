const { gerarSenha } = require('../src/index');

test('senha tem tamanho correto', () => {
  const senha = gerarSenha(10);
  expect(senha.length).toBe(10);
});