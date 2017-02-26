import mongoose, { Schema } from 'mongoose'
import dbEntity from './dbEntity'

for(let item in dbEntity) {
    mongoose.model(item, new Schema(dbEntity[item]))
}

const _getEntity = function(type) {
    return mongoose.model(type)
}

export const getEntity = (type) => {
    return _getEntity(type)
}