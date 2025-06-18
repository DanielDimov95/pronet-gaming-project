import { Router } from 'express';
import { getHouses } from '../controllers/houses.controller';
import { authenticateToken } from '../middleware/auth';

const router = Router();

/**
 * @swagger
 * /houses:
 *   get:
 *     tags: [Houses]
 *     summary: Get a list of houses from the Ice and Fire API
 *     security:
 *       - bearerAuth: []
 *     description: Returns a paginated list of houses.
 *     parameters:
 *       - in: query
 *         name: page
 *         schema:
 *           type: integer
 *         description: Page number (default 1)
 *       - in: query
 *         name: pageSize
 *         schema:
 *           type: integer
 *         description: Number of items per page (default 10)
 *     responses:
 *       200:
 *         description: A list of houses
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 type: object
 *       401:
 *         description: No token provided
 *       403:
 *         description: Invalid token
 */
router.get('/', authenticateToken, async (req, res, next) => {
  try {
    await getHouses(req, res, next);
  } catch (error) {
    next(error);
  }
});

export default router;