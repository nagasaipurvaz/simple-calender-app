const express = require('express');
const router = express.Router();
const Event = require('../models/Event');

// GET events
router.get('/:userId', async (req, res) => {
  const events = await Event.find({ userId: req.params.userId });
  res.json(events);
});

// POST event
router.post('/', async (req, res) => {
  const event = new Event(req.body);
  await event.save();
  res.json(event);
});

// PUT event
router.put('/:id', async (req, res) => {
  const updated = await Event.findByIdAndUpdate(req.params.id, req.body, { new: true });
  res.json(updated);
});

// DELETE event
router.delete('/:id', async (req, res) => {
  await Event.findByIdAndDelete(req.params.id);
  res.json({ message: 'Event deleted' });
});

module.exports = router;
