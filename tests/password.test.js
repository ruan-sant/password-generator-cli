const { gerarSenha } = require('../src/index');

test('senha tem tamanho padrão 8', () => {
  const senha = gerarSenha();
  expect(senha.length).toBe(8);
});

test('senha tem tamanho definido', () => {
  const senha = gerarSenha(12);
  expect(senha.length).toBe(12);
});

test('senha não é vazia', () => {
  const senha = gerarSenha(10);
  expect(senha).not.toBe('');
});

test('senhas geradas são diferentes', () => {
  const senha1 = gerarSenha(10);
  const senha2 = gerarSenha(10);
  expect(senha1).not.toBe(senha2);
});

test('senha contém apenas caracteres permitidos', () => {
  const senha = gerarSenha(10);
  const regex = /^[a-zA-Z0-9!@#$%]+$/;
  expect(regex.test(senha)).toBe(true);
});