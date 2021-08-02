import Namespace from '../../types/Namespace';

export const NAMESPACES: Namespace[] = [
  {
    name: 'bookinfo',
    labels: { 'istio-injection': 'enabled', 'kubernetes.io/metadata.name': 'bookinfo' }
  },
  { name: 'default', labels: { 'kubernetes.io/metadata.name': 'default' } },
  {
    name: 'ingress-nginx',
    labels: {
      'addonmanager.kubernetes.io/mode': 'Reconcile',
      'app.kubernetes.io/instance': 'ingress-nginx',
      'app.kubernetes.io/name': 'ingress-nginx',
      'kubernetes.io/metadata.name': 'ingress-nginx'
    }
  },
  {
    name: 'istio-system',
    labels: { 'kubernetes.io/metadata.name': 'istio-system', 'topology.istio.io/network': 'network-default' }
  }
];
