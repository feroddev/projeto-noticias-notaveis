const mesCom30Dias = [4, 6, 9, 11];

function calcularDiasPassados(dataString: string) {
  const diaFornecido = Number(dataString.slice(0, 2));
  const mesFornecido = Number(dataString.slice(3, 5));
  const dia = new Date();
  const diaAtual = dia.getUTCDate();
  const mesAtual = dia.getUTCMonth() + 1;
  if (mesFornecido < mesAtual) {
    const diferenceMes = mesAtual - mesFornecido;
    if (mesCom30Dias.includes(mesFornecido)) {
      const diasPassados = (30 * diferenceMes - diaFornecido) + diaAtual;
      return diasPassados;
    } if (mesFornecido === 2) {
      const diasPassados = (28 * diferenceMes - diaFornecido) + diaAtual;
      return diasPassados;
    }
    const diasPassados = (31 * diferenceMes - diaFornecido) + diaAtual;
    return diasPassados;
  }

  if (diaFornecido > diaAtual) {
    if (mesCom30Dias.includes(mesFornecido)) {
      const diasPassados = (diaAtual - 1) + (30 - diaFornecido);
      return diasPassados;
    } if (mesFornecido === 2) {
      const diasPassados = (diaAtual - 1) + (28 - diaFornecido);
      return diasPassados;
    }
    const diasPassados = (diaAtual - 1) + (31 - diaFornecido);
    return diasPassados;
  }
  const diasPassados = diaAtual - diaFornecido;
  return diasPassados;
}

export default calcularDiasPassados;
