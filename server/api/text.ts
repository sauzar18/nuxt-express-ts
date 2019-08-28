import { Router } from 'express'
const router = Router()
router.get('/test', (req, res) => {
  res.json({ id: 0, Message: 'success' })
})
export default router
