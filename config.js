exports.DATABASE_URL = process.env.DATABASE_URL ||
                       global.DATABASE_URL ||
                       (process.env.NODE_ENV === 'production' ?
                            'mongodb://virenb:hakeem3@ds027175.mlab.com:27175/mongo-shopping-list' :
                            'mongodb://virenb:hakeem3@ds027175.mlab.com:27175/mongo-shopping-list');
exports.PORT = process.env.PORT || 8080;