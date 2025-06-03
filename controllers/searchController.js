const Prompt = require('../models/Prompt');

exports.searchPrompts = async (req, res) => {
  try {
    const q = req.query.q;
    if (!q) {
      return res.status(400).json({ message: 'Query parameter q is required' });
    }


    const prompts = await Prompt.find(
      { 
        ownerId: req.user._id,
        $text: { $search: q }
      },
      
      { score: { $meta: 'textScore' } }
    ).sort({ score: { $meta: 'textScore' } });

    return res.json(prompts);
  } catch (err) {
    console.error(err);
    return res.status(500).json({ message: 'Server error' });
  }
};