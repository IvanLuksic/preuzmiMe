module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert(
      "FileProperties",
      [
        {
          link: "test",
          path: "uploads/test.png",
          type: "image/png",
          time_uploaded: new Date(),
          time_expires: new Date(2021, 5, 30),
          password: "password",
          num_dl_left: 10,
          uploader_id: 'cookieideovdje',
          createdAt: new Date(),
          updatedAt: new Date(),
          
        }],
      {}
    );
  },
  down: async (queryInterface, Sequelize) => {

    await queryInterface.bulkDelete("FileProperties", null, {});
  },
};
