import { ServerStatus } from '../../types/ServerStatus';

export const SERVER_STATUS: ServerStatus = {
  status: {
    'Kiali console version': '1.38.0-local-6ac4c9c53e9942ee5d3a8c253ce725bcf9bf51a6',
    'Kiali container version': 'v1.39.0-SNAPSHOT',
    'Kiali core commit hash': '08b9524e117b72cef4849cac1ffdbfcdf42470d7',
    'Kiali core version': 'v1.39.0-SNAPSHOT',
    'Kiali state': 'running'
  },
  externalServices: [
    {
      name: 'Istio',
      version: '1.9.5'
    },
    {
      name: 'Prometheus',
      version: '2.21.0'
    },
    {
      name: 'Kubernetes',
      version: 'v1.21.2'
    },
    {
      name: 'Grafana'
    },
    {
      name: 'Jaeger'
    }
  ],
  warningMessages: []
};
