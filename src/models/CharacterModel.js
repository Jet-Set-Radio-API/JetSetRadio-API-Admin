import mongoose from 'mongoose';
import { jsrConnection, jsrfConnection } from '../config/db.js';

const GallerySchema = new mongoose.Schema({
  photo: { type: String },
  description: { type: String }
}, { _id : false })

const JsrCharacterStatSchema = new mongoose.Schema({
  power: { type: String },
  technique: { type: String },
  graffiti: { type: String }
}, { _id : false })

const JsrfCharacterStatSchema = new mongoose.Schema({
  stamina: { type: String },
  gStamina: { type: String },
  sprayCans: { type: String },
  graffiti: { type: String },
  acceleration: { type: String },
  cornering: { type: String },
  grind: { type: String }
}, { _id : false })

const collectionName = "Character";
const jsrCharacterSchema = new mongoose.Schema (
  {
    name: { type: String, unique: true },
    aliases: [{ type: String }],
    descriptions: [{ type: String }],
    heroImage: { type: String },
    wikiPage: { type: String },
    age: { type: String },
    height: { type: String },
    trait: { type: String },
    likes: { type: String },
    gender: { type: String },
    debut: { type: String },
    graffitiTrademarks: [{ type: mongoose.Types.ObjectId, ref: 'GraffitiTag' }],
    gallery: [{ type: GallerySchema }],
    gameId: { type: mongoose.Types.ObjectId, ref: 'Game' },
    stats: { type: JsrCharacterStatSchema }
  }, { timestamps: true, versionKey: false, collection: collectionName }
);

const jsrfCharacterSchema = new mongoose.Schema (
  {
    name: { type: String, unique: true },
    aliases: [{ type: String }],
    descriptions: [{ type: String }],
    heroImage: { type: String },
    wikiPage: { type: String },
    age: { type: String },
    height: { type: String },
    trait: { type: String },
    likes: { type: String },
    gender: { type: String },
    debut: { type: String },
    gallery: [{ type: GallerySchema }],
    gameId: { type: mongoose.Types.ObjectId, ref: 'Game' },
    stats: { type: JsrfCharacterStatSchema }
  }, { timestamps: true, versionKey: false, collection: collectionName }
)

export const CharacterJSR = jsrConnection.model(collectionName, jsrCharacterSchema);
export const CharacterJSRF = jsrfConnection.model(collectionName, jsrfCharacterSchema);