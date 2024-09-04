beforeEach(() => {
    const currentTest = expect.getState().currentTestName;
    console.info(`Running test: ${currentTest}`);
});

afterEach(() => {
    const testResult = expect.getState().currentTestName;
    const testStatus = expect.getState().assertionCalls > 0 ? "✅ Test Passed" : "❌ Test Failed";
    console.info(`${testStatus}: ${testResult}`);
  });
