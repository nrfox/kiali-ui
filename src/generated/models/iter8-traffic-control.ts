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

import { Iter8Match } from './iter8-match';

/**
 *
 * @export
 * @interface Iter8TrafficControl
 */
export interface Iter8TrafficControl {
  /**
   *
   * @type {Iter8Match}
   * @memberof Iter8TrafficControl
   */
  match?: Iter8Match;
  /**
   *
   * @type {number}
   * @memberof Iter8TrafficControl
   */
  maxIncrement?: number;
  /**
   *
   * @type {string}
   * @memberof Iter8TrafficControl
   */
  onTermination?: string;
  /**
   *
   * @type {number}
   * @memberof Iter8TrafficControl
   */
  percentage?: number;
  /**
   *
   * @type {string}
   * @memberof Iter8TrafficControl
   */
  strategy?: string;
}
