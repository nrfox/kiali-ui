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

import { Metric } from './metric';

/**
 * Chart is the model representing a custom chart, transformed from charts in MonitoringDashboard config resource
 * @export
 * @interface Chart
 */
export interface Chart {
  /**
   *
   * @type {string}
   * @memberof Chart
   */
  chartType?: string;
  /**
   *
   * @type {string}
   * @memberof Chart
   */
  error?: string;
  /**
   *
   * @type {number}
   * @memberof Chart
   */
  max?: number;
  /**
   *
   * @type {Array<Metric>}
   * @memberof Chart
   */
  metrics?: Array<Metric>;
  /**
   *
   * @type {number}
   * @memberof Chart
   */
  min?: number;
  /**
   *
   * @type {string}
   * @memberof Chart
   */
  name?: string;
  /**
   *
   * @type {number}
   * @memberof Chart
   */
  spans?: number;
  /**
   *
   * @type {boolean}
   * @memberof Chart
   */
  startCollapsed?: boolean;
  /**
   *
   * @type {string}
   * @memberof Chart
   */
  unit?: string;
  /**
   *
   * @type {string}
   * @memberof Chart
   */
  xAxis?: string;
}
