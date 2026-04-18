function gerarSenha(tamanho = 8) {
  const chars = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789!@#$%';
  let senha = '';

  for (let i = 0; i < tamanho; i++) {
    const randomIndex = Math.floor(Math.random() * chars.length);
    senha += chars[randomIndex];
  }

  return senha;
}

const tamanho = process.argv[2] || 8;

console.log("Senha gerada:", gerarSenha(tamanho));