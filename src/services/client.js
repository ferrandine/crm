export const getLastClientsRegistered = () => {
  return Promise.resolve([
    {
      uuid: "1",
      name: "Clément Lacaux",
      registeringDate: "Inscription hier"
    },
    {
      uuid: "2",
      name: "Wilsai Thys",
      registeringDate: "Inscription le lundi 13 avril"
    },
    {
      uuid: "3",
      name: "Belynda Mede",
      registeringDate: "Inscription le lundi 13 avril"
    }
  ]);
};
