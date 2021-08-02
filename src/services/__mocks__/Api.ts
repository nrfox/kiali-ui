import { JaegerInfo } from '../../types/JaegerInfo';
import Namespace from '../../types/Namespace';
import { ServiceDetailsInfo } from '../../types/ServiceInfo';
import * as GraphData from '../__mockData__/getGraphElements';
import * as JaegerInfoData from '../__mockData__/getJaegerInfo';
import * as NamespaceData from '../__mockData__/getNamespaces';
import * as ServerConfigData from '../__mockData__/getServerConfig';
import * as ServiceData from '../__mockData__/getServiceDetail';
import * as ServerStatusData from '../__mockData__/getStatus';

export const getGraphElements = (params: any) => {
  if (GraphData.hasOwnProperty(params.namespaces)) {
    return Promise.resolve({ data: GraphData[params.namespaces] });
  } else {
    return Promise.resolve({ data: {} });
  }
};

export const getServiceDetail = (_namespace: string, _service: string): Promise<ServiceDetailsInfo> => {
  return Promise.resolve(ServiceData.SERVICE_DETAILS);
};

export const getStatus = () => {
  return Promise.resolve({ data: ServerStatusData.SERVER_STATUS });
};

export const getNamespaces = (): Promise<Namespace[]> => {
  return Promise.resolve(NamespaceData.NAMESPACES);
};

export const getJaegerInfo = (): Promise<JaegerInfo> => {
  return Promise.resolve(JaegerInfoData.JAEGER_INFO);
};

export const getServerConfig = () => {
  return Promise.resolve({ data: ServerConfigData.SERVER_CONFIG });
};

export const getErrorString = () => '';
export const getErrorDetail = () => '';
