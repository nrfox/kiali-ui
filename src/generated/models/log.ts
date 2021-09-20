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

import { KeyValue } from './key-value';

/**
 * Log is a log emitted in a span
 * @export
 * @interface Log
 */
export interface Log {
  /**
   *
   * @type {Array<KeyValue>}
   * @memberof Log
   */
  fields?: Array<KeyValue>;
  /**
   *
   * @type {number}
   * @memberof Log
   */
  timestamp?: number;
}
