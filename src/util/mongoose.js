module.exports = {
  mutipleMongooseToObject: function (mongooses) {
    return mongooses.map((mongoose) => mongoose.toOject());
  },
  mongooseToObject: function (mongoose) {
    return mongoose ? mongoose.toObject() : mongoose;
  },
};
