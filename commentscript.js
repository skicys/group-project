
async function submitComment() {
  const userComment = document.getElementById('userComment').value;

  if (!userComment.trim()) {
    alert('Please enter a comment!');
    return;
  }

  // 显示加载信息
  const responseDiv = document.getElementById('response');
  responseDiv.textContent = 'Generating response...';

  try {
    // 调用 OpenAI API
    const apiResponse = await fetch('https://api.openai.com/v1/completions', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer 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` 
      },
      body: JSON.stringify({
        model: "text-davinci-003", 
        prompt: `The user left the following comment about a travel destination: "${userComment}". Based on this comment, summarize their preferences and suggest similar destinations.`,
        max_tokens: 150,
        temperature: 0.7
      })
    });

    if (!apiResponse.ok) {
      throw new Error(`OpenAI API error: ${apiResponse.statusText}`);
    }

    const apiResult = await apiResponse.json();
    const chatGPTResponse = apiResult.choices[0].text.trim();

    // 显示响应内容
    responseDiv.textContent = chatGPTResponse;

  } catch (error) {
    console.error('发生错误:', error);
    responseDiv.textContent = 'Failed to generate a response. Please try again later.';
  }
}
