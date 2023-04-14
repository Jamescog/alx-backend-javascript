// this function takes one argument and create new array called queue
const guardrail = (mathFunction) => {
  const queue = [];
  try {
    const result = mathFunction();
    queue.push(result);
  } catch (error) {
    queue.push('Error: ' + error.message);
  } finally {
    queue.push('Guardrail was processed');
  }
  return queue;
};
export default guardrail;
