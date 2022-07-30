const express = require('express')
const router = express.Router()
const {
    getGoals,
    setGoals,
    updateGoal,
    deleteGoal,
} = require('../controller/goalController')

router.route('/').get(getGoals).post(setGoals)
router.route('/:id').delete(deleteGoal).put(updateGoal)


module.exports = router