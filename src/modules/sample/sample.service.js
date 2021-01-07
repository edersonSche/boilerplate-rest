module.exports = {
  createSample: (sampleDTO) => {
    return { ...sampleDTO };
  },

  updateSample: (sampleDTO, id) => {
    return { ...sampleDTO, id };
  },

  deleteSample: (id) => {
    return { id };
  }
};
