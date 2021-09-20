/* tslint:disable */
/* eslint-disable */
/**
 * Kiali
 * Kiali project, observability for the Istio service mesh
 *
 * The version of the OpenAPI document: _
 *
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import globalAxios, { AxiosPromise, AxiosInstance } from 'axios';
import { Configuration } from '../configuration';
// Some imports not used depending on template conditions
// @ts-ignore
import {
  DUMMY_BASE_URL,
  assertParamExists,
  setApiKeyToObject,
  setBasicAuthToObject,
  setBearerAuthToObject,
  setOAuthToObject,
  setSearchParams,
  serializeDataIfNeeded,
  toPathString,
  createRequestFunction
} from '../common';
// @ts-ignore
import { BASE_PATH, COLLECTION_FORMATS, RequestArgs, BaseAPI, RequiredError } from '../base';
// @ts-ignore
import { InlineResponse400 } from '../models';
// @ts-ignore
import { InlineResponse503 } from '../models';
/**
 * AggregatesApi - axios parameter creator
 * @export
 */
export const AggregatesApiAxiosParamCreator = function (configuration?: Configuration) {
  return {
    /**
     * Endpoint to fetch metrics to be displayed, related to a single aggregate
     * @param {string} aggregate The aggregate name (label).
     * @param {string} aggregateValue The aggregate value (label value).
     * @param {string} namespace The namespace name.
     * @param {boolean} [avg] Flag for fetching histogram average. Default is true.
     * @param {Array<string>} [byLabels] List of labels to use for grouping metrics (via Prometheus \&#39;by\&#39; clause).
     * @param {string} [direction] Traffic direction: \&#39;inbound\&#39; or \&#39;outbound\&#39;.
     * @param {number} [duration] Duration of the query period, in seconds.
     * @param {Array<string>} [filters] List of metrics to fetch. Fetch all metrics when empty. List entries are Kiali internal metric names.
     * @param {Array<string>} [quantiles] List of quantiles to fetch. Fetch no quantiles when empty. Ex: [0.5, 0.95, 0.99].
     * @param {string} [rateFunc] Prometheus function used to calculate rate: \&#39;rate\&#39; or \&#39;irate\&#39;.
     * @param {string} [rateInterval] Interval used for rate and histogram calculation.
     * @param {string} [requestProtocol] Desired request protocol for the telemetry: For example, \&#39;http\&#39; or \&#39;grpc\&#39;.
     * @param {string} [reporter] Istio telemetry reporter: \&#39;source\&#39; or \&#39;destination\&#39;.
     * @param {number} [step] Step between [graph] datapoints, in seconds.
     * @param {string} [version] Filters metrics by the specified version.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    aggregateMetrics: async (
      aggregate: string,
      aggregateValue: string,
      namespace: string,
      avg?: boolean,
      byLabels?: Array<string>,
      direction?: string,
      duration?: number,
      filters?: Array<string>,
      quantiles?: Array<string>,
      rateFunc?: string,
      rateInterval?: string,
      requestProtocol?: string,
      reporter?: string,
      step?: number,
      version?: string,
      options: any = {}
    ): Promise<RequestArgs> => {
      // verify required parameter 'aggregate' is not null or undefined
      assertParamExists('aggregateMetrics', 'aggregate', aggregate);
      // verify required parameter 'aggregateValue' is not null or undefined
      assertParamExists('aggregateMetrics', 'aggregateValue', aggregateValue);
      // verify required parameter 'namespace' is not null or undefined
      assertParamExists('aggregateMetrics', 'namespace', namespace);
      const localVarPath = `/namespaces/{namespace}/aggregates/{aggregate}/{aggregateValue}/metrics`
        .replace(`{${'aggregate'}}`, encodeURIComponent(String(aggregate)))
        .replace(`{${'aggregateValue'}}`, encodeURIComponent(String(aggregateValue)))
        .replace(`{${'namespace'}}`, encodeURIComponent(String(namespace)));
      // use dummy base URL string because the URL constructor only accepts absolute URLs.
      const localVarUrlObj = new URL(localVarPath, DUMMY_BASE_URL);
      let baseOptions;
      if (configuration) {
        baseOptions = configuration.baseOptions;
      }

      const localVarRequestOptions = { method: 'GET', ...baseOptions, ...options };
      const localVarHeaderParameter = {} as any;
      const localVarQueryParameter = {} as any;

      if (avg !== undefined) {
        localVarQueryParameter['avg'] = avg;
      }

      if (byLabels) {
        localVarQueryParameter['byLabels[]'] = byLabels.join(COLLECTION_FORMATS.csv);
      }

      if (direction !== undefined) {
        localVarQueryParameter['direction'] = direction;
      }

      if (duration !== undefined) {
        localVarQueryParameter['duration'] = duration;
      }

      if (filters) {
        localVarQueryParameter['filters[]'] = filters.join(COLLECTION_FORMATS.csv);
      }

      if (quantiles) {
        localVarQueryParameter['quantiles[]'] = quantiles.join(COLLECTION_FORMATS.csv);
      }

      if (rateFunc !== undefined) {
        localVarQueryParameter['rateFunc'] = rateFunc;
      }

      if (rateInterval !== undefined) {
        localVarQueryParameter['rateInterval'] = rateInterval;
      }

      if (requestProtocol !== undefined) {
        localVarQueryParameter['requestProtocol'] = requestProtocol;
      }

      if (reporter !== undefined) {
        localVarQueryParameter['reporter'] = reporter;
      }

      if (step !== undefined) {
        localVarQueryParameter['step'] = step;
      }

      if (version !== undefined) {
        localVarQueryParameter['version'] = version;
      }

      setSearchParams(localVarUrlObj, localVarQueryParameter, options.query);
      let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
      localVarRequestOptions.headers = { ...localVarHeaderParameter, ...headersFromBaseOptions, ...options.headers };

      return {
        url: toPathString(localVarUrlObj),
        options: localVarRequestOptions
      };
    }
  };
};

/**
 * AggregatesApi - functional programming interface
 * @export
 */
export const AggregatesApiFp = function (configuration?: Configuration) {
  const localVarAxiosParamCreator = AggregatesApiAxiosParamCreator(configuration);
  return {
    /**
     * Endpoint to fetch metrics to be displayed, related to a single aggregate
     * @param {string} aggregate The aggregate name (label).
     * @param {string} aggregateValue The aggregate value (label value).
     * @param {string} namespace The namespace name.
     * @param {boolean} [avg] Flag for fetching histogram average. Default is true.
     * @param {Array<string>} [byLabels] List of labels to use for grouping metrics (via Prometheus \&#39;by\&#39; clause).
     * @param {string} [direction] Traffic direction: \&#39;inbound\&#39; or \&#39;outbound\&#39;.
     * @param {number} [duration] Duration of the query period, in seconds.
     * @param {Array<string>} [filters] List of metrics to fetch. Fetch all metrics when empty. List entries are Kiali internal metric names.
     * @param {Array<string>} [quantiles] List of quantiles to fetch. Fetch no quantiles when empty. Ex: [0.5, 0.95, 0.99].
     * @param {string} [rateFunc] Prometheus function used to calculate rate: \&#39;rate\&#39; or \&#39;irate\&#39;.
     * @param {string} [rateInterval] Interval used for rate and histogram calculation.
     * @param {string} [requestProtocol] Desired request protocol for the telemetry: For example, \&#39;http\&#39; or \&#39;grpc\&#39;.
     * @param {string} [reporter] Istio telemetry reporter: \&#39;source\&#39; or \&#39;destination\&#39;.
     * @param {number} [step] Step between [graph] datapoints, in seconds.
     * @param {string} [version] Filters metrics by the specified version.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    async aggregateMetrics(
      aggregate: string,
      aggregateValue: string,
      namespace: string,
      avg?: boolean,
      byLabels?: Array<string>,
      direction?: string,
      duration?: number,
      filters?: Array<string>,
      quantiles?: Array<string>,
      rateFunc?: string,
      rateInterval?: string,
      requestProtocol?: string,
      reporter?: string,
      step?: number,
      version?: string,
      options?: any
    ): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<{ [key: string]: Array<Metric> }>> {
      const localVarAxiosArgs = await localVarAxiosParamCreator.aggregateMetrics(
        aggregate,
        aggregateValue,
        namespace,
        avg,
        byLabels,
        direction,
        duration,
        filters,
        quantiles,
        rateFunc,
        rateInterval,
        requestProtocol,
        reporter,
        step,
        version,
        options
      );
      return createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration);
    }
  };
};

/**
 * AggregatesApi - factory interface
 * @export
 */
export const AggregatesApiFactory = function (configuration?: Configuration, basePath?: string, axios?: AxiosInstance) {
  const localVarFp = AggregatesApiFp(configuration);
  return {
    /**
     * Endpoint to fetch metrics to be displayed, related to a single aggregate
     * @param {string} aggregate The aggregate name (label).
     * @param {string} aggregateValue The aggregate value (label value).
     * @param {string} namespace The namespace name.
     * @param {boolean} [avg] Flag for fetching histogram average. Default is true.
     * @param {Array<string>} [byLabels] List of labels to use for grouping metrics (via Prometheus \&#39;by\&#39; clause).
     * @param {string} [direction] Traffic direction: \&#39;inbound\&#39; or \&#39;outbound\&#39;.
     * @param {number} [duration] Duration of the query period, in seconds.
     * @param {Array<string>} [filters] List of metrics to fetch. Fetch all metrics when empty. List entries are Kiali internal metric names.
     * @param {Array<string>} [quantiles] List of quantiles to fetch. Fetch no quantiles when empty. Ex: [0.5, 0.95, 0.99].
     * @param {string} [rateFunc] Prometheus function used to calculate rate: \&#39;rate\&#39; or \&#39;irate\&#39;.
     * @param {string} [rateInterval] Interval used for rate and histogram calculation.
     * @param {string} [requestProtocol] Desired request protocol for the telemetry: For example, \&#39;http\&#39; or \&#39;grpc\&#39;.
     * @param {string} [reporter] Istio telemetry reporter: \&#39;source\&#39; or \&#39;destination\&#39;.
     * @param {number} [step] Step between [graph] datapoints, in seconds.
     * @param {string} [version] Filters metrics by the specified version.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    aggregateMetrics(
      aggregate: string,
      aggregateValue: string,
      namespace: string,
      avg?: boolean,
      byLabels?: Array<string>,
      direction?: string,
      duration?: number,
      filters?: Array<string>,
      quantiles?: Array<string>,
      rateFunc?: string,
      rateInterval?: string,
      requestProtocol?: string,
      reporter?: string,
      step?: number,
      version?: string,
      options?: any
    ): AxiosPromise<{ [key: string]: Array<Metric> }> {
      return localVarFp
        .aggregateMetrics(
          aggregate,
          aggregateValue,
          namespace,
          avg,
          byLabels,
          direction,
          duration,
          filters,
          quantiles,
          rateFunc,
          rateInterval,
          requestProtocol,
          reporter,
          step,
          version,
          options
        )
        .then(request => request(axios, basePath));
    }
  };
};

/**
 * AggregatesApi - object-oriented interface
 * @export
 * @class AggregatesApi
 * @extends {BaseAPI}
 */
export class AggregatesApi extends BaseAPI {
  /**
   * Endpoint to fetch metrics to be displayed, related to a single aggregate
   * @param {string} aggregate The aggregate name (label).
   * @param {string} aggregateValue The aggregate value (label value).
   * @param {string} namespace The namespace name.
   * @param {boolean} [avg] Flag for fetching histogram average. Default is true.
   * @param {Array<string>} [byLabels] List of labels to use for grouping metrics (via Prometheus \&#39;by\&#39; clause).
   * @param {string} [direction] Traffic direction: \&#39;inbound\&#39; or \&#39;outbound\&#39;.
   * @param {number} [duration] Duration of the query period, in seconds.
   * @param {Array<string>} [filters] List of metrics to fetch. Fetch all metrics when empty. List entries are Kiali internal metric names.
   * @param {Array<string>} [quantiles] List of quantiles to fetch. Fetch no quantiles when empty. Ex: [0.5, 0.95, 0.99].
   * @param {string} [rateFunc] Prometheus function used to calculate rate: \&#39;rate\&#39; or \&#39;irate\&#39;.
   * @param {string} [rateInterval] Interval used for rate and histogram calculation.
   * @param {string} [requestProtocol] Desired request protocol for the telemetry: For example, \&#39;http\&#39; or \&#39;grpc\&#39;.
   * @param {string} [reporter] Istio telemetry reporter: \&#39;source\&#39; or \&#39;destination\&#39;.
   * @param {number} [step] Step between [graph] datapoints, in seconds.
   * @param {string} [version] Filters metrics by the specified version.
   * @param {*} [options] Override http request option.
   * @throws {RequiredError}
   * @memberof AggregatesApi
   */
  public aggregateMetrics(
    aggregate: string,
    aggregateValue: string,
    namespace: string,
    avg?: boolean,
    byLabels?: Array<string>,
    direction?: string,
    duration?: number,
    filters?: Array<string>,
    quantiles?: Array<string>,
    rateFunc?: string,
    rateInterval?: string,
    requestProtocol?: string,
    reporter?: string,
    step?: number,
    version?: string,
    options?: any
  ) {
    return AggregatesApiFp(this.configuration)
      .aggregateMetrics(
        aggregate,
        aggregateValue,
        namespace,
        avg,
        byLabels,
        direction,
        duration,
        filters,
        quantiles,
        rateFunc,
        rateInterval,
        requestProtocol,
        reporter,
        step,
        version,
        options
      )
      .then(request => request(this.axios, this.basePath));
  }
}
