function sleep(milliseconds) {
  return new Promise(resolvePromise => setTimeout(resolvePromise, milliseconds));
}

describe('Mock server', () => {
  it('Runs forever and intercepts graph api calls', () => {
    cy.intercept('/api/namespaces/graph', { statusCode: 503 });
    cy.pause();
    cy.wait(100000000000);
    expect(false).equals(true);
  });
});
