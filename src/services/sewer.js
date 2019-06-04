export const getLastSewersRegistered = () => {
  return Promise.resolve([
    {
      uuid: "1",
      name: "Julien Michalet",
      registeringDate: "coucou",
      photo: null
    },
    {
      uuid: "2",
      name: "Alison Charles",
      registeringDate: "coucou 2",
      photo: null
    }
  ]);
};
