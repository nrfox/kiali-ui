import { JaegerInfo } from '../../types/JaegerInfo';

export const JAEGER_INFO: JaegerInfo = {
  enabled: true,
  integration: true,
  url: '',
  namespaceSelector: true,
  whiteListIstioSystem: ['jaeger-query', 'istio-ingressgateway']
};
