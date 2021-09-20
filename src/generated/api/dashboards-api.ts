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
// @ts-ignore
import { MonitoringDashboard } from '../models';
/**
 * DashboardsApi - axios parameter creator
 * @export
 */
export const DashboardsApiAxiosParamCreator = function (configuration?: Configuration) {
  return {
    /**
     * Endpoint to fetch a custom dashboard
     * @param {string} namespace The namespace name.
     * @param {string} dashboard The dashboard resource name.
     * @param {string} [additionalLabels] In custom dashboards, additional labels that are made available for grouping in the UI, regardless which aggregations are defined in the MonitoringDashboard CR
     * @param {boolean} [avg] Flag for fetching histogram average. Default is true.
     * @param {Array<string>} [byLabels] List of labels to use for grouping metrics (via Prometheus \&#39;by\&#39; clause).
     * @param {number} [duration] Duration of the query period, in seconds.
     * @param {string} [labelsFilters] In custom dashboards, labels filters to use when fetching metrics, formatted as key:value pairs. Ex: \&quot;app:foo,version:bar\&quot;.
     * @param {Array<string>} [quantiles] List of quantiles to fetch. Fetch no quantiles when empty. Ex: [0.5, 0.95, 0.99].
     * @param {string} [rateFunc] Prometheus function used to calculate rate: \&#39;rate\&#39; or \&#39;irate\&#39;.
     * @param {string} [rateInterval] Interval used for rate and histogram calculation.
     * @param {number} [step] Step between [graph] datapoints, in seconds.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    customDashboard: async (
      namespace: string,
      dashboard: string,
      additionalLabels?: string,
      avg?: boolean,
      byLabels?: Array<string>,
      duration?: number,
      labelsFilters?: string,
      quantiles?: Array<string>,
      rateFunc?: string,
      rateInterval?: string,
      step?: number,
      options: any = {}
    ): Promise<RequestArgs> => {
      // verify required parameter 'namespace' is not null or undefined
      assertParamExists('customDashboard', 'namespace', namespace);
      // verify required parameter 'dashboard' is not null or undefined
      assertParamExists('customDashboard', 'dashboard', dashboard);
      const localVarPath = `/namespaces/{namespace}/customdashboard/{dashboard}`
        .replace(`{${'namespace'}}`, encodeURIComponent(String(namespace)))
        .replace(`{${'dashboard'}}`, encodeURIComponent(String(dashboard)));
      // use dummy base URL string because the URL constructor only accepts absolute URLs.
      const localVarUrlObj = new URL(localVarPath, DUMMY_BASE_URL);
      let baseOptions;
      if (configuration) {
        baseOptions = configuration.baseOptions;
      }

      const localVarRequestOptions = { method: 'GET', ...baseOptions, ...options };
      const localVarHeaderParameter = {} as any;
      const localVarQueryParameter = {} as any;

      if (additionalLabels !== undefined) {
        localVarQueryParameter['additionalLabels'] = additionalLabels;
      }

      if (avg !== undefined) {
        localVarQueryParameter['avg'] = avg;
      }

      if (byLabels) {
        localVarQueryParameter['byLabels[]'] = byLabels.join(COLLECTION_FORMATS.csv);
      }

      if (duration !== undefined) {
        localVarQueryParameter['duration'] = duration;
      }

      if (labelsFilters !== undefined) {
        localVarQueryParameter['labelsFilters'] = labelsFilters;
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

      if (step !== undefined) {
        localVarQueryParameter['step'] = step;
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
 * DashboardsApi - functional programming interface
 * @export
 */
export const DashboardsApiFp = function (configuration?: Configuration) {
  const localVarAxiosParamCreator = DashboardsApiAxiosParamCreator(configuration);
  return {
    /**
     * Endpoint to fetch a custom dashboard
     * @param {string} namespace The namespace name.
     * @param {string} dashboard The dashboard resource name.
     * @param {string} [additionalLabels] In custom dashboards, additional labels that are made available for grouping in the UI, regardless which aggregations are defined in the MonitoringDashboard CR
     * @param {boolean} [avg] Flag for fetching histogram average. Default is true.
     * @param {Array<string>} [byLabels] List of labels to use for grouping metrics (via Prometheus \&#39;by\&#39; clause).
     * @param {number} [duration] Duration of the query period, in seconds.
     * @param {string} [labelsFilters] In custom dashboards, labels filters to use when fetching metrics, formatted as key:value pairs. Ex: \&quot;app:foo,version:bar\&quot;.
     * @param {Array<string>} [quantiles] List of quantiles to fetch. Fetch no quantiles when empty. Ex: [0.5, 0.95, 0.99].
     * @param {string} [rateFunc] Prometheus function used to calculate rate: \&#39;rate\&#39; or \&#39;irate\&#39;.
     * @param {string} [rateInterval] Interval used for rate and histogram calculation.
     * @param {number} [step] Step between [graph] datapoints, in seconds.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    async customDashboard(
      namespace: string,
      dashboard: string,
      additionalLabels?: string,
      avg?: boolean,
      byLabels?: Array<string>,
      duration?: number,
      labelsFilters?: string,
      quantiles?: Array<string>,
      rateFunc?: string,
      rateInterval?: string,
      step?: number,
      options?: any
    ): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<MonitoringDashboard>> {
      const localVarAxiosArgs = await localVarAxiosParamCreator.customDashboard(
        namespace,
        dashboard,
        additionalLabels,
        avg,
        byLabels,
        duration,
        labelsFilters,
        quantiles,
        rateFunc,
        rateInterval,
        step,
        options
      );
      return createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration);
    }
  };
};

/**
 * DashboardsApi - factory interface
 * @export
 */
export const DashboardsApiFactory = function (configuration?: Configuration, basePath?: string, axios?: AxiosInstance) {
  const localVarFp = DashboardsApiFp(configuration);
  return {
    /**
     * Endpoint to fetch a custom dashboard
     * @param {string} namespace The namespace name.
     * @param {string} dashboard The dashboard resource name.
     * @param {string} [additionalLabels] In custom dashboards, additional labels that are made available for grouping in the UI, regardless which aggregations are defined in the MonitoringDashboard CR
     * @param {boolean} [avg] Flag for fetching histogram average. Default is true.
     * @param {Array<string>} [byLabels] List of labels to use for grouping metrics (via Prometheus \&#39;by\&#39; clause).
     * @param {number} [duration] Duration of the query period, in seconds.
     * @param {string} [labelsFilters] In custom dashboards, labels filters to use when fetching metrics, formatted as key:value pairs. Ex: \&quot;app:foo,version:bar\&quot;.
     * @param {Array<string>} [quantiles] List of quantiles to fetch. Fetch no quantiles when empty. Ex: [0.5, 0.95, 0.99].
     * @param {string} [rateFunc] Prometheus function used to calculate rate: \&#39;rate\&#39; or \&#39;irate\&#39;.
     * @param {string} [rateInterval] Interval used for rate and histogram calculation.
     * @param {number} [step] Step between [graph] datapoints, in seconds.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    customDashboard(
      namespace: string,
      dashboard: string,
      additionalLabels?: string,
      avg?: boolean,
      byLabels?: Array<string>,
      duration?: number,
      labelsFilters?: string,
      quantiles?: Array<string>,
      rateFunc?: string,
      rateInterval?: string,
      step?: number,
      options?: any
    ): AxiosPromise<MonitoringDashboard> {
      return localVarFp
        .customDashboard(
          namespace,
          dashboard,
          additionalLabels,
          avg,
          byLabels,
          duration,
          labelsFilters,
          quantiles,
          rateFunc,
          rateInterval,
          step,
          options
        )
        .then(request => request(axios, basePath));
    }
  };
};

/**
 * DashboardsApi - object-oriented interface
 * @export
 * @class DashboardsApi
 * @extends {BaseAPI}
 */
export class DashboardsApi extends BaseAPI {
  /**
   * Endpoint to fetch a custom dashboard
   * @param {string} namespace The namespace name.
   * @param {string} dashboard The dashboard resource name.
   * @param {string} [additionalLabels] In custom dashboards, additional labels that are made available for grouping in the UI, regardless which aggregations are defined in the MonitoringDashboard CR
   * @param {boolean} [avg] Flag for fetching histogram average. Default is true.
   * @param {Array<string>} [byLabels] List of labels to use for grouping metrics (via Prometheus \&#39;by\&#39; clause).
   * @param {number} [duration] Duration of the query period, in seconds.
   * @param {string} [labelsFilters] In custom dashboards, labels filters to use when fetching metrics, formatted as key:value pairs. Ex: \&quot;app:foo,version:bar\&quot;.
   * @param {Array<string>} [quantiles] List of quantiles to fetch. Fetch no quantiles when empty. Ex: [0.5, 0.95, 0.99].
   * @param {string} [rateFunc] Prometheus function used to calculate rate: \&#39;rate\&#39; or \&#39;irate\&#39;.
   * @param {string} [rateInterval] Interval used for rate and histogram calculation.
   * @param {number} [step] Step between [graph] datapoints, in seconds.
   * @param {*} [options] Override http request option.
   * @throws {RequiredError}
   * @memberof DashboardsApi
   */
  public customDashboard(
    namespace: string,
    dashboard: string,
    additionalLabels?: string,
    avg?: boolean,
    byLabels?: Array<string>,
    duration?: number,
    labelsFilters?: string,
    quantiles?: Array<string>,
    rateFunc?: string,
    rateInterval?: string,
    step?: number,
    options?: any
  ) {
    return DashboardsApiFp(this.configuration)
      .customDashboard(
        namespace,
        dashboard,
        additionalLabels,
        avg,
        byLabels,
        duration,
        labelsFilters,
        quantiles,
        rateFunc,
        rateInterval,
        step,
        options
      )
      .then(request => request(this.axios, this.basePath));
  }
}
