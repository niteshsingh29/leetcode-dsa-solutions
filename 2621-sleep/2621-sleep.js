/**
 * @param {number} millis
 */
async function sleep(millis) {
  const waitFor = async (time = null) => {
    return new Promise((res) => setTimeout(res, time));
  };
  const promise = await waitFor(millis);
  return promise;
}

/**
 * let t = Date.now()
 * sleep(100).then(() => console.log(Date.now() - t)) // 100
 */
