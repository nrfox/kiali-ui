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

import { Address } from './address';
import { Port } from './port';

/**
 *
 * @export
 * @interface Endpoint
 */
export interface Endpoint {
  /**
   *
   * @type {Array<Address>}
   * @memberof Endpoint
   */
  addresses?: Array<Address>;
  /**
   *
   * @type {Array<Port>}
   * @memberof Endpoint
   */
  ports?: Array<Port>;
}
