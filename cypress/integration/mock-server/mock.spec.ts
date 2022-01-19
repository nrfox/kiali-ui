function sleep(milliseconds) {
  return new Promise(resolvePromise => setTimeout(resolvePromise, milliseconds));
}

const url = 'https://kiali-istio-system.apps.kiali-soak.maistra.upshift.redhat.com/console/graph/namespaces/?edges=noEdgeLabels&graphType=versionedApp&unusedNodes=false&operationNodes=false&injectServiceNodes=true&duration=60&refresh=15000&namespaces=istio-system&layout=dagre#access_token=sha256~LWBOGgCFStbkWiOVtIBxakUade_MAR2VCyX3ACSqMHo&expires_in=86400&scope=user:full&token_type=Bearer'

describe('Mock server', () => {
  it('Runs forever and intercepts graph api calls', () => {
    cy.intercept('GET', '/api/namespaces/graph*', { fixture: 'large_graph.json' })
    cy.visit(url)
    // cy.debug() 
    cy.pause()
  });
});
