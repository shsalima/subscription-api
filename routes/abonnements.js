import express from 'express'

import {creatAbonnement} from '../controllers/abonnementController.js'


const route=express.Router()


route.post('/create',creatAbonnement)

export default route