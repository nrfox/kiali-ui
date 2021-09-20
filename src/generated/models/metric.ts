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

import { Datapoint } from './datapoint';

/**
 *
 * @export
 * @interface Metric
 */
export interface Metric {
  /**
   *
   * @type {Array<Datapoint>}
   * @memberof Metric
   */
  datapoints?: Array<Datapoint>;
  /**
   *
   * @type {{ [key: string]: string; }}
   * @memberof Metric
   */
  labels?: { [key: string]: string };
  /**
   *
   * @type {string}
   * @memberof Metric
   */
  name?: string;
  /**
   *
   * @type {string}
   * @memberof Metric
   */
  stat?: string;
}
