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

import { Namespace } from './namespace';
import { ServiceOverview } from './service-overview';

/**
 *
 * @export
 * @interface ServiceList
 */
export interface ServiceList {
  /**
   *
   * @type {Namespace}
   * @memberof ServiceList
   */
  namespace?: Namespace;
  /**
   *
   * @type {Array<ServiceOverview>}
   * @memberof ServiceList
   */
  services?: Array<ServiceOverview>;
  /**
   *
   * @type {object}
   * @memberof ServiceList
   */
  validations?: object;
}
