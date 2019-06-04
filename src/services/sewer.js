import { http } from './api';

export const getLastSewersRegistered = async function () {
  const sewers = await http('sewers');
  console.log({ sewers });

  return sewers;
}
