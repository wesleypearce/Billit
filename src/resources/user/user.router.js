import { Router } from 'express'

const router = Router()

router
  .route('/')
  .get((req, res) => res.send('hi there'))
  .post((req, res) => res.send('hi there'))

router
  .route('/:id')
  .get((req, res) => res.send('hi there'))
  .put((req, res) => res.send('hi there'))
  .delete((req, res) => res.send('hi there'))

export default router
