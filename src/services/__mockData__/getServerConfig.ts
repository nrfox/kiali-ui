import { ServerConfig } from '../../types/ServerConfig';

export const SERVER_CONFIG: ServerConfig = {
  clusterInfo: {
    name: 'cluster-default',
    network: 'network-default'
  },
  clusters: {
    'cluster-default': {
      apiEndpoint: 'https://10.96.0.1:443',
      isKialiHome: true,
      kialiInstances: [
        {
          serviceName: 'kiali',
          namespace: 'istio-system',
          operatorResource: 'kiali-operator/kiali',
          url: '',
          version: 'dev'
        }
      ],
      name: 'cluster-default',
      network: 'network-default',
      secretName: ''
    }
  },
  extensions: {
    iter8: {
      enabled: false
    }
  },
  healthConfig: {
    rate: [
      {
        tolerance: [
          {
            code: '5XX',
            degraded: 0,
            failure: 10,
            protocol: 'http',
            direction: '.*'
          },
          {
            code: '4XX',
            degraded: 10,
            failure: 20,
            protocol: 'http',
            direction: '.*'
          },
          {
            code: '^[1-9]$|^1[0-6]$',
            degraded: 0,
            failure: 10,
            protocol: 'grpc',
            direction: '.*'
          },
          {
            code: '^-$',
            degraded: 0,
            failure: 10,
            protocol: 'http|grpc',
            direction: '.*'
          }
        ]
      }
    ]
  },
  istioAnnotations: {
    istioInjectionAnnotation: 'sidecar.istio.io/inject'
  },
  istioCanaryRevision: {
    current: '1.11',
    upgrade: '1.12'
  },
  istioIdentityDomain: 'svc.cluster.local',
  istioNamespace: 'istio-system',
  istioLabels: {
    appLabelName: 'app',
    injectionLabelName: 'istio-injection',
    injectionLabelRev: 'istio.io/rev',
    versionLabelName: 'version'
  },
  kialiFeatureFlags: {
    istioInjectionAction: true,
    istioUpgradeAction: false,
    uiDefaults: {
      graph: {
        findOptions: [
          {
            description: 'Find: slow edges (\u003e 1s)',
            expression: 'rt \u003e 1000'
          },
          {
            description: 'Find: unhealthy nodes',
            expression: '! healthy'
          },
          {
            description: 'Find: unknown nodes',
            expression: 'name = unknown'
          }
        ],
        hideOptions: [
          {
            description: 'Hide: healthy nodes',
            expression: 'healthy'
          },
          {
            description: 'Hide: unknown nodes',
            expression: 'name = unknown'
          }
        ]
      },
      metricsPerRefresh: '1m',
      refreshInterval: '15s'
    }
  },
  prometheus: {
    globalScrapeInterval: 15
  }
};
