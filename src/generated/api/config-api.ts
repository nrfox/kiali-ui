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
import { InlineResponse404 } from '../models';
// @ts-ignore
import { InlineResponse500 } from '../models';
// @ts-ignore
import { IstioConfigDetails } from '../models';
// @ts-ignore
import { IstioConfigList } from '../models';
/**
 * ConfigApi - axios parameter creator
 * @export
 */
export const ConfigApiAxiosParamCreator = function (configuration?: Configuration) {
  return {
    /**
     * Endpoint to get the caller permissions on new Istio Config objects
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    getPermissions: async (options: any = {}): Promise<RequestArgs> => {
      const localVarPath = `/istio/permissions`;
      // use dummy base URL string because the URL constructor only accepts absolute URLs.
      const localVarUrlObj = new URL(localVarPath, DUMMY_BASE_URL);
      let baseOptions;
      if (configuration) {
        baseOptions = configuration.baseOptions;
      }

      const localVarRequestOptions = { method: 'GET', ...baseOptions, ...options };
      const localVarHeaderParameter = {} as any;
      const localVarQueryParameter = {} as any;

      setSearchParams(localVarUrlObj, localVarQueryParameter, options.query);
      let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
      localVarRequestOptions.headers = { ...localVarHeaderParameter, ...headersFromBaseOptions, ...options.headers };

      return {
        url: toPathString(localVarUrlObj),
        options: localVarRequestOptions
      };
    },
    /**
     * Endpoint to create an Istio object by using an Istio Config item
     * @param {string} namespace The namespace name.
     * @param {string} objectType The Istio object type.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    istioConfigCreate: async (namespace: string, objectType: string, options: any = {}): Promise<RequestArgs> => {
      // verify required parameter 'namespace' is not null or undefined
      assertParamExists('istioConfigCreate', 'namespace', namespace);
      // verify required parameter 'objectType' is not null or undefined
      assertParamExists('istioConfigCreate', 'objectType', objectType);
      const localVarPath = `/namespaces/{namespace}/istio/{object_type}`
        .replace(`{${'namespace'}}`, encodeURIComponent(String(namespace)))
        .replace(`{${'object_type'}}`, encodeURIComponent(String(objectType)));
      // use dummy base URL string because the URL constructor only accepts absolute URLs.
      const localVarUrlObj = new URL(localVarPath, DUMMY_BASE_URL);
      let baseOptions;
      if (configuration) {
        baseOptions = configuration.baseOptions;
      }

      const localVarRequestOptions = { method: 'POST', ...baseOptions, ...options };
      const localVarHeaderParameter = {} as any;
      const localVarQueryParameter = {} as any;

      setSearchParams(localVarUrlObj, localVarQueryParameter, options.query);
      let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
      localVarRequestOptions.headers = { ...localVarHeaderParameter, ...headersFromBaseOptions, ...options.headers };

      return {
        url: toPathString(localVarUrlObj),
        options: localVarRequestOptions
      };
    },
    /**
     * Endpoint to delete the Istio Config of an (arbitrary) Istio object
     * @param {string} namespace The namespace name.
     * @param {string} object The Istio object name.
     * @param {string} objectType The Istio object type.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    istioConfigDelete: async (
      namespace: string,
      object: string,
      objectType: string,
      options: any = {}
    ): Promise<RequestArgs> => {
      // verify required parameter 'namespace' is not null or undefined
      assertParamExists('istioConfigDelete', 'namespace', namespace);
      // verify required parameter 'object' is not null or undefined
      assertParamExists('istioConfigDelete', 'object', object);
      // verify required parameter 'objectType' is not null or undefined
      assertParamExists('istioConfigDelete', 'objectType', objectType);
      const localVarPath = `/namespaces/{namespace}/istio/{object_type}/{object}`
        .replace(`{${'namespace'}}`, encodeURIComponent(String(namespace)))
        .replace(`{${'object'}}`, encodeURIComponent(String(object)))
        .replace(`{${'object_type'}}`, encodeURIComponent(String(objectType)));
      // use dummy base URL string because the URL constructor only accepts absolute URLs.
      const localVarUrlObj = new URL(localVarPath, DUMMY_BASE_URL);
      let baseOptions;
      if (configuration) {
        baseOptions = configuration.baseOptions;
      }

      const localVarRequestOptions = { method: 'DELETE', ...baseOptions, ...options };
      const localVarHeaderParameter = {} as any;
      const localVarQueryParameter = {} as any;

      setSearchParams(localVarUrlObj, localVarQueryParameter, options.query);
      let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
      localVarRequestOptions.headers = { ...localVarHeaderParameter, ...headersFromBaseOptions, ...options.headers };

      return {
        url: toPathString(localVarUrlObj),
        options: localVarRequestOptions
      };
    },
    /**
     * Endpoint to get the Istio Config of an Istio object
     * @param {string} namespace The namespace name.
     * @param {string} object The Istio object name.
     * @param {string} objectType The Istio object type.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    istioConfigDetails: async (
      namespace: string,
      object: string,
      objectType: string,
      options: any = {}
    ): Promise<RequestArgs> => {
      // verify required parameter 'namespace' is not null or undefined
      assertParamExists('istioConfigDetails', 'namespace', namespace);
      // verify required parameter 'object' is not null or undefined
      assertParamExists('istioConfigDetails', 'object', object);
      // verify required parameter 'objectType' is not null or undefined
      assertParamExists('istioConfigDetails', 'objectType', objectType);
      const localVarPath = `/namespaces/{namespace}/istio/{object_type}/{object}`
        .replace(`{${'namespace'}}`, encodeURIComponent(String(namespace)))
        .replace(`{${'object'}}`, encodeURIComponent(String(object)))
        .replace(`{${'object_type'}}`, encodeURIComponent(String(objectType)));
      // use dummy base URL string because the URL constructor only accepts absolute URLs.
      const localVarUrlObj = new URL(localVarPath, DUMMY_BASE_URL);
      let baseOptions;
      if (configuration) {
        baseOptions = configuration.baseOptions;
      }

      const localVarRequestOptions = { method: 'GET', ...baseOptions, ...options };
      const localVarHeaderParameter = {} as any;
      const localVarQueryParameter = {} as any;

      setSearchParams(localVarUrlObj, localVarQueryParameter, options.query);
      let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
      localVarRequestOptions.headers = { ...localVarHeaderParameter, ...headersFromBaseOptions, ...options.headers };

      return {
        url: toPathString(localVarUrlObj),
        options: localVarRequestOptions
      };
    },
    /**
     * Endpoint to get the list of Istio Config of a namespace
     * @param {string} namespace The namespace name.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    istioConfigList: async (namespace: string, options: any = {}): Promise<RequestArgs> => {
      // verify required parameter 'namespace' is not null or undefined
      assertParamExists('istioConfigList', 'namespace', namespace);
      const localVarPath = `/namespaces/{namespace}/istio`.replace(
        `{${'namespace'}}`,
        encodeURIComponent(String(namespace))
      );
      // use dummy base URL string because the URL constructor only accepts absolute URLs.
      const localVarUrlObj = new URL(localVarPath, DUMMY_BASE_URL);
      let baseOptions;
      if (configuration) {
        baseOptions = configuration.baseOptions;
      }

      const localVarRequestOptions = { method: 'GET', ...baseOptions, ...options };
      const localVarHeaderParameter = {} as any;
      const localVarQueryParameter = {} as any;

      setSearchParams(localVarUrlObj, localVarQueryParameter, options.query);
      let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
      localVarRequestOptions.headers = { ...localVarHeaderParameter, ...headersFromBaseOptions, ...options.headers };

      return {
        url: toPathString(localVarUrlObj),
        options: localVarRequestOptions
      };
    },
    /**
     *
     * @summary Endpoint to update the Istio Config of an Istio object used for templates and adapters using Json Merge Patch strategy.
     * @param {string} namespace The namespace name.
     * @param {string} object The Istio object name.
     * @param {string} objectType The Istio object type.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    istioConfigUpdate: async (
      namespace: string,
      object: string,
      objectType: string,
      options: any = {}
    ): Promise<RequestArgs> => {
      // verify required parameter 'namespace' is not null or undefined
      assertParamExists('istioConfigUpdate', 'namespace', namespace);
      // verify required parameter 'object' is not null or undefined
      assertParamExists('istioConfigUpdate', 'object', object);
      // verify required parameter 'objectType' is not null or undefined
      assertParamExists('istioConfigUpdate', 'objectType', objectType);
      const localVarPath = `/namespaces/{namespace}/istio/{object_type}/{object}`
        .replace(`{${'namespace'}}`, encodeURIComponent(String(namespace)))
        .replace(`{${'object'}}`, encodeURIComponent(String(object)))
        .replace(`{${'object_type'}}`, encodeURIComponent(String(objectType)));
      // use dummy base URL string because the URL constructor only accepts absolute URLs.
      const localVarUrlObj = new URL(localVarPath, DUMMY_BASE_URL);
      let baseOptions;
      if (configuration) {
        baseOptions = configuration.baseOptions;
      }

      const localVarRequestOptions = { method: 'PATCH', ...baseOptions, ...options };
      const localVarHeaderParameter = {} as any;
      const localVarQueryParameter = {} as any;

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
 * ConfigApi - functional programming interface
 * @export
 */
export const ConfigApiFp = function (configuration?: Configuration) {
  const localVarAxiosParamCreator = ConfigApiAxiosParamCreator(configuration);
  return {
    /**
     * Endpoint to get the caller permissions on new Istio Config objects
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    async getPermissions(
      options?: any
    ): Promise<
      (
        axios?: AxiosInstance,
        basePath?: string
      ) => AxiosPromise<{ [key: string]: { [key: string]: ResourcePermissions } }>
    > {
      const localVarAxiosArgs = await localVarAxiosParamCreator.getPermissions(options);
      return createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration);
    },
    /**
     * Endpoint to create an Istio object by using an Istio Config item
     * @param {string} namespace The namespace name.
     * @param {string} objectType The Istio object type.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    async istioConfigCreate(
      namespace: string,
      objectType: string,
      options?: any
    ): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<IstioConfigDetails>> {
      const localVarAxiosArgs = await localVarAxiosParamCreator.istioConfigCreate(namespace, objectType, options);
      return createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration);
    },
    /**
     * Endpoint to delete the Istio Config of an (arbitrary) Istio object
     * @param {string} namespace The namespace name.
     * @param {string} object The Istio object name.
     * @param {string} objectType The Istio object type.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    async istioConfigDelete(
      namespace: string,
      object: string,
      objectType: string,
      options?: any
    ): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<void>> {
      const localVarAxiosArgs = await localVarAxiosParamCreator.istioConfigDelete(
        namespace,
        object,
        objectType,
        options
      );
      return createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration);
    },
    /**
     * Endpoint to get the Istio Config of an Istio object
     * @param {string} namespace The namespace name.
     * @param {string} object The Istio object name.
     * @param {string} objectType The Istio object type.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    async istioConfigDetails(
      namespace: string,
      object: string,
      objectType: string,
      options?: any
    ): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<IstioConfigDetails>> {
      const localVarAxiosArgs = await localVarAxiosParamCreator.istioConfigDetails(
        namespace,
        object,
        objectType,
        options
      );
      return createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration);
    },
    /**
     * Endpoint to get the list of Istio Config of a namespace
     * @param {string} namespace The namespace name.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    async istioConfigList(
      namespace: string,
      options?: any
    ): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<IstioConfigList>> {
      const localVarAxiosArgs = await localVarAxiosParamCreator.istioConfigList(namespace, options);
      return createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration);
    },
    /**
     *
     * @summary Endpoint to update the Istio Config of an Istio object used for templates and adapters using Json Merge Patch strategy.
     * @param {string} namespace The namespace name.
     * @param {string} object The Istio object name.
     * @param {string} objectType The Istio object type.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    async istioConfigUpdate(
      namespace: string,
      object: string,
      objectType: string,
      options?: any
    ): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<IstioConfigDetails>> {
      const localVarAxiosArgs = await localVarAxiosParamCreator.istioConfigUpdate(
        namespace,
        object,
        objectType,
        options
      );
      return createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration);
    }
  };
};

/**
 * ConfigApi - factory interface
 * @export
 */
export const ConfigApiFactory = function (configuration?: Configuration, basePath?: string, axios?: AxiosInstance) {
  const localVarFp = ConfigApiFp(configuration);
  return {
    /**
     * Endpoint to get the caller permissions on new Istio Config objects
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    getPermissions(options?: any): AxiosPromise<{ [key: string]: { [key: string]: ResourcePermissions } }> {
      return localVarFp.getPermissions(options).then(request => request(axios, basePath));
    },
    /**
     * Endpoint to create an Istio object by using an Istio Config item
     * @param {string} namespace The namespace name.
     * @param {string} objectType The Istio object type.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    istioConfigCreate(namespace: string, objectType: string, options?: any): AxiosPromise<IstioConfigDetails> {
      return localVarFp.istioConfigCreate(namespace, objectType, options).then(request => request(axios, basePath));
    },
    /**
     * Endpoint to delete the Istio Config of an (arbitrary) Istio object
     * @param {string} namespace The namespace name.
     * @param {string} object The Istio object name.
     * @param {string} objectType The Istio object type.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    istioConfigDelete(namespace: string, object: string, objectType: string, options?: any): AxiosPromise<void> {
      return localVarFp
        .istioConfigDelete(namespace, object, objectType, options)
        .then(request => request(axios, basePath));
    },
    /**
     * Endpoint to get the Istio Config of an Istio object
     * @param {string} namespace The namespace name.
     * @param {string} object The Istio object name.
     * @param {string} objectType The Istio object type.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    istioConfigDetails(
      namespace: string,
      object: string,
      objectType: string,
      options?: any
    ): AxiosPromise<IstioConfigDetails> {
      return localVarFp
        .istioConfigDetails(namespace, object, objectType, options)
        .then(request => request(axios, basePath));
    },
    /**
     * Endpoint to get the list of Istio Config of a namespace
     * @param {string} namespace The namespace name.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    istioConfigList(namespace: string, options?: any): AxiosPromise<IstioConfigList> {
      return localVarFp.istioConfigList(namespace, options).then(request => request(axios, basePath));
    },
    /**
     *
     * @summary Endpoint to update the Istio Config of an Istio object used for templates and adapters using Json Merge Patch strategy.
     * @param {string} namespace The namespace name.
     * @param {string} object The Istio object name.
     * @param {string} objectType The Istio object type.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    istioConfigUpdate(
      namespace: string,
      object: string,
      objectType: string,
      options?: any
    ): AxiosPromise<IstioConfigDetails> {
      return localVarFp
        .istioConfigUpdate(namespace, object, objectType, options)
        .then(request => request(axios, basePath));
    }
  };
};

/**
 * ConfigApi - object-oriented interface
 * @export
 * @class ConfigApi
 * @extends {BaseAPI}
 */
export class ConfigApi extends BaseAPI {
  /**
   * Endpoint to get the caller permissions on new Istio Config objects
   * @param {*} [options] Override http request option.
   * @throws {RequiredError}
   * @memberof ConfigApi
   */
  public getPermissions(options?: any) {
    return ConfigApiFp(this.configuration)
      .getPermissions(options)
      .then(request => request(this.axios, this.basePath));
  }

  /**
   * Endpoint to create an Istio object by using an Istio Config item
   * @param {string} namespace The namespace name.
   * @param {string} objectType The Istio object type.
   * @param {*} [options] Override http request option.
   * @throws {RequiredError}
   * @memberof ConfigApi
   */
  public istioConfigCreate(namespace: string, objectType: string, options?: any) {
    return ConfigApiFp(this.configuration)
      .istioConfigCreate(namespace, objectType, options)
      .then(request => request(this.axios, this.basePath));
  }

  /**
   * Endpoint to delete the Istio Config of an (arbitrary) Istio object
   * @param {string} namespace The namespace name.
   * @param {string} object The Istio object name.
   * @param {string} objectType The Istio object type.
   * @param {*} [options] Override http request option.
   * @throws {RequiredError}
   * @memberof ConfigApi
   */
  public istioConfigDelete(namespace: string, object: string, objectType: string, options?: any) {
    return ConfigApiFp(this.configuration)
      .istioConfigDelete(namespace, object, objectType, options)
      .then(request => request(this.axios, this.basePath));
  }

  /**
   * Endpoint to get the Istio Config of an Istio object
   * @param {string} namespace The namespace name.
   * @param {string} object The Istio object name.
   * @param {string} objectType The Istio object type.
   * @param {*} [options] Override http request option.
   * @throws {RequiredError}
   * @memberof ConfigApi
   */
  public istioConfigDetails(namespace: string, object: string, objectType: string, options?: any) {
    return ConfigApiFp(this.configuration)
      .istioConfigDetails(namespace, object, objectType, options)
      .then(request => request(this.axios, this.basePath));
  }

  /**
   * Endpoint to get the list of Istio Config of a namespace
   * @param {string} namespace The namespace name.
   * @param {*} [options] Override http request option.
   * @throws {RequiredError}
   * @memberof ConfigApi
   */
  public istioConfigList(namespace: string, options?: any) {
    return ConfigApiFp(this.configuration)
      .istioConfigList(namespace, options)
      .then(request => request(this.axios, this.basePath));
  }

  /**
   *
   * @summary Endpoint to update the Istio Config of an Istio object used for templates and adapters using Json Merge Patch strategy.
   * @param {string} namespace The namespace name.
   * @param {string} object The Istio object name.
   * @param {string} objectType The Istio object type.
   * @param {*} [options] Override http request option.
   * @throws {RequiredError}
   * @memberof ConfigApi
   */
  public istioConfigUpdate(namespace: string, object: string, objectType: string, options?: any) {
    return ConfigApiFp(this.configuration)
      .istioConfigUpdate(namespace, object, objectType, options)
      .then(request => request(this.axios, this.basePath));
  }
}
