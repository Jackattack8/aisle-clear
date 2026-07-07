export default async function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  const { product, allergens, location } = req.body;

  if (!product || !allergens || !allergens.length) {
    return res.status(400).json({ error: 'Missing product or allergens' });
  }

  const locationContext = location
    ? `The user is in ${location} (US). Include 3 to 5 local businesses in or near that area known to carry allergen-free versions of this product.`
    : `No location provided. Only return packaged products available in the US. Return an empty array for local.`;

  const prompt = `You are a food allergen assistant helping families find safe packaged food products. The user wants "${product}" containing NONE of these ingredients or their derivatives: ${allergens.join(', ')}.

${locationContext}

Respond with ONLY a valid JSON object, no markdown, no code fences, no explanation. Use this exact structure:
{"packaged":[{"name":"product name","brand":"brand name","ingredients":"full ingredient list","caution":null}],"local":[{"name":"business name","description":"one sentence why relevant","caution":null}],"location":"${location || ''}"}

Rules:
- Only include products confirmed free of ALL listed allergens based on their known ingredient lists.
- Include 4 to 8 packaged products if available.
- Always include the full ingredient list for every packaged product. Never leave ingredients blank.
- Set caution to a warning string if a banned ingredient may be hiding (e.g. banana as egg replacer in GF baking), otherwise null.
- All results must be US-based unless location indicates otherwise.
- For local results, include real business types such as allergen-friendly bakeries, natural grocery stores, or specialty food retailers relevant to the location.`;

  try {
    const response = await fetch('https://api.anthropic.com/v1/messages', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'x-api-key': process.env.ANTHROPIC_API_KEY,
        'anthropic-version': '2023-06-01',
      },
      body: JSON.stringify({
        model: 'claude-sonnet-4-6',
        max_tokens: 1500,
        messages: [{ role: 'user', content: prompt }],
      }),
    });

    if (!response.ok) {
      const err = await response.text();
      return res.status(500).json({ error: `Anthropic API error: ${err}` });
    }

    const data = await response.json();
    const raw = data.content?.find(b => b.type === 'text')?.text || '';
    const clean = raw.replace(/```json|```/g, '').trim();
    const parsed = JSON.parse(clean);

    return res.status(200).json(parsed);
  } catch (err) {
    return res.status(500).json({ error: err.message });
  }
}
