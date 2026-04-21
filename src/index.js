function gerarSenha(tamanho = 8) {
  const chars = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789!@#$%';
  let senha = '';

  for (let i = 0; i < tamanho; i++) {
    const randomIndex = Math.floor(Math.random() * chars.length);
    senha += chars[randomIndex];
  }

  return senha;
}

module.exports = { gerarSenha };

if (require.main === module) {
  const args = process.argv.slice(2);
  const tamanho = args[0] ? parseInt(args[0]) : 8;

  if (isNaN(tamanho)) {
    console.log("Use um número válido");
    process.exit(1);
  }

  console.log("Senha gerada:", gerarSenha(tamanho));
}