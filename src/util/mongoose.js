module.exports = {
  mutipleMongooseToObject: function (mongooses) {
    const objects = mongooses.map((mongoose) => mongoose.toObject());
    return objects;
  },
  mongooseToObject: function (mongoose) {
    return mongoose ? mongoose.toObject() : mongoose;
  },
};
